import React from "react";

const downloadAppList = [
  {
    id: 1,
    text: "Google Playstore",
    imgLink: "/static/images/homepage/download-section/google-playstore.png",
    downloadLink: "#",
  },
  {
    id: 2,
    text: "Apple Store",
    imgLink: "/static/images/homepage/download-section/apple.png",
    downloadLink: "#",
  },
];

function DownloadApp() {
  return (
    <div className="download-bg bg-gradient-to-r from-purple-700 to-purple-900 flex flex-row justify-evenly items-center md:items-end md:mt-20 md:justify-between">
      <img
        src="/static/images/homepage/download-section/iPhone.png"
        alt="download mobile app"
        className="download-img hidden md:block"
      />
      <div className="download-promo text-left text-white md:pb-6 xl:pb-28 w-full md:w-1/2">
        <h1 className="font-bold text-2xl sm:text-xl">Download Our App Now</h1>
        <div className="my-8 md:my-4 lg:my-8">
          <p className="text-sm sm:text-base mb-4">
            For best user experience download <strong>Tabs.</strong> application
            from Google Playstore or Apple Store.
          </p>
          <p className="text-sm sm:text-base">
            You will be able to purchse mobile package fast and securely.
          </p>
        </div>
        <div className="flex flex-row justify-start items-center flex-wrap">
          {downloadAppList.map((elem) => (
            <a
              key={elem.id}
              href={elem.downloadLink}
              className="grid grid-cols-7 gap-2 p-1 lg:p-2 w-52 outline outline-2 rounded-md m-2"
            >
              <img
                src={elem.imgLink}
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
  );
}

export default DownloadApp;
