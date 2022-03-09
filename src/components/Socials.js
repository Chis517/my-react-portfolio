import React from 'react';

import sm1 from "../assets/images/sm1.svg";
import sm2 from "../assets/images/sm2.svg";
import sm3 from "../assets/images/sm3.svg";
import sm4 from "../assets/images/sm4.svg";
import sm5 from "../assets/images/sm5.svg";
import sm6 from "../assets/images/sm6.svg";
import sm7 from "../assets/images/sm7.svg";
import sm8 from "../assets/images/sm8.svg";

function Socials() {
  return (
    <ul>
      <li>
        <a href="tel: 2032179750">
          <img src={sm1} alt="phone-icon" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/DJChiceOfficial" target="_blank" rel="noopener noreferrer">
          <img src={sm2} alt="facebook-icon" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/chiceofficial/" target="_blank" rel="noopener noreferrer">
          <img src={sm3} alt="instagram-icon" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Chis517" target="_blank" rel="noopener noreferrer">
          <img src={sm4} alt="github-icon" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/christian-ouimet-995856170/" target="_blank" rel="noopener noreferrer">
          <img src={sm5} alt="linkdin-icon" />
        </a>
      </li>
      <li>
        <a href="https://soundcloud.com/chice-official" target="_blank" rel="noopener noreferrer">
          <img src={sm6} alt="soundcloud-icon" />
        </a>
      </li>
      <li>
        <a href="https://www.twitch.tv/chiceofficial" target="_blank" rel="noopener noreferrer">
          <img src={sm7} alt="twitch-icon" />
        </a>
      </li>
      <li>
        <a href="mailto: cko517@hotmail.com" target="_blank" rel="noopener noreferrer">
          <img src={sm8} alt="email-icon" />
        </a>
      </li>
    </ul>
  )
}

export default Socials;