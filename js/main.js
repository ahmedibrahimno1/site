// Secure Main JavaScript - Protection, dark mode, and menu only
(function(){
    'use strict';
    
    // Embedded protection system (cannot be easily removed)
    (function(){
        // Anti-debugging with timing detection
        const _0x5e7f=function(){
            const _0x1a2b=Date.now();
            debugger;
            const _0x3c4d=Date.now();
            if(_0x3c4d-_0x1a2b>100)return false;
            return true;
        };
        // Remove right-click disabling
        // document.addEventListener('contextmenu',function(e){
        //     e.preventDefault();
        //     return false;
        // });
        document.addEventListener('keydown',function(e){
            const keyCode=e.keyCode||e.which;
            const ctrlKey=e.ctrlKey;
            const shiftKey=e.shiftKey;
            if(keyCode===123||(ctrlKey&&shiftKey&&keyCode===73)||(ctrlKey&&keyCode===85)||(ctrlKey&&shiftKey&&keyCode===67)||(ctrlKey&&shiftKey&&keyCode===74)||(ctrlKey&&shiftKey&&keyCode===69)||(ctrlKey&&keyCode===83)||(ctrlKey&&keyCode===80)){
                e.preventDefault();
                return false;
            }
        });
        // DevTools detection
        let devtools={open:false,orientation:null};
        const detectDevTools=function(){
            const threshold=160;
            const heightDiff=window.outerHeight-window.innerHeight;
            const widthDiff=window.outerWidth-window.innerWidth;
            if(heightDiff>threshold||widthDiff>threshold){
                if(!devtools.open){
                    devtools.open=true;
                    document.body.innerHTML='<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:#000;color:#fff;display:flex;align-items:center;justify-content:center;font-size:2rem;z-index:999999;"><h1>Access Denied</h1></div>';
                }
            }
        };
        // Console warnings
        console.log('%c🚫 Stop!','color:red;font-size:50px;font-weight:bold;');
        console.log('%cThis is a protected website. Any attempts to inspect or modify the code will be logged and reported.','color:red;font-size:20px;');
        // Execute protection
        setInterval(detectDevTools,500);
        // Code integrity checking
        const checkIntegrity=function(){
            const html=document.documentElement.innerHTML;
            if(html.length<1000){
                location.reload();
            }
        };
        setInterval(checkIntegrity,2000);
    })();
    // Dark mode and menu logic
    (function(){
        const darkModeToggle=document.querySelector('.r6gWSykp');
        const mobileMenuToggle=document.querySelector('.pVCLnuDG');
        const mobileMenu=document.querySelector('.qVr4vWxB');
        // Set dark mode as default
        const prefersDark=window.matchMedia('(prefers-color-scheme: dark)');
        const savedTheme=localStorage.getItem('theme')||'dark';
        if(savedTheme==='dark'||(!localStorage.getItem('theme')&&prefersDark.matches)){
            document.body.setAttribute('data-theme','dark');
        }else{
            document.body.removeAttribute('data-theme');
        }
        // Dark mode toggle functionality
        if(darkModeToggle){
            darkModeToggle.addEventListener('click',()=>{
                let currentTheme;
                if(document.body.getAttribute('data-theme')==='dark'){
                    document.body.removeAttribute('data-theme');
                    currentTheme='light';
                }else{
                    document.body.setAttribute('data-theme','dark');
                    currentTheme='dark';
                }
                localStorage.setItem('theme',currentTheme);
            });
        }
        // Mobile menu functionality
        if(mobileMenuToggle&&mobileMenu){
            mobileMenuToggle.addEventListener('click',()=>{
                mobileMenu.classList.toggle('k4a3pW84');
                // Animate hamburger menu
                const spans=mobileMenuToggle.querySelectorAll('span');
                if(mobileMenu.classList.contains('k4a3pW84')){
                    spans[0].style.transform='rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity='0';
                    spans[2].style.transform='rotate(-45deg) translate(7px, -6px)';
                }else{
                    spans[0].style.transform='none';
                    spans[1].style.opacity='1';
                    spans[2].style.transform='none';
                }
            });
            // Close mobile menu when clicking outside
            document.addEventListener('click',(e)=>{
                if(mobileMenu.classList.contains('k4a3pW84')&&!mobileMenu.contains(e.target)&&!mobileMenuToggle.contains(e.target)){
                    mobileMenu.classList.remove('k4a3pW84');
                    const spans=mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform='none';
                    spans[1].style.opacity='1';
                    spans[2].style.transform='none';
                }
            });
            // Close mobile menu on window resize
            window.addEventListener('resize',()=>{
                if(window.innerWidth>768&&mobileMenu.classList.contains('k4a3pW84')){
                    mobileMenu.classList.remove('k4a3pW84');
                    const spans=mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform='none';
                    spans[1].style.opacity='1';
                    spans[2].style.transform='none';
                }
            });
        }
    })();
})(); 