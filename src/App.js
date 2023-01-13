import React from "react"
import Data from "./Data"
import Card from "./Card"




export default function App() {
    const Directory = Data.map(item => {
        return <Card {...item} />})

    return (
        <div className="contacts">
                {Directory}    
        </div>
    )
}

