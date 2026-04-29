# Proyecto Integrador de 2da materia de Curso Pescar: Javascript desde Cero

## Módulo 1 
Se utilizaron prompts y alert para tomar los datos que ingrese el usuario y luego informar el resultado de la multiplicación

## Módulo 2 
Se crearon selectores en index.html para cada tipo de vivienda y ubicación posible para el usuario.

```html
    label for="property">Selecciona el tipo de propiedad</label>
        <select name="" id="property">
            <option selected disabled>...</option>
            <option value="1.009">Casa</option>
            <option value="1.005">P.H</option>
            <option value="1.002">Dto. Edificio</option>
            <option value="1.019">Barrio Privado</option>
            <option value="1.039">Oficina</option>
            <option value="1.041">Local comercial</option>
            <option value="1.092">Depósito logística</option>
        </select>
        <label for="location">Selecciona tu ubicación</label>
        <select name="" id="location">
            <option selected disabled>...</option>
            <option value="1.013">CABA</option>
            <option value="1.004">Tandil</option>
            <option value="1.029">Costa Atlántica</option>
            <option value="1.000">Patagonia Argentina</option>
        </select>
```
Estos valores no se tocarán todavía

También se creó un switch en el main.js para tomar el Tipo de Vivienda a través de un prompt, y cambiar en base al valor ingresado, el factor de multiplicación.
Luego se validó si:
* el factor de multplicación posee un valor superior a 1.000
* los metros cuadrados ingresados en un prompt se pueden convertir a un valor entero.

## Módulo 3
Se creó variables.js, con la información de tipo y factor de multiplicación respectivos para cada tipo de vivienda y ubicación. Esta informacion siendo guardada en arreglos de objetos. 

Al main.js se lo modifica a modo que busque dentro de cada arreglo, la coincidencia con lo que el usuario ingrese a través de un prompt, y al encontrarlo, guarde el objeto. Al objeto guardado para la ubicación deseada, y el tipo de vivienda deseada, se utilizan sus factores de multipllicación respectivos para el cálculo final.

```html
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
```