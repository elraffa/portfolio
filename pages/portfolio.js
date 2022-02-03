import React from "react";
import Layout from "../components/layout";
import PortfolioItem from "../components/portfolio/portfolioItem";

const portfolio = () => {
  return (
    <Layout>
      <div>
        <h1>Portfolio</h1>
        <p>The following are real world projects developed for clients of my Marketing and Web Development Agency, <a href="https://mktdigitalideas.com">MKTDigital Ideas</a></p>
        <div className="portfolio">
          <PortfolioItem
            title="Huerta Tips"
            imageSrc="/images/portfolio-01.png"
            desc="This personal project is a web app designed to help gardeners grow their vegetables. It pulls data from  a JSON file to help gardeners what to plant each month of the year."
            techs="HTML, CSS, JS"
            link="https://huerta.tips"
            repo=""
          />
          <PortfolioItem
            title="Scientific meeting"
            imageSrc="/images/portfolio-02.png"
            desc="A one-page marketing site for a Scientific Congress. Built with GatsbyJS and deployed via Netlify"
            techs="HTML, CSS, JS, React.js, Gatsby.js"
            link="https://www.congresoarritmias.com.ar"
            repo=""
          />
          <PortfolioItem
            title="Social network"
            imageSrc="/images/portfolio-03.png"
            desc="A prototype for a social network for creative people. Built with React (create-react-app) and MongoDb. Deployed to Heroku"
            techs="HTML, CSS, JS, React.js, MongoDB"
            link="https://activacreativa.herokuapp.com"
            repo=""
          />
          <PortfolioItem
            title="Professional MD Website"
            imageSrc="/images/portfolio-04.png"
            desc="A basic landing page for an MD. Integrated with Google Sheets to update news"
            techs="HTML, CSS, JS, React.js, Gatsby.js, Google Sheets Integration"
            link="https://www.fidelcolque.com.ar"
            repo=""
          />
          <PortfolioItem
            title="Multiple Choice Exams"
            imageSrc="/images/portfolio-05.png"
            desc="An english teaching portal needed a way to automate exams. The forms are built with Bootstrap and plain PHP, connects to MySQL Database."
            techs="HTML, CSS, JS, Bootstrap, PHP, MySQL"
            link="https://www.ompersonal.com.ar/test"
            repo=""
          />
            <PortfolioItem
            title="Lawyer Studio"
            imageSrc="/images/portfolio-06.png"
            desc="A lawyer studio contacted me to develop a Wordpress site from scratch with Tailwind and GSAP for animations. We also designed their logo and branding."
            techs="HTML, CSS, JS, Tailwind, WordPress, PHP, MySQL"
            link="https://www.estudiogeller.com.ar"
            repo="https://github.com/elraffa/gellertheme"
          />
        </div>
      </div>
    </Layout>
  );
};

export default portfolio;
