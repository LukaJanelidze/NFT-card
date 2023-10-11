import React from "react";
import "./card.css";
import mainImg from "../../assets/Rectangle Copy.png";
import etheriumIMG from "../../assets/Combined Shape.svg"
import clockIMG from "../../assets/Clock.svg";
import authorIMG from "../../assets/Oval.svg"

const Card = () => {

    return (
        <div className="card">
            <div className="overlay">
            <img className="main-image" src={mainImg} alt="mainImage" />
            </div>
            <h1 className="title">Equilibrium #3429</h1>
            <p className="description-paragraph">Our Equilibrium collection promotes balance and calm.</p>
            <div className="info">
                <div className="etherium">
                    <img src={etheriumIMG} alt="etherium" />
                    <span>0.041 ETH</span>
                </div>
                <div className="clock">
                    <img src={clockIMG} alt="clock" />
                    <span>3 days left</span>
                </div>
            </div>
            <hr />
            <div className="author">
                <img className="author-image" src={authorIMG} alt="" />
                <p>Creation of <span>Jules Wyvern</span></p>
            </div>
        </div>
    )
}

export default Card;