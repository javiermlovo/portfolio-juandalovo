import { Row, Col, Container} from 'react-bootstrap';
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="footer darkMode-applicable container-fluid pt-5 pb-3">
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <Row>
                            <Col xs={12} className="footer--logo">
                                <Link href="/">
                                    <Image src={`/images/logo-juandalovo.webp`}  alt="logo" width={300} height={33} className="header--logo"></Image>
                                </Link>
                            </Col>
                            <Col xs={12} className="footer--social-media py-4">
                                <Link href="https://www.facebook.com/juandavid.mesalovo" target="_blank" rel="noreferrer"><FaFacebook/></Link>
                                <Link href="https://www.instagram.com/juandalovo/" target="_blank" rel="noreferrer"><FaInstagram/></Link>
                                <Link href="https://wa.link/393450213090" target="_blank" rel="noreferrer"><FaWhatsapp/></Link>
                                <Link href="https://www.linkedin.com/in/juanlovo/" target="_blank" rel="noreferrer"><FaLinkedin/></Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="footer--nav mb-4">
                        <nav>
                            <ul>
                                <li><Link href="/about" className="navigation__item">About</Link></li>
                                <li><Link href="/porfolio/portrait" className="navigation__item">Portrait</Link></li>
                                <li><Link href="/porfolio/product" className="navigation__item">Product</Link></li>
                                <li><Link href="/porfolio/architectural" className="navigation__item">Architectural</Link></li>
                                <li><Link href="/porfolio/corporate" className="navigation__item">Corporate</Link></li>
                                <li><Link href="/contact" className="navigation__item">Contact</Link></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col xs={12} lg={5}>
                        <Row className='justify-content-center text-center'>
                            <Col xs={12}>
                                <h3 className="title title--secondary mb-4">Contact me:</h3>
                            </Col>
                            <Col xs="auto mb-3">
                                <Link href="https://wa.link/393450213090" className="button-secondary" target="_blank" rel="noreferrer">
                                    <FaWhatsapp className='me-2' />
                                    Whatsapp
                                </Link>
                            </Col>
                            <Col xs="auto mb-3">
                                <Link href="tel:+39 345 021 3090" className="button-secondary px-3">
                                    <FaPhoneAlt className='me-2'/>
                                    +39 345 021 3090
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className="footer-nav__copy d-flex justify-content-center pt-3">
                        <p className='m-0'>Copyright © © Juan David Mesa Lovo 2023. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer