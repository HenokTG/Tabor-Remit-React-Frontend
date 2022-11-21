import React, { useState } from "react";

import iPhone from "../Images/Homepage/download-section/iPhone.png";
import googlePlay from "../Images/Homepage/download-section/google-playstore.png";
import appleStore from "../Images/Homepage/download-section/apple.png";

const downloadAppList = [
  { id: 1, text: "Google Playstore", logo: googlePlay, downloadLink: "#" },
  { id: 2, text: "Apple Store", logo: appleStore, downloadLink: "#" },
];


function DownloadApp() {
  return (
    <div className="download-bg bg-gradient-to-r from-purple-700 to-purple-900 relative mt-20 flex flex-row justify-end items-center">
      <img
        src={iPhone}
        alt="download mobile app"
        className="download-img bottom-0 left-32 absolute"
      />
      <div className="grid grid-cols-6 text-white">
        <div className="col-start-4 col-span-2 text-left">
          <h1 className="font-bold">Download Our App Now</h1>
          <div className="text-md my-12">
            <p>
              For best user experience download <strong>Tabs.</strong>{" "}
              application from Google Playstore or Apple Store.
            </p>
            <p>You will be able to purchse mobile package fast and securely.</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            {downloadAppList.map((elem) => (
              <a
                href={elem.downloadLink}
                className="grid grid-cols-7 gap-2 px-2 py-2 w-60 outline outline-2 rounded-md "
              >
                <img
                  src={elem.logo}
                  alt={elem.text}
                  className="col-span-2 justify-self-center h-10"
                />
                <div className="col-start-3 col-span-5 flex flex-col justify-between items-start">
                  <p className="text-xs ">Get it on</p>
                  <p className="text-base ">{elem.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
