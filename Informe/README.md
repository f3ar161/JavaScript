# Estilos en HTML

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="200" height="150">
</p>

### Tema : `Estilos en HTML` 
### Fecha : `2016-11-1`
### Estudiante : `Angel Enrique Molina Ortiz`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#angular">ANGULARJS</a>
  * <a href="#BOOTSTRAP">BOOTSTRAP</a>
  * <a href="#HOJAESTILO">HOJA DE ESTILO</a>
  * <a href="#css">CSS</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Estilos en HTML`

<a name="objetivos"></a>
## Objetivos

- Aprender el uso de estilos en HTML
- Entender las herramientas que se utilizan en el desarrollo web como: AngularJS, BOOTSTRAP, ENTRE OTRAS.
- Desarrollar una buena apreciacion para aplicar estilos a las paginas web.

<a name="marco-teorico"></a>
## Marco Teorico
<a name="angular"></a>
### ANGULAR
<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png" width="300" height="100">
</p>

AngularJS, o simplemente Angular, es un framework de JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles.

La biblioteca lee el HTML que contiene atributos de las etiquetas personalizadas adicionales, entonces obedece a las directivas de los atributos personalizados, y une las piezas de entrada o salida de la página a un modelo representado por las variables estándar de JavaScript. Los valores de las variables de JavaScript se pueden configurar manualmente, o recuperados de los recursos JSON estáticos o dinámicos.

AngularJS se puede combinar con el entorno en tiempo de ejecución Node.js, el framework para servidor Express.js y la base de datos MongoDB para formar el conjunto MEAN.

(Fuente: [wikipedia](https://es.wikipedia.org/wiki/AngularJS))

<br>
<a name="BOOTSTRAP"></a>
### BOOTSTRAP
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/Segunda-Clase/Informe/Imagenes/BOOTSTRAP.jpg" width="200" height="200">
</p>

Bootstrap, es un framework originalmente creado por Twitter, que permite crear interfaces web con CSS y JavaScript, cuya particularidad es la de adaptar la interfaz del sitio web al tamaño del dispositivo en que se visualice. Es decir, el sitio web se adapta automáticamente al tamaño de una PC, una Tablet u otro dispositivo. Esta técnica de diseño y desarrollo se conoce como “responsive design” o diseño adaptativo.

El beneficio de usar responsive design en un sitio web, es principalmente que el sitio web se adapta automáticamente al dispositivo desde donde se acceda. 

(Fuente: [arweb](http://www.arweb.com/chucherias/editorial/%C2%BFque-es-bootstrap-y-como-funciona-en-el-diseno-web.htm))

<br>
<a name="HOJAESTILO"></a>
### HOJA DE ESTILO
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/Segunda-Clase/Informe/Imagenes/ESTILO.jpg" width="350" height="100">
</p>
Las hojas de estilo representan un avance importante para los diseñadores de páginas web, al darles un mayor rango de posibilidades para mejorar la apariencia de sus páginas. En los entornos científicos en que la Web fue concebida, la gente estaba más preocupada por el contenido de sus páginas que por su presentación. A medida que la Web era descubierta por un espectro mayor de personas de distintas procedencias, las limitaciones del HTML se convirtieron en fuente de continua frustración, y los autores se vieron forzados a superar las limitaciones estilísticas del HTML. Aunque las intenciones han sido buenas -- mejorar la presentación de las páginas web --, las técnicas para conseguirlo han tenido efectos secundarios negativos. Entre estas técnicas, que dan buenos resultados para algunas personas, algunas veces, pero no siempre ni para todas las personas, se incluyen:

- La utilización de extensiones propietarias del HTML
- Conversión del texto en imágenes
- Utilización de imágenes para controlar el espacio en blanco
- La utilización de tablas para la organización de las páginas
- Escribir programas en lugar de usar HTML

(Fuente: [html.conclase](http://html.conclase.net/w3c/html401-es/present/styles.html))

<br>
<a name="css"></a>
### CSS
<p align="center">
<img src="https://3.bp.blogspot.com/-qbDHB-6hWTg/VrqgMzARI0I/AAAAAAAAGeQ/QBiS33eX8pU/s1600/css3_logo.png" width="150" height="200">
</p>
CSS es un lenguaje utilizado en la presentación de documentos HTML. Un documento HTML viene siendo coloquialmente “una página web”. Entonces podemos decir que el lenguaje CSS sirve para organizar la presentación y aspecto de una página web. Este lenguaje es principalmente utilizado por parte de los navegadores web de internet y por los programadores web informáticos para elegir multitud de opciones de presentación como colores, tipos y tamaños de letra, etc.
(Fuente: [aprenderaprogramar](http://www.aprenderaprogramar.com/index.php?option=com_content&id=546:que-es-y-para-que-sirve-el-lenguaje-css-cascading-style-sheets-hojas-de-estilo&Itemid=163))

<br>
<a href="#cabecera">A la cabecera</a>
<br>
<a name="desarrollo"></a>
## Desarrollo del informe

Como primer paso se realiza el uso de estilos en cascada, este es de gran utilidad cuando se desea aplicar varios estilos a diferentes tags dentro del HTML.
- Código ejemplo 
  <br>
  ```
  <Style>
    .borde{
        border: black solid 2px;
    }
  </Style>
  ```

<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/Segunda-Clase/Informe/Imagenes/estilos%20cascada.PNG" width="800" height="600">
</p>

A continuacion se utilizan clases para definir estilos que nosotros deseemos.
- Código dentro del `<head>`
<br>
  ```
  .nombreClaseAzul{background-color: #0037ff;}
  ```

- Código dentro del `<body>`
  ```
   <h1 class="nombreClaseAzul">Clase de CSS</h1>
  ```
 
Establece el color desea para la clase de nombre 'nombreClaseAzul'.

Para utilizar estilos a través de in 'id'. 
- Código dentro del `<head>`
  ```
   #parrafoverde{
      background-color: #8a2419;
   }
  ```
- Código dentro del `<body>`
  ```
   <p id="parrafoverde" class="nombreClaseVerde" ">Parrafo tres</p>
  ```
  
Para utilizar los estios desde un archivos tenemos que crear un archivo con nombre y extension .css
<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/Segunda-Clase/Informe/Imagenes/extcss.PNG" width="400" height="250">
</p>

Estos archivos pueden estar dentro de una carpeta que se llame estilos o bien fuera junto al HTML, se debe tomar que este bien referenciada la ubicación hacia el archivo .css


Dentro del archivo .css el codigo la sintaxis del codigo va como se muestra en la imagen:

<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/Segunda-Clase/Informe/Imagenes/estilos%20navegacion2.PNG" width="500" height="300">
</p>

Dentro del `<head>` del HTML va la URL del archivo de estilos. 

- Código
```
<link rel="stylesheet" href="html/estilos/estilos2/estilos3/estilos.css">
```

Para el manejo de contenedores se utiliza BootStrap agregamos el CDN de bootstrap
- Link agregado
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```
<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/Segunda-Clase/Informe/Imagenes/contbootstrap.PNG" width="700" height="160">
</p>

