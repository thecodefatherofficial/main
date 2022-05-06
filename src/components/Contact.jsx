import React from "react";
import Form from "./Form";

const Contact = () =>{

    const style = {
        filter: "invert(96%) sepia(0%) saturate(2%) hue-rotate(315deg) brightness(110%) contrast(100%)"
    }

    return(
        <section className="contact" id="contact">
            <img className="contact_img" src="images/vectors/contact-img.png" alt="" />
            <h2 className="title"><span>Կ</span>ապի <span>Հ</span>աստատում</h2>
            <div className="container">
                <div className="info">
                    <h3><i>Ի</i>նֆո</h3>
                    <a href="mailto: thecodefatherfficial@gmail.com"><span>Էլ․ Հասցե</span> thecodefatherfficial@gmail.com</a><br />
                    <a href="tel: +37491690212"><span>Հեռ․</span> +37491690212</a>
                    <div className="social-media">
                        <a href="https://www.facebook.com/The-CodeFather-107418535243132" target="_blank" rel="noopener noreferrer">
                            <div className="social-media_item">
                                <img style={style} src="images/icons/facebook.png" alt="" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/the.codefather/" target="_blank" rel="noopener noreferrer">
                            <div className="social-media_item">
                                <img style={style} src="images/icons/instagram.png" alt="" />
                            </div>
                        </a>
                        <a href="https://t.me/TheCodeFatherOfficial" target="_blank" rel="noopener noreferrer">
                            <div className="social-media_item">
                                <img style={style} src="images/icons/telegram.svg" alt="" />
                            </div>
                        </a>
                    </div>
                </div>
                <Form />
            </div>
        </section>
    )
}

export default Contact