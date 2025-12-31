import React from "react";
import "./shared/PageTemplate.css";

function About () {

    let aboutContent = `This is a FAKE travel website created for
        the purpose of demonstrating hands-on experience with React, 
        JavaScript, and CSS. The pictures used are available
        free to the public on the internet and the text 
        content regarding tours, destinations, etc. are AI-generated,
        and may be inaccurate. Thank you for experiencing this
        demonstration of a responsive website.`;

    return (
        <>
            <section>
                <h1>About Us</h1>
                <p>
                    {aboutContent}
                </p>
            </section>
        </>
    );

}

export default About;