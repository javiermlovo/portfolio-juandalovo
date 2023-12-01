import React from "react";
import Header from "../header/header";
import Footer  from "../footer/footer";
import 'bootstrap/dist/css/bootstrap.css'
const MainLayout = ({children}) => {
    return (
        <>
        <Header/>
            <main className="App">
                {children}
            </main>
        <Footer/>
        </>
    )
}

export default MainLayout