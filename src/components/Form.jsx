import React from "react";

function Form(){

    return(
        <form action="" method="post" id="form">
            <label htmlFor="name">Անուն</label>
            <input type="text" id="name" placeholder="Gor*"/>
            <label htmlFor="email">Էլ-Հասցե</label>
            <input type="email" name="" id="email" onkeydown="Emailvalidation()" placeholder="exaple@exaple.com*"/>
            <label htmlFor="message">Տեքստ</label>
            <textarea name="" id="message" cols="30" rows="10" placeholder="Բարև...*"></textarea>
            <input class="formbutton" onclick="sendmail()" type="button" value="Ուղարկել" />
        </form>
    )
}

export default Form