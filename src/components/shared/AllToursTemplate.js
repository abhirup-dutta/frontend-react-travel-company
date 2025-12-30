import React from "react";
import {Link} from "react-router-dom";
import video from "../../resources/videos/snowy-treetops.mp4";

function AllToursTemplate (props) {

    const tourList = {props}.props.tourList;

    const renderedTours = [];

    tourList.map(tour => {
       renderedTours.push(<section>{tour}</section>);
    });

    return (
        <>
            <header>
                <h2>Featured Tour Packages</h2>
            </header>
            <>
                {renderedTours}
            </>
        </>
    );

}

export default AllToursTemplate;