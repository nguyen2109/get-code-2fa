"use client";
import { useEffect, useState } from "react";
import { get } from "browser-cookies";
export const useUserIp = () => {
  const [ip, setUserIp] = useState("");
  useEffect(() => {
    const userIp = get("user-ip") ?? "error";
    console.log(userIp);
    setUserIp(userIp);
  }, []);

  return ip;
};
