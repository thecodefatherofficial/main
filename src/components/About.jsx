import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


const About = () =>{
    return(
        <section className="about" id="about">
            <div className="about_desktop container">
                <div className="block-2 block">
                    <img src="images/vectors/seo.png" alt="" />
                    <div className="block-text">
                        <h2><b>Զ</b>արգացնող <b>Խ</b>աղեր</h2>
                        <hr />
                        <p>Զարգացրեք ծրագրավորման գիտելիքները խաղեր խաղալով։</p>
                    </div>
                </div>
        
                <div className="block-1 block">
                    <img src="images/vectors/web-developer.png" alt="" />
                    <div className="block-text">
                        <h2><b>Վ</b>եբ <b>Ծ</b>րագարվորում</h2>
                        <hr />
                        <p>Սովորեք վեբ ծրագրավորում մեզ հետ։</p>
                    </div>
                </div>
        
                <div className="block-3 block">
                    <img src="images/vectors/website-recovery.png" alt="" />
                    <div className="block-text">
                        <h2><b>Պ</b>ատրաստի <b>Կ</b>այքերի <b>Թ</b>եմպլեյտներ</h2>
                        <hr />
                        <p>Կարող եք այստեղից ներբեռնել պատրաստի կայքեր և ձևափոխելով այն ստանալ ձեր ուզածը։</p>
                    </div>
                </div>
            </div>


            <div className="about_mobile">
                <Carousel>
                    <Carousel.Item className="block block-1">
                        <img src="images/vectors/web-developer.png"/>
                        <div className="block_text">
                            <h2><b>Վ</b>եբ <b>Ծ</b>րագարվորում</h2>
                            <hr />
                            <p>Սովորեք վեբ ծրագրավորում մեզ հետ</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="block block-2">
                        <img src="images/vectors/seo.png"/>
                        <div className="block_text">
                            <h2><b>Զ</b>արգացնող <b>Խ</b>աղեր</h2>
                            <hr />
                            <p>Զարգացրեք ծրագրավորման գիտելիքները խաղեր խաղալով</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="block block-3">
                        <img src="images/vectors/website-recovery.png"/>
                        <div className="block_text">
                            <h2><b>Պ</b>ատրաստի <b>Կ</b>այքերի <b>Թ</b>եմպլեյտներ</h2>
                            <hr />
                            <p>Կարող ես այստեղից ներբեռնել պատրաստի կայքեր և ձևափոխելով այն ստանալ ձեր ուզածը</p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    )
}

export default About