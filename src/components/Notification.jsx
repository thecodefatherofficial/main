import React from "react";

function Notification(){

    function seeMore(){
        document.querySelector(".main-notification_message").classList.toggle('active')
    }

    function closeNotif(){
        document.querySelector('.main-notification').style.display = 'none';
    }

    const listNone = {
        listStyle: "none"
    }

    const listMargin = {
        marginLeft: "-30px",
        padding: "5px 0 2px"
    }

    const linkStyle = {
        textDecoration: "none",
        color: "#4e00ca",
        fontWeight: "700"
    }
    
    return(
        <div className="container notif">
            <div className="main-notification">
                <div className="main-notification_title">
                    <h3>Ծանուցում</h3>
                    <img src="images/icons/close.svg" onClick={closeNotif} alt="" />
                </div>
                <div className="main-notification_message">
                    <div className="openArrow" onClick={seeMore}></div>
                    <h4>Կայքի Մասին</h4>
                    <p>The CodeFather հայկական կայքը՝ որի միջոցով կսովորեն ծրագրավորում և խաղերի միջոցով կամրապնդեն ծրագրավորման գիտելիքները: Կայքը ստեղծվել է սկսնակ ֆրոնտենդ ծրագրավորողի կողմից: Կայքը միշտ թարմացվում է:🔄
                    <br /><br />Կայքի <a href="#contact" style={linkStyle}>կոնտակտ</a> բաժնում կարող եք թողնել ձեր լավ կարծիքներ կայքի վերաբերիալ որոնք տեղ կգտնեն մեր կայքում:〽️
                    <br /><br />Կայքում դեռ չի գործում որոշ վեբ դասեր որոնք կսկսեն գործել շուտով:
                    <br /><hr />
                    Ավելի մանրամասն կայքի մասին՝<br /><br />
                        Այն բախկացած է 3 հիմնական մասից<br /><br />
                        1️⃣ <a href="#https://gormkrtchyann.github.io/thecodefather-about/" style={linkStyle} target="_blank" rel="noopener noreferrer">Մասին</a><br />
                        ~Ներկայացված է ընդհանուր կայքի մասին,<br /><br />

                        2️⃣ <a href="#content" style={linkStyle}>Կոնտենտ</a><br />
                        ~Տրված է կայքի կարևոր մասը<br />
                        <ul>
                            <li>Վեբ դասեր</li>
                            <ul style={listNone}>
                                <li style={listMargin}>- HTML, CSS, JS</li>
                                <li style={listMargin}>- Bootstrap, Sass</li>
                            </ul>
                        </ul>

                        <ul>
                            <li>Խաղեր</li>
                            <ul style={listNone}>
                                <li style={listMargin}>- Flexbox Developers</li>
                                <li style={listMargin}>- JavaScript Memory</li>
                                <li style={listMargin}>- HTML, CSS, JS, Bootstrap - quizs</li>
                            </ul>
                        </ul>

                        <ul>
                            <li>Կայքերի թեպլեյտներ</li>
                            <ul style={listNone}>
                                <li style={listMargin}>- Դասական</li>
                                <li style={listMargin}>- Կրիպտ</li>
                                <li style={listMargin}>- Պորֆոլիո</li>
                            </ul>
                        </ul>


                        3️⃣ <a href="#contact" style={linkStyle}>Կոնտակտ</a><br />
                        ~Կարող եք թողնել ձեր առաջարկությունը, կարծիքը, բողոքը և այլն:
                    </p>
                </div>
                <div className="text">
                    <h5>Չկա Ավելի Ծանուցում</h5>
                </div>
            </div>
        </div>
    )
}

export default Notification