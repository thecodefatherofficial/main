import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_srulwsk', 'template_3ddr04s', form.current, 'Qz07KcIqlZNoyNuGl')
      .then((result) => {
          console.log(result.text);
          alert("Ձեր նամակը հաջողությամբ ուղարկել է։ ՄԻ ՔԱՆԻ ՎԱՅՐԿՅԱՆ ՀԵՏՈ ԷՋԸ ԿԹԱՐՄԱՑՎԻ");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
      }, (error) => {
          console.log(error.text);
          alert("Ձեր նամակը չի ուղարկել ինչ որ սխալի հետևանքով սուգեք լրացման վանդակները", error);
      });
  };

  window.addEventListener('load', Contact)

  return (
    <form action="" method="post" id="form" ref={form}>
        <label htmlFor="name">Անուն</label>
        <input type="text" name="user_name" id="name" placeholder="Gor*"/>
        <label htmlFor="email">Էլ-Հասցե</label>
        <input type="email" name="user_email" id="email" onkeydown="Emailvalidation()" placeholder="exaple@exaple.com*"/>
        <label htmlFor="message">Տեքստ</label>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Բարև...*"></textarea>
        <input class="formbutton" type="button" value="Ուղարկել" onClick={sendEmail} />
    </form>
  );
};

export default Contact