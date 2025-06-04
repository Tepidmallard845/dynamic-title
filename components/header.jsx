"use client"

import Image from 'next/image';
import { useEffect } from 'react';
import "../app/globals.css";
//import "../images/profile.png";

function Header({ title, subtitle }) {
    useEffect(() => {
        window.onscroll = function() {scrollFunction()};
            
        var header = document.getElementById("header").style
        var statement = document.getElementById("statement").style
        var images = document.getElementsByClassName("image")

        Array.from(images).forEach(element => {
            console.log(element);
        });

        //var logo = document.getElementById("logo").style
        //var loginButton = document.getElementById("login").style

        function scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                header.fontSize = `5vmin`;
                header.height = "10vh";
                statement.opacity = "0";
                statement.fontSize = `3vmin`;
                statement.height = "8vmin";
                statement.top = "2%";

                Array.from(images).forEach(element => {
                    element.style.display = "block";
                });

                try{document.getElementById("fadingText").remove();
                }catch{}
            } else {
                header.fontSize = `11vmin`;
                header.height = "100vh";
                statement.opacity = "1";
                statement.fontSize = `5vmin`;
                statement.height = "80vmin";
                statement.top = "20%";
                
                Array.from(images).forEach(element => {
                    element.style.display = "none";
                });
            }
        }

        function show() {
            Array.from(images).forEach(element => {
                element.style.display = "none";
            });
        }
    }, [])
    return(/*<img src={"../images/profile.png"}></img>*/
        <>
        <Image src="/app/images/favicon.ico" alt="home" style={{ left: "1%" }} className="image" width={200} height={200}/>
        <button type="button" id="login"><Image src="/app/images/icon.ico" className="image" alt="logo" width={200} height={200}/></button>
        <div id='header'>{title}</div>
        <div id='statement'>{subtitle}</div>
        </>
    );
}

export default Header;