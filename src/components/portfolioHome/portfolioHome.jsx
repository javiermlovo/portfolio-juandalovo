"use client";
import { Row, Col, Container} from 'react-bootstrap';
import {useState, useEffect, useCallback} from 'react';
import {client} from '../../../pages/api/client';

function PorfolioHome() {
    const [isPortfolioLoading, setIsPortfolioLoading] = useState(false)
    const [portfolioItems, setPorfolioItems]=useState([])

    const cleanUpPortfolioItmes = useCallback((rawData) =>{
        const cleanItem = rawData.map((item)=>{
            const{sys,fields} = item;
            const {id} = sys;
            const slidesSubtitle = fields.subTitle;
            const imgPc = fields.imagePc.fields.file.url;
            const imgMobile = fields.imageMobile.fields.file.url;
            const slideSlug = fields.slug
            const updatedSlide = {id, slidesSubtitle, imgPc,imgMobile,slideSlug}
            return updatedSlide
        })
        setPorfolioItems(cleanItem)
    },[])

    const getPorfolioItems = useCallback(async ()=>{
        setIsPortfolioLoading(true)
        try{
            const response = await client.getEntries({content_type:'homeCarousel'})
            const data = response.items
            if(data){
                cleanUpPortfolioItmes(data)
            } else {
                setPorfolioItems([])
            }
            setIsPortfolioLoading(false)
        }catch(error){
            console.log(error)
            setIsPortfolioLoading(false)
        }
    },[cleanUpPortfolioItmes])
    useEffect(()=>{
        getPorfolioItems();
    },[getPorfolioItems])
    return (
        <section className="PorfolioHome container-fluid darkMode-applicable py-4 py-md-5">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h3 className="title mb-4">Porfolio</h3>
                    </Col>
                    {portfolioItems.map((item)=>{
                        return(
                            <Col xs={12} md={6} key={item.id} className='py-3'>
                                <div className="PorfolioHome-card h-100">
                                    <picture>
                                        <source srcSet={item.imageMobile} media="(min-width: 600px)"></source>
                                        <img src={item.imgPc} className="PorfolioHome-card--img" alt="MDN"></img>
                                    </picture>  
                                    <a className="PorfolioHome-card--info" href={`/porfolio/${item.slideSlug}`}> 
                                        <h3 className="title title--secondary">{item.slidesSubtitle}</h3>
                                    </a>
                                </div>
                            </Col>
                        )}
                    )}
                </Row>
            </Container>
        </section>
        );
    }
export default PorfolioHome