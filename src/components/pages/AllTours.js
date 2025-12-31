import React from "react";
import '../shared/PageTemplate.css';
import ArcticTours from "./Arctic/ArcticTours";
import NewfoundlandTours from "./Newfoundland/NewfoundlandTours";
import MaritimeTours from "./Maritimes/MaritimeTours";
import AllToursTemplate from "../shared/AllToursTemplate";

function AllTours() {

    const allTours = [
        <MaritimeTours />,
        <NewfoundlandTours />,
        <ArcticTours />
    ];

    return (
        <>
            <AllToursTemplate tourList = {allTours} />
        </>
    );

}

export default AllTours;