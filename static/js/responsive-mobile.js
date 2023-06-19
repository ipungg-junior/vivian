var statNav = false;
var navPanel = document.getElementById("navbar-panel");
var navMenu = document.getElementById("navbar-menu");
var btnNav = document.getElementById("navbar-button");
var logo = document.getElementById("logo");

btnNav.addEventListener('click', function (){
    if (!statNav){        
        logo.style.marginLeft = "0";
        navPanel.style.flexDirection = "column";
        navMenu.style.paddingLeft = "0";
        navMenu.style.width = "100vw";
        navMenu.style.flexDirection = "column";
        navMenu.style.justifyContent = "center";
        navMenu.style.display = "flex";
        statNav = true;
    }else{
        logo.style.marginLeft = "28px";
        navPanel.style.flexDirection = "";
        navPanel.style.padding = "14px 0px 14px 0px";
        navMenu.style.paddingLeft = "8px";
        navMenu.style.width = "100vw";
        navMenu.style.flexDirection = "column";
        navMenu.style.justifyContent = "center";
        navMenu.style.display = "none";
        statNav = false;
    }
});