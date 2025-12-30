import React from "react";
import {Link} from "react-router-dom";
import video from "../../resources/videos/snowy-treetops.mp4";

function DestinationTemplate (props) {

    return (
        <>
            <header>
                <h1>{props.title}</h1>
                <h2>{props.byline}</h2>
            </header>

            <section>
                {props.introduction}
            </section>

            <section>
                <h2>Featured Tour Packages</h2>
                {props.tourpackages}
            </section>
        </>
    );

}

export default DestinationTemplate;