let lumia1 = document.getElementById("lumia1")
let lumiaBack = document.getElementById("lumiaBack")
let nokiaYellow = document.getElementById("nokiaYellow")
let nokiaBlack = document.getElementById("nokiaBlack")
let nokiaWhite = document.getElementById("nokiaWhite")

    window.addEventListener("scroll",()=>{
        scroll()
    })


    function scroll(){
        let top = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight- document.documentElement.clientHeight;
        let scrolled = top/height*100;
        console.log(scrolled)
        if(scrolled > 25){
            lumia1.classList.remove("lumia1Animation")
            lumiaBack.classList.remove("lumia1Animation1")
            
        }else{
            
            lumia1.classList.add("lumia1Animation")
            lumiaBack.classList.add("lumia1Animation1")
        }

        if(scrolled > 30){
            nokiaYellow.classList.add("yellowHeadAnimation")
            nokiaBlack.classList.add("blackHeadAnimation")
            nokiaWhite.classList.add("whiteHeadAnimation")
        }
        if(scrolled > 90){
            nokiaYellow.classList.remove("yellowHeadAnimation")
            nokiaBlack.classList.remove("blackHeadAnimation")
            nokiaWhite.classList.remove("whiteHeadAnimation")
        }
    }



    //onload event to fire animation lumia1

    window.addEventListener("load",()=>{
    lumia1.classList.add("lumia1Animation")
    })