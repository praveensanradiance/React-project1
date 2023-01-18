import React from "react";

function Blue(){
    return(
        <>
        <div className="container-fluid g-0 mt-5">
    <div clclassNameass="bg">
        <div className="row mx-auto">
            <div className="col-md-6 justify-content-center">
               <div className="align">
                <p>CYBER INSURANCE FOR SMALL AND MEDIUM-SIZED BUSINESSES</p>
                <h1>Quickly find your Cyber <br /> insurance policy</h1>
              
                <li>Recoup revenue lost during a cyber attack</li>
                <li>Recover data & critical information</li>
                <li>Restore operations quickly</li>
                <li>Preserve your business’s reputation
                </li>

                <button className="btn btn"><strong>Start your free Cyber insurance quote</strong></button>
       
               </div>
              
            </div>
            <div class="col-md-6 justify-content-center">
                <div className="image">
                    {/* <img src="" alt="" /> */}
                    <img src="https://assets-global.website-files.com/5d9b5f21e7a0b309aef675f2/5e9eff175118203e270ac0ae_hero_cyberInsurance.svg" alt="" />
                </div>
                
            </div>
        </div>
        
    </div>
</div>
        </>
    )
}

export default Blue;