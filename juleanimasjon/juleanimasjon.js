
function setup (){ 
    
    let santa = document.getElementById("santa"); 

    santa.addEventListener ("click", dropgift);

    let manyGifts= [];

    function dropgift (event) {
        let px = event.pageX;
        let newGift = document.createElement("div");
        newGift.className = "gift";
        console.log(santa.style.left);
        newGift.style.left = px +"px";
        newGift.style.opacity = 1;
        main.appendChild(newGift);
        manyGifts.push(newGift);
        console.log(newGift);
    }
}
