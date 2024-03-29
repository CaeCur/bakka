import { useState, useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

//comps
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
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
      <div className="xl:w-[1200px] m-auto overflow-hidden h-[100vh]">
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
    </GoogleOAuthProvider>
  );
};

export default MyApp;
