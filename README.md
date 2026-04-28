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
* si los metros cuadrados ingresados en un prompt se pueden convertir a un valor entero.

