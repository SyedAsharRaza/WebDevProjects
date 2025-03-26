document.addEventListener("DOMContentLoaded",()=>{
    let game = document.querySelector(".container");
    let totalscorevalue = 0;
    let cashbtn = document.querySelector("#cashbtn");
    let score = document.querySelector(".score");
    let buttons = document.querySelectorAll("#buttons");
    buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            let bombcheck = Math.random();
            if(bombcheck>0.3){
                button.classList.add("nobomb");
                let thisbtnscore = Math.floor(Math.random()*11);
                totalscorevalue = totalscorevalue + thisbtnscore;
                button.innerText = `${thisbtnscore}`;
                button.style.fontSize = "50px";
                button.style.color = "black";
                score.innerText = `Score = ${totalscorevalue}`
                button.disabled = true;
            }else{
                button.classList.add("bomb")
                totalscorevalue = 0;
                score.innerText = `Score = ${totalscorevalue}`;
                game.style.pointerEvents = "none";
            }
        })
    })
    cashbtn.addEventListener("click",()=>{
        buttons.forEach(button=>{
            button.innerText = "";
            button.classList.remove("nobomb");
            button.classList.remove("bomb");
            button.disabled = false;
        })
        game.style.pointerEvents = "auto";
    })
})