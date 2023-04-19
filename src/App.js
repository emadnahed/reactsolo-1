import React from "react"
import Data from "./Data"
import Card from "./Card"
import Navbar from "./Navbar"
import Footer from "./Footer"



export default function App() {
    const Directory = Data.map(item => {
        return <Card {...item} />})

    return (
        <>
            <Navbar />

            <div className="cont">
                <div className="contacts">
                    {Directory}    
                </div>
            </div>
            <Footer/>
        </>    
    )
}

