import Image from "next/image"
import Link from "next/link"
import Carousel from '../carousel/carousel'
import AboutModule from '../aboutModule/about'
import PorfolioHome from '../portfolioHome/portfolioHome'
export const HomePage = ({data}) => {
    return (
    <>
    <Carousel></Carousel>
    <AboutModule></AboutModule>
    <PorfolioHome></PorfolioHome>
    </>
    )
}