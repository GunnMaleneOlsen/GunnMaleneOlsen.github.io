//@ts-check

function setup() {
    let spraak = [ ] ;

    let amerikansk = [ ] ;
    //her er det enkelt å legge til flere språk senere

    spraak.push(amerikansk);

    //legger til sprsml til amerikansk
    amerikansk.push("hva er potet på amerikansk:potet,+potato,pomefrit")
    amerikansk.push("hva er ost på amerikansk:chz,+cheese,gauda")

    console.table(spraak);
}