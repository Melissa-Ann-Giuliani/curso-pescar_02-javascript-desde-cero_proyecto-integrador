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

```js
let propertyFM;
let i = 0;
let propertyInput = prompt("Ingrese tipo de vivienda:\n1- Casa\n2- P.H.\n3- Dto. Edificio\n4- Barrio Privado\n5- Oficina\n6- Local Comercial\n7-Depósito logística\n ");

while(i < propertyData.length && propertyData[i].tipo !== propertyInput)
{
    i++;
}

if(i < propertyData.length)
{
    propertyFM = propertyData[i];
}
else {
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

## Módulo 4
### En index.html
Se eliminan las opciones hardcodeadas para cada factor, que serán llenadas por el main.js.
```html
<label for="property">Selecciona el tipo de propiedad</label>
<select id="property">
    <option selected disabled>...</option>
</select>
<label for="location">Selecciona tu ubicación</label>
<select id="location">
    <option selected disabled>...</option>
</select>

<label for="squarem2">Ingresa los metros cuadrados de la vivienda: </label>
<input name="squarem2" id="squarem2" type="number" value="20" min="20" max="500">
```

Se crea el boton que al darle click, calculará el precio estimado, a través de una función a continuación en main.js.
```html
<button id="calculate">COTIZAR</button>
```

Se agrega un header para mostrar el resultado obtenido en el cálculo en la función llamada por el botón.
```html
<h3>Precio estimado: $ <span></span></h3>
```

### En main.js
Se crean variables y constantes para guardar los valores de cada factor que entrará en juego en el cálculo de la multiplicación.
```js
const m2BaseCost = 1.16;
const selectP = document.querySelector("select#property");
const selectL = document.querySelector("select#location");
const inputM2 = document.querySelector("input#squarem2");
const calcButton = document.querySelector("button#calculate");
const spanResult = document.querySelector("h3 span");
```

Se crean dos funciones nuevas, para que recorran cada array de objetos correspondientes, e ir generando etiquetas "option" con sus valores correspondientes. 
```js
function loadProperties(){
    let propertyOption = "";
    for(property of propertyData){
        propertyOption += "<option>" + property.type + "</option>";
    }
    selectP.innerHTML += propertyOption;
}

function loadLocations(){
    let locationOption = "";
    for(location of locationData){
        locationOption += "<option>" + location.type + "</option>";
    }
    selectL.innerHTML += locationOption;
}
```

Se crean dos funciones paar obtener los atributos factor de la propeidad y ubicacio seleccionada 
```js
function searchProperties(){
    if(selectP.value !== ''){
        for(let property of propertyData){
            if(property.type === selectP.value){
                return property.factor;
            }
        }
    }
    return null;
}

function searchLocations(){
    if(selectL.value !== ''){
        for(let location of locationData){
            if(location.type === selectL.value){
                return location.factor;
            }
        }
    }
    return null;
}
```
Asegura de colocar el "return null", pues sin el, da error de retorno (la función retorna por el if solamente caso contrario).

Se crea la funcion que en el click del boton de Cotizar, si todas las funciones de busqueda dan un valor, se calcula el precio estimado (multiplicación).

```js
calcButton.onclick = function() {
    const propertyFM = searchProperties();
    const locationFM = searchLocations();
    const meters = parseInt(inputM2.value);

    if(propertyFM && locationFM && meters){
        let result = propertyFM * locationFM * meters * m2BaseCost;
        spanResult.textContent = result.toFixed(2);
        console.log(`El resultado es $${result.toFixed(2)}`);
    }
    else
    {
        console.warn("Hubo un error");
        spanResult.textContent = "ERROR";
    }
}
```

## Módulo 5
En la función asignada para cuando se le haga click al botón Cotizar, se coloca dentro del boton un gif a modo de simular carga, y se deshabilitan boton, input y selectores.
Luego de un delay a través de setTimeout, el boton vuelve a mostrar su texto inicial, y todo elemento que estaba deshabilitado, se vuelve a habilitar, y se realiza el cálculo y muestra en el header correspondiente.
```js
calcButton.onclick = function() {
    const propertyFM = searchProperties();
    const locationFM = searchLocations();
    const meters = parseInt(inputM2.value);

    calcButton.innerHTML=`<img src="${buttonGif}" height="36px"  alt="loading">`
    calcButton.disabled = true;
    selectP.disabled = true;
    selectL.disabled = true;
    inputM2.disabled = true;

    setTimeout(() => {
        calcButton.innerHTML = "COTIZAR";
        calcButton.disabled = false;
        selectP.disabled = false;
        selectL.disabled = false;
        inputM2.disabled = false;

        if(propertyFM && locationFM && meters){
            let result = propertyFM * locationFM * meters * m2BaseCost;
            spanResult.textContent = result.toFixed(2);
            console.log(`El resultado es $${result.toFixed(2)}`);
        }
        else
        {
            spanResult.textContent = "ERROR";
            console.warn("Hubo un error");
        }
    }, 1500);    
}
```