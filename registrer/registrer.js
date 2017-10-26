function setup() {
    let list = [];
    let inpNavn = document.getElementById("navn");
    let divVisListe = document.getElementById("visliste");

   // let btnLagre = document.getElementById("lagre");
    //btnLagre.addEventListener("click", lagreNyElev);

    inpNavn.addEventListener("keydown", lagreNyElev);

    function lagreNyElev(event) {
        
        if (event.keyCode === 13) {
            let navn = inpNavn.value;
            if (navn === ""){
                event.preventDefault();
                return;

            }
            list.push(navn);
            list.sort();
            let uList = "<ul>";
            for (let n of list) {
                uList += "<li>" + n + "</li>";
            }
            uList += "</ul>";
            event.preventDefault();

            divVisListe.innerHTML = uList;
            inpNavn.value = "";
        }




    }
}


