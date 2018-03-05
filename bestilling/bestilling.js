//@ts-check
function setup() {

    let main = document.getElementById("main");
    let inpBy = document.getElementById("byer");
    let btnBestill = document.getElementById("button");
    let inpEnkel = document.getElementById("enkel");
    let inpDobbel = document.getElementById("dobbel");

    let byer = [];


    let peter = [];
    let newyork = [];
    let amster = [];
    let roma = [];

    byer.push(peter);
    byer.push(newyork);
    byer.push(amster);
    byer.push(roma);

    newyork.push("Hoteller1");
    newyork.push("Hoteller2");
    newyork.push("Hoteller3");
    newyork.push("Hoteller4");

    function initialize() {
        let byvalg = inpBy.value;
        for(let i=0; i< byer.length; i++) {
            let byOption = byer[i];
        }

    }
}