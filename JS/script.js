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
        id: 1,
        nev: "Kawasaki Versys 650",
        datum: "2026-04-12",
        km: 24000,
        szerviz: "Olaj- és olajszűrőcsere",
        koltseg: 28000
    },
    {
        id: 1,
        nev: "Kawasaki Versys 650",
        datum: "2026-06-18",
        km: 26500,
        szerviz: "Láncszettcsere",
        koltseg: 65000
    },
    {
        id: 1,
        nev: "Kawasaki Versys 650",
        datum: "2026-09-15",
        km: 28000,
        szerviz: "Légszűrőcsere",
        koltseg: 12000
    },
    {
        id: 2,
        nev: "KTM Duke 125",
        datum: "2026-03-20",
        km: 8500,
        szerviz: "Olajcsere",
        koltseg: 15000
    },
    {
        id: 2,
        nev: "KTM Duke 125",
        datum: "2026-07-10",
        km: 10200,
        szerviz: "Első fékbetétcsere",
        koltseg: 18000
    },
    {
        id: 2,
        nev: "KTM Duke 125",
        datum: "2026-10-05",
        km: 12000,
        szerviz: "Gyertyacsere",
        koltseg: 6000
    }
];


var megjelenites = "";
var ossz_kolt = 0;

for (var i = 0;i< szervizek.length; i++){
  megjelenites += "<tr><td>"+ szervizek[i].datum +"</td>"+"<td>"+ szervizek[i].nev +"</td> <td>"+ szervizek[i].km +" Km</td> <td>"+szervizek[i].szerviz+"</td> <td>"+szervizek[i].koltseg+" Ft</td></tr>";
  ossz_kolt += szervizek[i].koltseg;
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

console.log(motorok)