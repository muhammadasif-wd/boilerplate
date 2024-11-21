"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { useLayoutEffect, useState } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [online, setOnline] = useState(true);
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("online", () => setOnline(true));
      window.addEventListener("offline", () => setOnline(false));
    }
  }, []);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {!online && (
          <div className="bg-warning px-4 py-2 text-white">
            <p className="text-center text-sm font-medium">
              No Internet!
              <p className="inline-block mx-1">{`You're offline. Check your internet connection.`}</p>
            </p>
          </div>
        )}

        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
