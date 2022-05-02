import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import About from "./components/About";
import Content from "./components/Content";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import NotificationS from "./components/NotificationS";
import PreLoader from "./components/PreLoader";

function App(){

  function activeMenu(){  
      let li = document.querySelectorAll(".li");
      let sec = document.querySelectorAll("section");

      let len = sec.length;
      while(--len && window.scrollY + 300 < sec[len].offsetTop){}
      li.forEach(ltx => ltx.classList.remove("active"));
      li[len].classList.add("active");

  }

  window.addEventListener('scroll', () => {
    activeMenu()
  });



  return(
    <div  onLoad={activeMenu}>
      <PreLoader />
      <Menu />
      <NotificationS />
      <Notification />
      <Header />
      <About />
      <hr />
      <Content />
      <hr />
      <Contact />
      <Footer />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('body'));
