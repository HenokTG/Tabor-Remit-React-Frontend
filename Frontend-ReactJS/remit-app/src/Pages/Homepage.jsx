import React from "react";

import PhoneForm from "../Components/RecieverPhoneForm";
import shareLogo from "../Images/Remit-Bg.png";

function HomePage() {
  return (
    <div className="home-conatainer">
      <img src={shareLogo} alt="transfering money" id="home-img" />

      <div className="home-content">
        <div className="home-desc">
          <h2>Mobile Top-up App</h2>
          <p>
            Pariatur quis cupidatat cupidatat est mollit Lorem non ut quis officia. Elit veniam nisi cupidatat aute esse ea commodo ut. Qui aliquip nulla amet ex reprehenderit velit. Cillum aute sit magna ad pariatur aute fugiat est laboris nulla nisi adipisicing. Sit dolor aliqua aliqua qui amet cupidatat sit.
          </p>
        </div>
        <PhoneForm />
      </div>
    </div>
  );
}

export default HomePage;