CDN es una red  que comhparte archivos, estos CDN estan cargados en diferentes lugares. 
<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/Segunda-Clase/Informe/Imagenes/img3p2%20-%20copia.png" width="800" height="300">
</p>

Se puede utilizar mediaQuery para cambiar de color de acuerdo al tamaño.
<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/Segunda-Clase/Informe/Imagenes/imgp2%20-%20copia.png" width="800" height="300">
</p>

Aplicando div:hover (transiciones que les da tiemhpo desde un color a otro color o de tamano utilizando css). 
<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/Segunda-Clase/Informe/Imagenes/img2p2%20-%20copia.png" width="800" height="300">
</p>

Se puede visualizar la carga del css desde con bootstrap desde el navegador inspecionando el elemendo, mediante esto podemos visualizar cuanto se demora en visualizar los estilos de la página.
<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/Segunda-Clase/Informe/Imagenes/img4p2.png" width="800" height="300">
</p>

Para el manejo de las rejillas junto con bootstrap, se debe tener en cuenta que bootstrap suministra un sistema de grid de 12 columnas, lo que se conoce como mobile first grid, diseñada totalmente para trabajar primeramente  para pantalla pequeñas de dispositivos móviles y en segunda instancia en pantallas de mayor tamaño. 

A continuación, se muestra un contenedor realizado conjuntamente con emmet para agilizar el proceso. 
<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/Segunda-Clase/Informe/Imagenes/contenedor.PNG" width="500" height="900">
</p>

