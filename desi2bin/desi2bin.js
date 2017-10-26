function setup() {
    let inpDesimal = document.getElementById("desimal");
    let inpBinaer = document.getElementById("binaer");


    let btnD2b = document.getElementById("d2b");
    btnD2b.addEventListener("click", d2b);

    let btnB2d = document.getElementById("b2d");
    btnB2d.addEventListener("click", b2d);


    function d2b(event) {
        let desimal = inpDesimal.valueAsNumber;
        let binaer = desimal.toString(2);
        inpBinaer.value = binaer;


    }

    function b2d(event) {
        let b2d = inpBinaer.valueAsNumber;
        let desimal = binaer.toString(2);
        



    }

}