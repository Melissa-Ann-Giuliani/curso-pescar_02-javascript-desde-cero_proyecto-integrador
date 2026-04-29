const m2BaseCost = 1.16;
const selectP = document.querySelector("select#property");
const selectL = document.querySelector("select#location");
const inputM2 = document.querySelector("input#squarem2");
const calcButton = document.querySelector('button#calculate');
const spanResult = document.querySelector("h3 span");

function loadProperties(){
    let propertyOption = "";
    for(let property of propertyData){
        propertyOption += "<option>" + property.type + "</option>";
    }
    selectP.innerHTML += propertyOption;
}

function loadLocations(){
    let locationOption = "";
    for(let location of locationData){
        locationOption += "<option>" + location.type + "</option>";
    }
    selectL.innerHTML += locationOption;
}

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
        spanResult.textContent = "ERROR";
        console.warn("Hubo un error");
    }
}

loadProperties();
loadLocations();