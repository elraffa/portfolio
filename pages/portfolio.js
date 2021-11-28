import React from 'react'
import Layout from '../components/layout'
import PortfolioItem from '../components/portfolio/portfolioItem'

const portfolio = () => {
    return (
        <Layout>
        <div className="portfolio">
            <PortfolioItem 
                title='Huerta Tips'
                imageSrc='/images/portfolio-01.png'
                desc='A web app designed to help gardeners grow their vegetables'
                techs='HTML, CSS, JS'
                link='https://huerta.tips'
            />
        </div>
        </Layout>
    )
}

export default portfolio
