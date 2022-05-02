import React from "react";

function NotificationS(){

    function notification(){
        setTimeout(() => {
            document.querySelector('.notifications-body').classList.remove('active');
        }, 8000);
        setTimeout(() => {
            document.querySelector('.notifications-body').classList.add('active');
            document.querySelector('.noti-num').style.opacity = '1';
            document.querySelector('.main-notification_message').style.opacity = '1';
            setTimeout(() => {
                document.querySelector('.notifications-body').classList.remove('active');
            }, 3000);
        }, 8000);
    }

    window.addEventListener("load", notification)

    function openNotifInNotif(){
        document.querySelector('.main-notification').style.display = 'block';
        document.querySelector('.noti-num').style.opacity = '0'
    }

    const margin = {
        marginBottom: "6px"
    }

    return(
        <div className="notifications-body">
            <div className="notifications-body_icon">
                <img src="images/icons/notification.svg" alt="" />
            </div>
            <div className="notifications-body_text">
                <h6><span>!</span> Ծանուցում</h6>
                <p style={margin}>The CodeFather կայքի մասին</p>
                <p onClick={openNotifInNotif} >Բացել</p>
            </div>
        </div>
    )
}

export default NotificationS