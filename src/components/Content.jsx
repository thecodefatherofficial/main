import React from "react";

function Content(){

    const style = {
        filter: "invert(96%) sepia(0%) saturate(2%) hue-rotate(315deg) brightness(110%) contrast(100%)"
    }

    function openWeb(){
        document.querySelector('#web-icon').classList.toggle('active');
    }
    function openGame(){
        document.querySelector('#game-icon').classList.toggle('active');
    }
    function openTemp(){
        document.querySelector('#temp-icon').classList.toggle('active');
    }

    return(
        <section className="content" id="content">
            <div className="content_desktop" id="content_desktop">
                <div className="container">
                    <div className="items" onClick={openWeb}>
                        <div className="main-item" id="web-logo" >
                            <img src="images/icons/weblesson.svg" alt="" />
                            <p>Վեբ Դասեր</p>
                        </div>
                        <div className="icons" id="web-icon">
                            <div className="mob-back"></div>
                            <div className="icons_item">
                                <a href="https://gormkrtchyann.github.io/HTMLLesson/" target="_blank" rel="noopener noreferrer">
                                    <p>HTML5</p>
                                    <img src="images/logo/htmllogo.png" alt="" />
                                </a>
                            </div>
                            <div className="icons_item">
                                <div className="noWorking">
                                    <img style={style} src="images/icons/coming-soon.png" alt="" />
                                    <span>շուտով</span>
                                </div>
                                <a href="#link">
                                    <p>CSS</p>
                                    <img src="images/logo/css.png" alt="" />
                                </a>
                            </div>
                            <div className="icons_item">
                                <div className="noWorking">
                                    <img style={style} src="images/icons/coming-soon.png" alt="" />
                                </div>
                                <a href="#link">
                                    <p>JavaScript</p>
                                    <img src="images/logo/js.png" alt="" />
                                </a>
                            </div>
                            <div className="icons_item">
                                <div className="noWorking">
                                    <img style={style} src="images/icons/coming-soon.png" alt="" />
                                </div>
                                <a href="#link">
                                    <p>BOOTSTRAP</p>
                                    <img src="images/logo/boot.png" alt="" />
                                </a>
                            </div>
                            <div className="icons_item">
                                <div className="noWorking">
                                    <img style={style} src="images/icons/coming-soon.png" alt="" />
                                </div>
                                <a href="#link">
                                    <p>SASS/SCSS</p>
                                    <img src="images/logo/sass.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="items" onClick={openGame}>
                        <div className="main-item" id="game-logo">
                            <img src="images/icons/game.svg" alt="" />
                            <p>Խաղեր</p>
                        </div>
                        <div className="game-icons" id="game-icon">
                            <div className="mob-back"></div>
                            <div className="icons_item">
                                <a href="https://gormkrtchyann.github.io/thecodefather2.0/games/flexboxdevelopers/index.html" 
                                target="_blank" rel="noopener noreferrer">
                                    <p>FlexBox Developers</p>
                                    <img src="images/logo/game01.png" alt="" />
                                </a>
                            </div>
                            <div className="icons_item">
                                <a href="https://gormkrtchyann.github.io/js-game/"
                                target="_blank" rel="noopener noreferrer">
                                    <p>JavaScript Memory</p>
                                    <img src="images/logo/logo-center.png" alt="" />
                                </a>
                            </div>
                            <div className="icons_item">
                                <a href="https://gormkrtchyann.github.io/thecodefather2.0/games/quiz/Html%20Quiz/index.html"
                                target="_blank" rel="noopener noreferrer">
                                    <p>HTML Quiz</p>
                                    <img src="images/logo/htmlquiz.png" alt="" />
                                </a>
                            </div>
                            <div className="icons_item">
                                <a href="https://gormkrtchyann.github.io/thecodefather2.0/games/quiz/Css%20Quiz/index.html"
                                target="_blank" rel="noopener noreferrer">
                                    <p>CSS Quiz</p>
                                    <img src="images/logo/cssquiz.png" alt="" />
                                </a>
                            </div>
                            <div className="icons_item">
                                <a href="https://gormkrtchyann.github.io/thecodefather2.0/games/quiz/Bootstrap%20Quiz/index.html"
                                target="_blank" rel="noopener noreferrer">
                                    <p>BS Quiz</p>
                                    <img src="images/logo/bootstrapquiz.png" alt="" />
                                </a>
                            </div>
                            <div className="icons_item">
                                <a href="https://gormkrtchyann.github.io/thecodefather2.0/games/quiz/Js%20Quiz/index.html"
                                target="_blank" rel="noopener noreferrer">
                                    <p>JS Quiz</p>
                                    <img src="images/logo/jsquiz.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="items" onClick={openTemp}>
                        <div className="main-item" id="temp-logo">
                            <img src="images/icons/template.svg" alt="" />
                            <p>Թեմպլեյթներ</p>
                        </div>
                        <div className="temp-icons" id="temp-icon">
                            <div className="mob-back"></div>
                            <div className="icons_item">
                                <a href="https://gormkrtchyann.github.io/templates/" target="_blank" rel="noopener noreferrer">
                                    <p>Խանութ</p>
                                    <img src="images/logo/shopicon.png" alt="" />
                                </a>
                            </div>
                            <div className="icons_item">
                                <a href="https://gormkrtchyann.github.io/templates/" target="_blank" rel="noopener noreferrer">
                                    <p>Կրիպտո</p>
                                    <img style={style} src="images/logo/token.png" alt="" />
                                </a>
                            </div>
                            <div className="icons_item">
                                <a href="https://gormkrtchyann.github.io/templates/" target="_blank" rel="noopener noreferrer">
                                    <p>Դասական</p>
                                    <img src="images/logo/temp.png" alt="" />
                                </a>
                            </div>
                            <div className="icons_item">
                                <a href="https://gormkrtchyann.github.io/templates/" target="_blank" rel="noopener noreferrer">
                                    <p>Ավելին</p>
                                    <img src="images/logo/seeall.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content