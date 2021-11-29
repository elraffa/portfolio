import React from "react";
import Image from "next/image";

const PortfolioItem = ({ title, imageSrc, desc, techs, link, repo }) => {
  return (
    <div className='portfolio-item'>
      <h1>{title}</h1>
      <div className="image">
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
      <h4>{desc}</h4>
      <h6>{techs} | <a href={link}>Website</a> | <a href={repo}>Github Repo</a></h6>
    </div>
  );
};

export default PortfolioItem;
