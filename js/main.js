const m2_base_cost = 1.16;

let total_m2 = prompt("Ingresa los metros cuadrados de la vivienda: ");

let fm;

let building_type = prompt("Ingrese un número para tipo de vivienda:\n1- Casa\n2- P.H.\n3- Dto. Edificio\n4- Barrio Privado\n5- Oficina\n6- Local Comercial\n7-Depósito logística\n");

switch(building_type){
    case '1': {
        /* fm=document.getElementById("property").value; */
        fm = 1.009;
        break;
    }
    case '2': {
        fm = 1.005;
        break;
    }
    case '3': {
        fm=1.002;
        break;
    }
    case '4': {
        fm = 1.019;
        break;
    }
    case '5': {
        fm = 1.039;
        break;
    }
    case '6': {
        fm = 1.041;
        break;
    }
    case '7': {
        fm = 1.092;
        break;
    }
}


if(fm>1.000 && parseInt(total_m2))
{
    let total_ammount = m2_base_cost*total_m2*fm;
    console.log(`Resultado de la multiplicación $ ${total_ammount.toFixed(4)}`);
}
else {
    console.warn("El factor de multiplicación no es superior a 1000.00 o los metros cuadrados no se pueden convertir a entero");
}