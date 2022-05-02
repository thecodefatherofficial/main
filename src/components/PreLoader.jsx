import React from "react";

function PreLoader(){

    function load() {
        setTimeout(() => {
            document.querySelector('.preloader').style.display = 'none'
            document.querySelector('body').classList.add('body-a')
        }, 2000);    
    }

    window.addEventListener("load", load)

    return(
        <div className="preloader">
            <div className="preloader_main">
                <div className="preloader_main-logo">
                    <img src="images/logo/logoblack.png" alt="" />
                </div>
                <div className="preloader_main-cricle">
                <div className="preloader_main-cricle-item i5">
                        <div className="item-1">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="linegrad" >
                                        <stop offset={"0%"} stopColor={"rgba(83,0,214,1)"}/>
                                        <stop offset={"100%"} stopColor={"rgba(40,0,105,1)"}/>
                                    </linearGradient>
                                </defs>
                                
                                <circle class="stroke-1" cx="15" cy="15" r="10" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className="item-3">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="linegrad" >
                                        <stop offset={"0%"} stopColor={"rgba(83,0,214,1)"}/>
                                        <stop offset={"100%"} stopColor={"rgba(40,0,105,1)"}/>
                                    </linearGradient>
                                </defs>
                                
                                <circle class="stroke-1" cx="15" cy="15" r="4" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>

                    <div className="preloader_main-cricle-item">
                        <div class="item-1">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="linegrad" >
                                        <stop offset={"0%"} stopColor={"rgba(83,0,214,1)"}/>
                                        <stop offset={"100%"} stopColor={"rgba(40,0,105,1)"}/>
                                    </linearGradient>
                                </defs>
                                
                                <circle class="stroke-1" cx="15" cy="15" r="9" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className="item-2"></div>
                    </div>

                    <div className="preloader_main-cricle-item i2">
                        <div className="item-1">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="linegrad" >
                                        <stop offset={"0%"} stopColor={"rgba(83,0,214,1)"}/>
                                        <stop offset={"100%"} stopColor={"rgba(40,0,105,1)"}/>
                                    </linearGradient>
                                </defs>
                                
                                <circle class="stroke-1" cx="15" cy="15" r="8" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className="item-2"></div>
                    </div>

                    <div className="preloader_main-cricle-item i3">
                        <div className="item-1">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="linegrad" >
                                        <stop offset={"0%"} stopColor={"rgba(83,0,214,1)"}/>
                                        <stop offset={"100%"} stopColor={"rgba(40,0,105,1)"}/>
                                    </linearGradient>
                                </defs>
                                
                                <circle class="stroke-1" cx="15" cy="15" r="7" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className="item-2"></div>
                    </div>

                    <div className="preloader_main-cricle-item i4">
                        <div className="item-1">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="linegrad" >
                                        <stop offset={"0%"} stopColor={"rgba(83,0,214,1)"}/>
                                        <stop offset={"100%"} stopColor={"rgba(40,0,105,1)"}/>
                                    </linearGradient>
                                </defs>
                                
                                <circle class="stroke-1" cx="15" cy="15" r="6" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className="item-2"></div>
                    </div>


                    <div className="preloader_main-cricle-item i6">
                        <div className="item-1">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="linegrad" >
                                        <stop offset={"0%"} stopColor={"rgba(83,0,214,1)"}/>
                                        <stop offset={"100%"} stopColor={"rgba(40,0,105,1)"}/>
                                    </linearGradient>
                                </defs>
                                
                                <circle class="stroke-1" cx="15" cy="15" r="7" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className="item-2"></div>
                    </div>

                    <div className="preloader_main-cricle-item i7">
                        <div className="item-1">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="linegrad" >
                                        <stop offset={"0%"} stopColor={"rgba(83,0,214,1)"}/>
                                        <stop offset={"100%"} stopColor={"rgba(40,0,105,1)"}/>
                                    </linearGradient>
                                </defs>
                                
                                <circle class="stroke-1" cx="15" cy="15" r="8" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className="item-2"></div>
                    </div>

                    <div className="preloader_main-cricle-item i8">
                        <div class="item-1">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="linegrad" >
                                        <stop offset={"0%"} stopColor={"rgba(83,0,214,1)"}/>
                                        <stop offset={"100%"} stopColor={"rgba(40,0,105,1)"}/>
                                    </linearGradient>
                                </defs>
                                
                                <circle class="stroke-1" cx="15" cy="15" r="9" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className="item-2"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PreLoader