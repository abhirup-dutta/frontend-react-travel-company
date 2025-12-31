import React from "react";
import "../../shared/PageTemplate.css";
import DestinationTemplate from "../../shared/DestinationTemplate";
import NewfoundlandTours from "./NewfoundlandTours";

function Newfoundland () {

    let introString = `Welcome to Newfoundland and Labrador,
                    Canada’s eastern edge and one of North America’s most culturally rich
                    and visually dramatic destinations. From the colorful streets of
                    St. John’s to the only known Viking settlement in the New World
                    , this is a place shaped by ocean winds, storytelling, and centuries of
                    resilience. Our expertly guided tours offer deep cultural immersion, breathtaking
                    landscapes, and unforgettable local experiences.`;

    return (
        <>
            <DestinationTemplate
                heading="Newfoundland &amp; Labrador"
                byline="Where Ancient Cultures Meet the Wild Atlantic"
                img="images/cabin.jpg"
                alt="wood cabin with logs and antler on the wall"
                introduction={introString}
                tourpackages={<NewfoundlandTours />}
            />
        </>
    );

}

export default Newfoundland;