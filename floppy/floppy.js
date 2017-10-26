function setup() {
    let divfuggel = document.getElementById("bird");
    let divpoeng = document.getElementById("poeng");
    setInterval(flytt, 60);
    let fart = 0;
    let top = 255;
    let soylepos = 650;
    const PXperMS = 18;

    let crashed = false;

    let poeng = 0;

    let melding  = "Du har vunnet";

    /*
        regner ut hvor mye søylene flytter seg på 60ms:
        900 px på 3000 ms
        6 9/3 = 6*3 = 18px
    */



    addEventListener("keydown", gifart);

    function flytt() {
        divfuggel.style.top = top + "px";
        top = top - fart;
        fart = fart - 1;
        if (top > 510) {
            fart = 0;
        }
        if (top < 0) {
            fart = 0;
            top = 0;
        }
        soylepos = soylepos - PXperMS;
        // dersom vi har fulført en runde
        if (soylepos < -250) {
            soylepos = 650;
            poeng += 1;
            chrashed = false;

        }
        //oppdaterer posisjonen til søyler
        if (!chrashed) {

        }
        if (soylepos < 255 + 90 && soylepos > 255 - 50) {
            if (top < 120 || top > 410) {
                divfuggel.style.top = "510px";
                top = 510;
                poeng -= 2;
                chrashed = ture;

            }

        }
        divpoeng.innerHTML = String(poeng);
        if (poeng > 20){
            divpoeng.innerHTML= melding;

        }

    }
    function gifart() {
        fart = 15;

    }
}
