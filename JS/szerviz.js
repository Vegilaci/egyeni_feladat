var motorok = [
  {neve:"Kawasaki versys 650",id:"kawasaki"}, 
  {neve: "KTM DUKE 125", id:"ktm"}
]

var szerviz_motor_lista = "";

for (var i = 0; i < motorok.length; i++) {
    szerviz_motor_lista += '<option value="' + motorok[i].id + '">' + motorok[i].neve + '</option>';
}

document.getElementById("szerviz_motorok").innerHTML = szerviz_motor_lista;