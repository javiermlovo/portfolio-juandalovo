import Image from "next/image"
import Link from "next/link"
import Carousel from '../carousel/carousel'
import AboutModule from '../aboutModule/about'
import PorfolioHome from '../portfolioHome/portfolioHome'
export const HomePage = ({data}) => {
    return (
    // <div className="home-body">
    //     {data?.map(ev => 
    //     <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
    //         <div className="image">
    //             <Image alt={ev.title} width={300} height={300} src={ev.image}></Image>
    //         </div>
    //         <div className="content">
    //             <h2>{ev.title}</h2>
    //             <p>{ev.description}</p>
    //         </div>
    //     </Link>)}
    // </div>
    <>
    <Carousel></Carousel>
    <AboutModule></AboutModule>
    <PorfolioHome></PorfolioHome>
    </>
    )
}