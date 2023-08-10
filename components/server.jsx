"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
export default function Server() {
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
  }, []); // Mảng rỗng [] đảm bảo useEffect chỉ chạy một lần khi component mount

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
          ></textarea>
          <button class="my-4 rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 dark:bg-purple-600 dark:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            GET CODE
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 space-x-0 sm:space-x-4">
          <div class="col-span-2">
            <div class="m-4 mx-auto items-center rounded-xl bg-white p-2  shadow-lg dark:bg-slate-700">
              <div class="grid grid-cols-4">
                <div class="justify-start col-span-2">7cng 7luq lhdm 5qjp</div>
                <div>123456</div>
                <div className="ml-auto">
                  <button class="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 dark:bg-purple-600 dark:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    copy
                  </button>
                </div>
              </div>
            </div>
            <div class="m-4 mx-auto items-center rounded-xl bg-white p-2  shadow-lg dark:bg-slate-700">
              <div class="grid grid-cols-4">
                <div class="justify-start col-span-2">7cng 7luq lhdm 5qjp</div>
                <div>123456</div>
                <div className="ml-auto">
                  <button class="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent dark:bg-purple-600 dark:text-white hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    copy
                  </button>
                </div>
              </div>
            </div>
            <div class="m-4 mx-auto items-center rounded-xl bg-white p-2  shadow-lg dark:bg-slate-700">
              <div class="grid grid-cols-4">
                <div class="justify-start col-span-2">7cng 7luq lhdm 5qjp</div>
                <div>123456</div>
                <div className="ml-auto">
                  <button class="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent dark:bg-purple-600 dark:text-white hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="m-4 mx-auto items-center rounded-xl bg-white p-2  shadow-lg dark:bg-slate-700">
              <div class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                <h1 class="text-2xl font-bold text-center">History</h1>
              </div>
              <p className="text-center">
                <span className="bg-slate-200 rounded-lg">192.168.1.1</span> got
                10 code <span className="text-slate-500 italic ">now</span>
              </p>
              <p className="text-center">
                <span className="bg-slate-200 rounded-lg">192.168.1.1</span> got
                10 code{" "}
                <span className="text-slate-500 italic ">30 seconds ago</span>
              </p>
              <p className="text-center">
                <span className="bg-slate-200 rounded-lg">192.168.1.1</span> got
                10 code{" "}
                <span className="text-slate-500 italic ">1 minute ago</span>
              </p>
              <p className="text-center">
                <span className="bg-slate-200 rounded-lg">192.168.1.1</span> got
                10 code{" "}
                <span className="text-slate-500 italic ">5 hours ago</span>
              </p>
              <p className="text-center">
                <span className="bg-slate-200 rounded-lg">192.168.1.1</span> got
                10 code{" "}
                <span className="text-slate-500 italic ">30 seconds ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
