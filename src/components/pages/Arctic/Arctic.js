import React from "react";
import "../../shared/PageTemplate.css";
import DestinationTemplate from "../../shared/DestinationTemplate";
import ArcticTours from "./ArcticTours";

function Arctic () {

    let introString = `Discover the Canadian High Maritimes with Nunavut Maritimes Expeditions,
                    offering small-group package tours departing from
                    Iqaluit. Encounter polar bears in the wild, witness the
                    Northern Lights, and experience authentic Inuit culture
                    through respectful, community-led travel.`;

    return (
        <>
            <DestinationTemplate
                heading="Nunavut Maritimes Expeditions"

                byline="Authentic Maritimes Journeys from Iqaluit"

                introduction= {introString}

                tourpackages={<ArcticTours />}
            />
        </>
    );

}

export default Arctic;