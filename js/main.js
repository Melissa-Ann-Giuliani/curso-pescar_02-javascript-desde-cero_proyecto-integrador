const m2BaseCost = 1.16;

let totalM2 = prompt("Ingresa los metros cuadrados de la vivienda: ");

let propertyFM;
let i = 0;
let propertyInput = prompt("Ingrese tipo de vivienda:\n1- Casa\n2- P.H.\n3- Dto. Edificio\n4- Barrio Privado\n5- Oficina\n6- Local Comercial\n7-Depósito logística\n ");

while(i<propertyData.length&&propertyData[i].tipo!==propertyInput){
    i++;
}

if(i<propertyData.length){
    propertyFM = propertyData[i];
}else {
    alert("Valor de vivienda incorrecto!");
}

let locationFM;
let j = 0;
let locationInput = prompt("Ingrese su Ubicación:\n1- CABA\n2- Tandil\n3- Costa Atlántica\n4- Patagonia Argentina\n");

while(j<locationData.length&&locationData[j].tipo!==locationInput){
    j++;
}

if(j<locationData.length){
    locationFM = locationData[j];
}else{
    alert("Valor de ubicación incorrecto!");
}

if(propertyFM.factor>1.000 && locationFM.factor>1.000 && parseInt(totalM2))
{
    let totalAmmount = propertyFM.factor*locationFM.factor*m2BaseCost*totalM2;
    console.log(`Resultado de la multiplicación $ ${totalAmmount.toFixed(4)}`);
}
else {
    console.warn("El factor de multiplicación no es superior a 1000.00 o los metros cuadrados no se pueden convertir a entero");
}