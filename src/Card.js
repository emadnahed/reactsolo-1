import React from 'react'



export default function Card(props) {
    return(
        <div className="contact-card">
                {/* <img src={ require(`../images/${props.img}`)}/> */}
                <img src={require(`${props.img}`)} className="pics"/>
                <h3>{props.Name}</h3>
                <div className="info-group">
                    <img src={require("./images/phone-icon.png")} />
                    <p>{props.Phone}</p>
                </div>
                <div className="info-group">
                    <img src={require("./images/mail-icon.png")} />
                    <p>{props.email}</p>
                </div>
            </div>
    )
}