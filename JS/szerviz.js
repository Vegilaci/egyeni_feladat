var motorok = [
  {neve:"Kawasaki versys 650",id:"kawasaki"}, 
  {neve: "KTM DUKE 125", id:"ktm"}
]

var szerviz_motor_lista = "";

for (var i = 0; i < motorok.length; i++) {
    szerviz_motor_lista += '<option value="' + motorok[i].id + '">' + motorok[i].neve + '</option>';
}

document.getElementById("szerviz_motorok").innerHTML = szerviz_motor_lista;


function szerviz_mentes(){

  var motor = document.getElementById("szerviz_motorok").value;
  var datum = document.getElementById("ideje").value;
  var km = parseInt(document.getElementById("km_allas").value);
  var szerviz_jegy = document.getElementById("szerviz_megjegy").value;
  var koltseg = parseInt(document.getElementById("koltseg").value);

  if (datum == "" || km <= 0 || szerviz_jegy.trim() == "" || koltseg < 0) {
    alert("Kérlek tölts ki minden mezőt megfelelően!");
    return;
  }

  var motor_nev = "";

  for (var i = 0; i < motorok.length; i++) {
      if (motorok[i].id == motor) {
          motor_nev = motorok[i].neve;
      }
  }

  var uj_szerviz = {
    id: motor,
    nev: motor_nev,
    datum: datum,
    km: km,
    szerviz: szerviz_jegy,
    koltseg: koltseg
  };

  var mentett_szervizek = [];

  if (localStorage.getItem("uj_szervizek") != null) {
      mentett_szervizek = JSON.parse(localStorage.getItem("uj_szervizek"));
  }

  mentett_szervizek.push(uj_szerviz);

  localStorage.setItem("uj_szervizek", JSON.stringify(mentett_szervizek));

  alert("Sikeres mentés!");
  document.getElementById("szerviz").reset();

}