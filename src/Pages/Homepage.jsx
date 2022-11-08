import React, { useState, useEffect } from "react";

import footerImage from "../Images/remittance.jpg";

import PhoneForm from "../Components/RecieverPhoneForm";
import shareLogo from "../Images/Remit-Bg.png";
import payPalLogo from "../Images/paypal-logo.png";

function HomePage() {
  const [winSize, setWinSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      console.log("Window Resized! ", window.innerWidth);
      setWinSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [winSize]);

  return (
    <div className="home-conatainer">
      <img
        src={shareLogo}
        alt="transfering money"
        id="mobile-img"
        className="home-img"
      />
      <section className={winSize >= 768 ? "black-bg-section" : "home-content"}>
        <div className="home-desc">
          <h2>Mobile Top-up App</h2>
          <p>
            Pariatur quis cupidatat cupidatat est mollit Lorem non ut quis
            officia. Elit veniam nisi cupidatat aute esse ea commodo ut. Qui
            aliquip nulla amet ex reprehenderit velit. Cillum aute sit magna ad
            pariatur aute fugiat est laboris nulla nisi adipisicing. Sit dolor
            aliqua aliqua qui amet cupidatat sit.
          </p>
        </div>
        <div className="home-form">
          <PhoneForm />
        </div>
      </section>
      <div className="floating-form">
        <PhoneForm />
        <div className="hero-footer">
          <h2>Secured payments</h2>
          <img src={payPalLogo} alt="Pay with PayPal" id="paypal-img" />
        </div>
      </div>
      <section className="white-bg-section">
        <img
          src={shareLogo}
          alt="transfering money"
          id="desktop-img"
          className="home-img"
        />
        <div className="message-box">
          <h1>Send a little happiness to Ethiopia!</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            at fuga ipsum doloremque iste quod labore. Tempore!
          </h3>
        </div>
        <div className="footer-content">
          <img
            src={footerImage}
            alt="Remmitance coin"
            className="footer-cute"
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
