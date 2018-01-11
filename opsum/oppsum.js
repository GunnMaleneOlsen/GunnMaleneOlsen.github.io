//@ts-check

function setup() {
    
    let inpForbruk = document.getElementById("forbruk");
    let inpTank = document.getElementById("tank");
    let btnBeregn = document.getElementById("beregn");
    let spnRekkevidde = document.getElementById("rekkevidde");

    

    btnBeregn.addEventListener("click", beregnRekkevidde);

    function beregnRekkevidde(e) {
        // @ts-ignore
        let forbruk = Number(inpForbruk.value);
        // @ts-ignore
        let tank = inpTank.valueAsNumber;
        let rekkevidde = tank / forbruk;
        spnRekkevidde.innerHTML = rekkevidde.toFixed(2); //toFixed gjør at du slippe å bruka string og gir deg to desimaler

    }

}