- Código
```
<!--    .container -->
    <div class="container" style="background-color:yellow;">
        <!--       .row*3-->
        <div class="row" style="background-color:green;">
            <!--
                1 1 1 1 1 1 1 1 1 1 1 1 = 12
                2 2 2 2 2 2 = 12
                3 3 3 3 = 12
                3 2 3 1 3 = 12
            -->
            <!-- .col-md-4*3>h2 EMMET -->
            <h1>Fila1</h1>
            <!-- md con 980 se hpace chpiquito-->
            <div class="col-md-4 borde">
                <h2>Columna md 4 - 1</h2>
            </div>
            <div class="col-md-4 borde">
                <h2>Columna md 4 - 2</h2>
            </div>
            <div class="col-md-4 borde">
                <h2>Columna md 4 - 3</h2>
            </div>
        </div>

        <div class="row" style="background-color:#7979f3;">
            <h1>Fila2</h1>
            <!--  .col-sm-3.borde*4>h3 -->
            <!-- md con 680 se hpace chpiquito-->
            <div class="col-sm-3 borde">
                <h3>CSM3-1</h3>
            </div>
            <div class="col-sm-3 borde">
                <h3>CSM3-2</h3>
            </div>
            <div class="col-sm-3 borde">
                <h3>CSM3-3</h3>
            </div>
            <div class="col-sm-3 borde">
                <h3>CSM3-4</h3>
            </div>

        </div>

        <div class="row" style="background-color:red;">

            <h1>Fila3</h1>
            <!--            .col-lg-6.borde*2>h3-->

            <div class="col-lg-6 borde">
                <h3>GLC-1</h3>
            </div>
            <div class="col-lg-6 borde">
                <h3>GLC-2</h3>
            </div>

        </div>
        <!--.row>col-xs-2.borde+.col-xs-5.border*2-->

        <div class="row">
            <col-xs-2 class="borde"></col-xs-2>
            <div class="col-xs-5 border">
                <h3>GLC-1</h3></div>
            <div class="col-xs-5 border">
                <h3>GLC-1</h3></div>
        </div>
        <h1>Hola estoy dentro del div</h1>
    </div>
```
- Resultado en el navegador
<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/Segunda-Clase/Informe/Imagenes/contenedor%20resultado.PNG" width="600" height="500">
</p>
<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- El uso de estilos .css nos permite separar el contenido y mejorar la presentación de nuestros HTML.
- Bootstrap es altamente aceptado dentro de la comunidad web, tiene un connjunto de buenas practicas, entre la mas destacada tiene el Grid System visto en la practica.
- El manejo de los comentarios dentro HTML nos ayuda a recordanos como utilizar los comandos de emmet para la creacion de las filas y las columnas. 
- El uso del framework bootstrap para el desarrollo fron end nos permite tener una mayor rapidez y comodidad al momento de crear sitios web.

<br>
<a href="#cabecera">A la cabecera</a>

Author: [Angel Molina](https://github.com/f3ar161)
