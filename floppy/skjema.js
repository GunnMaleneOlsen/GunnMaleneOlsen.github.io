function setup () {
    let inpFornavn = document.getElementById("fornavn");
    let inpEtternavn = document.getElementById("etternavn");
    let inpAlder = document.getElementById("alder");
    let inpEpost = document.getElementById("epost");
    let inpFarge =document.getElementById("farge");
    let inpDAto =document.getElementById("dato");

    let btnLagre = document.getElementById("lagre");
    btnLagre.addEventListener("click", lagreData);


    function lagreData(event) {
        let fornavn = inpFornavn.value;
        let etternavn = inpEtternavn.value;
        let alder = inpAlder.valueAsNumber;
        let epost =inpEpost.value;
        let farge = inpFarge.value;
        let dato = inpDAto.value
        

        console.log (fornavn,etternavn,alder);
        
       //kommer vi inn på senere (funker foreløpig ikke på grunn av noe sikkerhet tull på min mac)
        let person = { fornavn,etternavn,alder };
        let spillerData =JSON.stringify(person);
        localStorage.setItem("spiller", spillerData);
       

    }



}