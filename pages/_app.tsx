import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// types
import type { AppProps } from "next/app";

//styles
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // server-side rendering on start
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    // if we get to this point it means the code is rendering in react on client-side.
    // Therefore we now set SSR to false.
    setIsSSR(false);
  }, []);

  if (isSSR) return null; // if we are SSR, we don't want to show our components.

  return (
    <div>
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default MyApp;
