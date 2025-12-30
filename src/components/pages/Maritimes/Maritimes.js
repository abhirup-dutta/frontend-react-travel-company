import React from "react";
import "../../shared/PageTemplate.css";
import DestinationTemplate from "../../shared/DestinationTemplate";
import MaritimeTours from "./MaritimeTours";

function Maritimes () {

    let introString = `Explore Canada’s Atlantic coast with thoughtfully crafted package tours through
                    Nova Scotia and Prince Edward Island.
                    Discover rich Mi’kmaq Indigenous heritage, vibrant
                    Acadian communities, historic Scottish and English settlements,
                    and breathtaking coastal landscapes shaped by sea and time.`;

    return (
        <>
            <DestinationTemplate
                heading="Atlantic Heritage Tours"

                byline="Nova Scotia & Prince Edward Island"

                introduction={introString}

                tourpackages={<MaritimeTours />}
            />
        </>
    );

}

export default Maritimes;