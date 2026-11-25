var motorok = [
  {neve:"Kawasaki versys 650",id:"kawasaki"}, 
  {neve: "KTM DUKE 125", id:"ktm"}
]

var motor_lista = "";

for (var i = 0; i < motorok.length; i++) {
    motor_lista += '<input type="checkbox" id="' + motorok[i].id + '" onchange="kepmutatas()">';
    motor_lista += '<label for="' + motorok[i].id + '">' + motorok[i].neve + '</label><br>';
}

document.getElementById("jarmuvek").innerHTML = motor_lista;


var szervizek = [
    {
        id: "kawasaki",
        nev: "Kawasaki Versys 650",
        datum: "2026-04-12",
        km: 24000,
        szerviz: "Olaj- és olajszűrő csere",
        koltseg: 28000
    },
    {
        id: "kawasaki",
        nev: "Kawasaki Versys 650",
        datum: "2026-06-18",
        km: 26500,
        szerviz: "Láncszett csere",
        koltseg: 65000
    },
    {
        id: "kawasaki",
        nev: "Kawasaki Versys 650",
        datum: "2026-09-15",
        km: 28000,
        szerviz: "Légszűrő csere",
        koltseg: 12000
    },
    {
        id: "ktm",
        nev: "KTM Duke 125",
        datum: "2026-03-20",
        km: 8500,
        szerviz: "Olaj csere",
        koltseg: 15000
    },
    {
        id: "ktm",
        nev: "KTM Duke 125",
        datum: "2026-07-10",
        km: 10200,
        szerviz: "Első fékbetét csere",
        koltseg: 18000
    },
    {
        id: "ktm",
        nev: "KTM Duke 125",
        datum: "2026-10-05",
        km: 12000,
        szerviz: "Gyertya csere",
        koltseg: 6000
    }
];


if (localStorage.getItem("uj_szervizek") != null) {
    var mentett_szervizek = JSON.parse(localStorage.getItem("uj_szervizek"));

    for (var i = 0; i < mentett_szervizek.length; i++) {
        szervizek.push(mentett_szervizek[i]);
    }
}


var megjelenites = "";
var ossz_kolt = 0;

//költségek kimutatása járműre lebontva
var kawa_koltseg = 0;
var ktm_koltseg = 0;


for (var i = 0;i< szervizek.length; i++){
    megjelenites += "<tr><td>"+ szervizek[i].datum +"</td>"+"<td>"+ szervizek[i].nev +"</td> <td>"+ szervizek[i].km +" Km</td> <td>"+szervizek[i].szerviz+"</td> <td>"+szervizek[i].koltseg+" Ft</td></tr>";
    ossz_kolt += szervizek[i].koltseg;

    if (szervizek[i].id == "kawasaki") {
        kawa_koltseg += szervizek[i].koltseg;
    }

    if (szervizek[i].id == "ktm") {
        ktm_koltseg += szervizek[i].koltseg;
    }
}

document.getElementById("szerviz_adatok").innerHTML = megjelenites;
document.getElementById("ossz").innerHTML = ossz_kolt;

function kepmutatas() {
    if (document.getElementById("kawasaki").checked) {
        document.getElementById("kawasaki_kep").style.display = "inline-block";
    } else {
        document.getElementById("kawasaki_kep").style.display = "none";
    }

    if (document.getElementById("ktm").checked) {
        document.getElementById("ktm_kep").style.display = "inline-block";
    } else {
        document.getElementById("ktm_kep").style.display = "none";
    }
}

var kawa_szazalek = (kawa_koltseg / ossz_kolt) * 100;
var ktm_szazalek = (ktm_koltseg / ossz_kolt) * 100;

document.getElementById("kawa_kolt").innerHTML = kawa_koltseg;
document.getElementById("kawa_diagram").style.width = kawa_szazalek + "%";

document.getElementById("ktm_kolt").innerHTML = ktm_koltseg;
document.getElementById("ktm_diagram").style.width = ktm_szazalek + "%";