class Perk {
    constructor(perks) {
        this.money = perks.money || "0";
        this.move = perks.move || "0";
        this.war = perks.war || "0";
        this.science = perks.science || "0";
    }
    render() {
        let s = `
        <ul>
            <li>Money: ${this.money}
            <li>Move: ${this.move}
            <li>War: ${this.war}
            <li>Sience: ${this.science}
        </ul>
        `;
        return s;
    }
}

class Nation {
    constructor(navn, info, perk) {
        this.navn = navn;
        this.title = info.title || "Supreme";
        this.leader = info.leader || "Mr President";
        this.capitla = info.capitla || navn + "city";
        this.picture = info.picture || "";
        this.perk = perk || new Perk({});
    }

    render() {
        let s = `
        <ul>
            <li>Name: ${this.name}
            <li>Leader: ${this.title} ${this.leader}
            <li>Capitla: ${this.capitla}
            <li>Picture: <img src="${this.picture}">
            <li>Perk: ${this.perk.render()}
        </ul>
        `;
        return s;
    }
}

function setup() {
    const config = {
        apiKey: "AIzaSyAE_W7aLuKxCQWVV1HR7raVsogpTdoylEw",
        authDomain: "test-gmo.firebaseapp.com",
        databaseURL: "https://test-gmo.firebaseio.com",
        projectId: "test-gmo",
        storageBucket: "test-gmo.appspot.com",
        messagingSenderId: "1053451978682"
    };
    firebase.initializeApp(config);
    const database = firebase.database;

    let divListe = document.querySelector("#liste");
    let ref = database().ref("nations");

    ref.once("value").
        then(function (snapshot) {
            let landene = snapshot.val();
            if (landene) {
                for (let l in landene) {
                    let info = landene[l];
                    let perk = info.perk || {};
                    let p = new Perk(perk);
                    let n = new Nation(l, info, p);
                    divListe.innerHTML += n.render();
                }

            }
        });

}