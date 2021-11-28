import React from "react";
import Image from "next/image";

const PortfolioItem = ({ title, imageSrc, desc, techs, link }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div class="image">
        <a href={link} target="_blank">
          <Image
            priority
            src={imageSrc}
            className=""
            width={300}
            height={150}
            layout="responsive"
            alt="Portfolio Image Huerta Tips"
          />
        </a>
      </div>
      <h3>{desc}</h3>
      <h4>{techs}</h4>
    </div>
  );
};

export default PortfolioItem;
