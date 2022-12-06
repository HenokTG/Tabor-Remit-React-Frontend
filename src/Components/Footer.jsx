import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

// FaFacebookF, BsFacebook;
function Footer() {
  return (
    <div className="bg-sky-50 App-footer xxs:w-full ">
      <div className="flex justify-between items-center flex-wrap py-12 px-4 xs:px-8 sm:px-16 md:px-24 md:grid md:grid-cols-4 md:grid-flow-row md:gap-4 ">
        <h1 className="text-purple-600 text-2xl font-bold justify-self-start">
          <a href="/">Tabs.</a>
        </h1>
        <div className="my-4 xxs:mx-8 justify-self-start">
          <p className="whitespace-nowrap">
            <a href="/#">FQA</a>
          </p>
          <p className="whitespace-nowrap">
            <a href="#how-it-works">How it works?</a>
          </p>
          <p className="whitespace-nowrap">
            <a href="/#">Support Center</a>
          </p>
          <p className="whitespace-nowrap">
            <a href="/#">About us</a>
          </p>
        </div>
        <div className="col-span-2 justify-self-center">
          <h3 className="font-bold text-left my-4">Connect</h3>
          <div className="flex flex-nowrap md:justify-between">
            <div className="bg-neutral-500 rounded-full mx-2 w-fit p-2">
              <a href="/#">
                <FaFacebookF color="white" fontSize="1.5rem" />
              </a>
            </div>
            <div className="bg-neutral-500 rounded-full mx-2 w-fit p-2">
              <a href="/#">
                <FaTwitter color="white" fontSize="1.5rem" />
              </a>
            </div>
            <div className="bg-neutral-500 rounded-full mx-2 w-fit p-2">
              <a href="/#">
                <FaInstagram color="white" fontSize="1.5rem" />
              </a>
            </div>
            <div className="bg-neutral-500 rounded-full mx-2 w-fit p-2">
              <a href="/#">
                <FaTelegramPlane color="white" fontSize="1.5rem" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold pb-4 text-xs xs:text-base">
        © Tabs 2022. Disigned by [...]. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
