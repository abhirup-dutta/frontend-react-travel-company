import React from "react";
import {Link} from "react-router-dom";
import video from "../../resources/videos/snowy-treetops.mp4";
import HeroSection from "../HeroSection";

function DestinationTemplate (props) {


    return (
        <>
            <header>
                <h1>{props.heading}</h1>
                <h2>{props.byline}</h2>
            </header>


            <div className='card-container'>
                <div className='card-image-wrapper'>
                    <img src={props.img} alt={props.alt} />
                </div>
                <div className='card-content'>
                    {props.introduction}
                </div>
            </div>


            <section>
                <h2>Featured Tour Packages</h2>
                <p>
                    {props.tourpackages}
                </p>
            </section>
        </>
    );

}

export default DestinationTemplate;