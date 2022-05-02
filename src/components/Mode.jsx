import React from "react";

function Mode(){

    function mode(){
        document.querySelector('.mode').classList.toggle('active')
        document.querySelector('body').classList.toggle('dark')
    }

    return(
        <div className="mode">
            <div className="mode-body" onClick={mode}>
                <div className="mode-body_light">
                    <img src="images/icons/lightmode.svg" alt="light mode" />
                </div>
                <div className="mode-body_dark">
                    <img src="images/icons/darkmode.svg" alt="dark mode" />
                </div>
            </div>
        </div>
    )
}

export default Mode