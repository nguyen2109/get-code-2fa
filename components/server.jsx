"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import QRCode from "react-qr-code";
import clipboardCopy from "clipboard-copy";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import GitHubButton from "react-github-btn";

export default function Server() {
  const [textareaValue, setTextareaValue] = useState("");
  const [jsonResults, setJsonResults] = useState([]);
  const [input, setInput] = useState([]);
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [showQRIndex, setShowQRIndex] = useState(null);
  const getCode = async () => {
    const lines = textareaValue
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");
    setInput(lines);
    const results = [];

    for (const index in lines) {
      const line = lines[index];
      try {
        const response = await fetch(`/api/2fa/${encodeURIComponent(line)}`);
        if (response.ok) {
          const data = await response.json();
          results.push(data);
        } else {
          console.error("Request failed:", response.status);
          results.push(null);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        results.push(null);
      }
      setJsonResults([...results]); // Hiển thị kết quả ngay sau mỗi request
      if (index < lines.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 10)); // 1 second delay
      }
    }
  };

  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <>
      <div class="relative container mx-auto">
        <div class="mx-auto flex w-full p-2">
          <div class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            <h1 class="text-2xl font-bold">2fa Auth Code</h1>
          </div>
          <button onClick={toggleTheme} class="ml-auto">
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6 stroke-cyan-500 stroke-1 hover:fill-cyan-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 fill-yellow-500 stroke-yellow-500 stroke-1"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            )}
          </button>
        </div>
        <div class="mx-auto items-center rounded-xl bg-white p-2 shadow-lg dark:bg-slate-700">
          <p class=" dark:text-white italic text-slate-500">
            Follow and give me a star! Thank you 💖
          </p>
          <GitHubButton
            href="https://github.com/nguyen2109"
            data-color-scheme="no-preference: light; light: dark_high_contrast; dark: dark_high_contrast;"
            data-size="large"
            data-show-count="true"
            aria-label="Follow @nguyen2109 on GitHub"
          >
            Follow @nguyen2109
          </GitHubButton>
          <GitHubButton
            href="https://github.com/nguyen2109/get-code-2fa"
            data-color-scheme="no-preference: light; light: dark_high_contrast; dark: dark_high_contrast;"
            data-size="large"
            data-show-count="true"
            aria-label="Star nguyen2109/get-code-2fa on GitHub"
          >
            Star
          </GitHubButton>

          <p class=" dark:text-white">
            Before Clicking “Get code” enter your 2FA code here.
          </p>
          <p class="italic text-slate-500 dark:text-white">
            * <b>2FA Secret</b> Get code for 2 factor authentication easiest -
            Please store your 2FA secret safely
          </p>

          <textarea
            class="border-nonemt-1 block w-full rounded-md border border-gray-300 bg-slate-100 py-4 ring-0 dark:bg-slate-500"
            rows="8"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          ></textarea>
          <button
            onClick={getCode}
            class="my-4 rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 dark:bg-purple-600 dark:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            GET CODE
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 sm:space-x-4">
          <div className="col-span-2">
            {jsonResults.map((result, index) => (
              <div
                key={index}
                className=" m-4 mx-auto items-center rounded-xl bg-white p-2  shadow-lg dark:bg-slate-700"
              >
                <div className="grid grid-cols-4">
                  <div className="justify-start truncate">{input[index]}</div>
                  <div className="ml-auto">
                    <span className="dark:text-white dark:bg-green-800 text-green-800 bg-green-200 text-sm font-medium rounded-lg bg-opacity-50 p-1.5">
                      {result ? result.token : "ERROR"}
                    </span>
                  </div>
                  <div className="col-span-2 ml-auto">
                    <button
                      onClick={() => setShowQRIndex(index)} // Lưu chỉ số dòng mở mã QR
                      className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 dark:bg-purple-600 dark:text-white"
                    >
                      Get QR
                    </button>
                    <button
                      onClick={() => {
                        if (jsonResults[index]) {
                          clipboardCopy(jsonResults[index].token);
                          setShowCopyNotification(true);
                          setTimeout(() => {
                            setShowCopyNotification(false);
                          }, 2000); // 2 seconds
                        }
                      }}
                      class="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 dark:bg-purple-600 dark:text-white"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {showCopyNotification && (
              <div className="fixed bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4 text-white text-center">
                Copied successfully!
              </div>
            )}
          </div>
          <div>
            <div class="m-4 mx-auto rounded-xl bg-transfer p-2  dark:bg-transfer">
              <div class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                <h1 class="text-2xl font-bold text-center ">QR CODE</h1>
              </div>
              {showQRIndex !== null &&
              jsonResults[showQRIndex] &&
              jsonResults[showQRIndex].token ? (
                <QRCode
                  value={input[showQRIndex]}
                  size={128}
                  style={{
                    height: "128",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  viewBox={`0 0 256 256`}
                />
              ) : null}
              <span
                className={
                  showQRIndex !== null &&
                  jsonResults[showQRIndex] &&
                  jsonResults[showQRIndex].token
                    ? "hidden"
                    : ""
                }
              >
                QR Code is empty! You need to click on button
                <span className="m-2 rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 dark:bg-purple-600 dark:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                  Get QR
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
