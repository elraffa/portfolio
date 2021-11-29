import React from "react";
import Layout from "../components/layout";
import PortfolioItem from "../components/portfolio/portfolioItem";

const portfolio = () => {
  return (
    <Layout>
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
      </div>
    </Layout>
  );
};

export default portfolio;
