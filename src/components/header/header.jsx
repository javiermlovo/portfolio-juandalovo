import React, { useState,useEffect }  from 'react';
import {Container,Nav,Navbar,NavDropdown,Col} from 'react-bootstrap';
import Image from 'next/image'

function Header() {
    const [isDark, setIsDark] = useState(true);
    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark]); 
    return (
        <header className="header darkMode-applicable w-100">
            <Navbar expand="lg" className="py-3">
                <Container fluid className="justify-content-center d-flex">
                    <Col xs="auto">
                        <Navbar.Brand href="/">
                            <Image src={`/images/logo-juandalovo.webp`} alt="logo" width={200} height={22} className="header--logo"></Image>
                        </Navbar.Brand>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link className={`px-3`} href="/">Home</Nav.Link>
                                <Nav.Link className={`px-3`}  href="/about">About</Nav.Link>
                                <NavDropdown title="Work porfolio" className={`px-3 px-lg-0`}  id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="/porfolio/portrait">
                                        Portrait
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/porfolio/product">
                                        Product
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/porfolio/corporate">
                                        Corporate
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/porfolio/architectural">
                                        Architectural
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className={`px-3`}  href="/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col xs="auto">
                        <div className="d-flex flex-column justify-content-center">
                            <input
                                type="checkbox"
                                className="d-none"
                                id="darkMode"
                                checked={isDark}
                                onChange={({ target }) => setIsDark(target.checked)}
                                aria-label="Dark mode toggle"
                            />
                            <label className="darkMode-label" htmlFor="darkMode">
                            {!!isDark ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            ):
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            )
                            }
                            </label>
                        </div>
                    </Col>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header