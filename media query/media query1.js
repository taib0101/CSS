const nav3_icon = document.getElementById("nav3_icon");
let bool = 0;
nav3_icon.addEventListener("click",(event) => {
    console.log(event);
    event.preventDefault();
    // event.stopPropagation();
    // form, anchor tag gula ek page theke arek page gele 
    const nav4 = document.getElementById("nav4");
    if(!bool)
    {
        nav4.style.right = "0px";
        bool = 1;
    }
    else
    {
        nav4.style.right = "-1000px";
        bool = 0;
    }
    // nav4.classList.toggle("opened");
    // same for line 9 - 18
});
