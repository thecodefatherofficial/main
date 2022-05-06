import React from "react";
import Mode from "./Mode";

function Menu(){

    function openNotif(){
        document.querySelector('.main-notification').style.display = 'block';
        document.querySelector('.noti-num').style.opacity = '0';
    }

    window.addEventListener("scroll", function(){
        document.querySelector('.menu').classList.toggle('active', this.scrollY > 100)
    });

    return(
        <nav className="menu">
            <div className="container">
                <ul>
                    <li className="li"><a href="#header"><img src="images/icons/home.svg" alt="" /> <span>Գլխավոր</span></a></li>
                    <li className="li"><a href="#about"><img src="images/icons/information.png" alt="" /> <span>Մեր Մասին</span></a></li>
                    <li className="li"><a href="#content"><img src="images/icons/layout.png" alt="" /> <span>Կոնտենտ</span></a></li>
                    <li className="li"><a href="#contact"><img src="images/icons/phone-call.png" alt="" /> <span>Կոնտակտ</span></a></li>
                </ul>
                <div className="notification" onClick={openNotif}>
                    <div className="noti-num">
                        <span>1</span>
                    </div>
                    <img src="images/icons/notification.svg" alt="" />
                </div>

                <Mode />
            </div>
        </nav>
    )
}

export default Menu