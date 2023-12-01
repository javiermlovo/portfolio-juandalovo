"use client";
import {useState, useEffect, useCallback} from 'react';
import {client} from '../../../pages/api/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, EffectFade,Autoplay} from 'swiper/modules';
const Carousel = () => {
    const [ isCarouselLoading, setIsCarouselLoading] = useState(false)
    const [carouselSlides, setCarouselSlades]=useState([])

    const cleanUpCarouselSlides = useCallback((rawData) =>{
        const cleanSlides = rawData.map((slide)=>{
            const{sys,fields} = slide;
            const {id} = sys;
            const slidesTitle = fields.title;
            const slidesDescription = fields.description;
            const imgPc = fields.imagePc.fields.file.url;
            const imgMobile = fields.imageMobile.fields.file.url;
            const slideSlug = fields.slug
            const updatedSlide = {id, slidesTitle,slidesDescription, imgPc,imgMobile,slideSlug}
            return updatedSlide
        })
        setCarouselSlades(cleanSlides)
    },[])

    const getCarouselSlides = useCallback(async ()=>{
        setIsCarouselLoading(true)
        try{
            const response = await client.getEntries({content_type:'homeCarousel'})
            const data = response.items
            if(data){
                cleanUpCarouselSlides(data)
            } else {
                setCarouselSlades([])
            }
            setIsCarouselLoading(false)
        }catch(error){
            console.log(error)
            setIsCarouselLoading(false)
        }
    },[cleanUpCarouselSlides])
    useEffect(()=>{
        getCarouselSlides();
    },[getCarouselSlides])
    return (
        <section className="carrusel container-fluid p-0">
            <Swiper 
            className="container-fluid p-0"
            pagination={true}
            effect={'fade'}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[EffectFade,Autoplay, Pagination, Navigation]}
            >
                {carouselSlides.map((slide)=>{
                    return(
                        <SwiperSlide key={slide.id}>
                            <Container className="p-0 h-100" fluid>
                            <div className="carrusel-card h-100">
                                <picture>
                                    <source srcSet={slide.imageMobile} media="(min-width:768px)"></source>
                                    <img src={slide.imgPc} alt="MDN"></img>
                                </picture>  
                                <div className="carrusel-card--info">
                                    <h3 className="title">{slide.slidesTitle}</h3>
                                    <p className="date mb-4">{slide.slidesDescription}</p>
                                    <Link href={`/porfolio/${slide.slideSlug}`} className="button-primary" rel="noreferrer">Info</Link>
                                </div>
                            </div>
                            </Container>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Carousel