import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const userProfile = false;

  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-center lg:justify-start cursor-pointer font-semibold text-[#F51997] rounded";

  return (
    <div>
      <div
        className="block xs:hidden m-2 ml-4 mt-3 text-lg"
        onClick={() => {
          setShowSidebar((prev) => !prev);
        }}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="lg:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 lg:border-0 p-3">
          <div className="lg:border-b-2 border-gray-200 lg:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2lg">
                  <AiFillHome />
                </p>
                <span className="text-lg hidden lg:block">For You</span>
              </div>
            </Link>
          </div>
          {/* {!userProfile && (
            <div className="px-2 py-4 hidden lg:block">
              <p className="text-gray-400">Log in to like and comment</p>
              <div className="pr-4"></div>
            </div>
          )} */}

          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
