import React from "react";
import Home from './Home';
import Blue from "./Blue";


function Hook(){
    return(
        <>
        <Home/>
        <Blue/>
        <div className="row mx-5 ps-5">
        <p className="fs-5 lh-sm mt-3">
            It's no secret that robust cybersecurity measures are lacking in a lot of small and medium businesses, but the truth of <br />
             the matter is that governments aren't doing much better. International cybersecurity became widely discussed <br />
              following email breaches of the Democratic National Convention and Russia's interference in the U.S. presidential <br />
               election.
        </p>
        <p className="fs-5 lh-sm mt-3">
            Now, however, it appears as though the UK's new cyber defense policy is wrought with deficiencies of its own. Raise <br />
             your own <span>cybersecurity awareness</span>  with CyberPolicy to better protect your organization from the threats of hacker <br />
              incursion.
        </p>
        <p className="fs-5 lh-sm mt-3">
            <strong>Cyber-Anarchy in the UK</strong>
            In January, the UK government <span>released</span>  its 'Cyber Security Regulation and Incentives Review' which confirmed the <br /> implementation of the
             European Union's 'Network and Information Security Directive' (also known as the NIS <br />
              Directive) to bolster regional cooperation on digital security requirements - despite Brexit.
        </p>
        </div>
 
        </>
    )
}

export default Hook;


