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
- Código
<br>
  ```
  .nombreClaseAzul{background-color: #0037ff;}
  ```
  
 
Establece el color desea para la clase de nombre 'nombreClaseAzul'.

Para utilizar estilos a través de in 'id'. 
- Código
  ```
   #parrafoverde{
      background-color: #8a2419;
   }
  ```
- Emmet 
  * `<! + TAB`
<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/01.HTML/Informe/Imagenes/html.PNG" width="400" height="250">
</p>

Los dos Tags mas importantes son el Body y el Head
Una vez que tenemos el cuerpo del HTML podemos empezar a realizar un ejemplo de pagina web.

<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/01.HTML/Informe/Imagenes/codigo.png" width="400" height="250">
</p>

En la creacion de este HTML se contemplo varios conceptos, como el manejo del colores, redireccion de paginsa, imagens con links, titulos y manejo de listas tanto ordenadas como no ordenadas. 


Código para el manejo de estilos.
```
style="background-color: pink" 
```

Título con redirección.
```
<h3><a href="https://es.wikipedia.org/wiki/Saint_Seiya" target="_blank">Link del papu</a></h3> 
```

Imagenes con redirección
```
<a href="https://es.wikipedia.org/wiki/Saint_Seiya">
<img border="0" alt="el papu" src="http://file.saintseiya-gold.com/global/common/img/story/seiya_s11_2.jpg" width="300" height="300">
```
##Código fuente del HTML
```
<!DOCTYPE html>
<html lang="en" style="background-color: #00bcd4">

<head>
    <meta charset="UTF-8">
    <title>Aprendiendo HTML</title>
</head>

<body style="background-color: pink">
    <h1>Cabecera grande</h1>
    <<h2>Cabecera menos grande</h2>
        <h3>Cabecera menos menos grande</h3>

        <h3><a href="https://es.wikipedia.org/wiki/Saint_Seiya" target="_blank">Link del papu</a></h3>
        <h2>Caballeros del Zodiaco</h2>
        <a href="https://es.wikipedia.org/wiki/Saint_Seiya">
            <img border="0" alt="el papu" src="http://file.saintseiya-gold.com/global/common/img/story/seiya_s11_2.jpg" width="300" height="300">
        </a>
        <p>aint Seiya (聖闘士星矢, Seinto Seiya?), conocido en español como Los Caballeros del Zodiaco, es un manga shōnen creado en 1986 por Masami Kurumada y publicado originalmente desde enero del mismo año en la revista Shūkan Shōnen Jump de la editorial Shūeisha hasta diciembre de 1990. Fue adaptado posteriormente en una serie de anime de 145 episodios. También se han producido cinco películas animadas y una película con animación CG, además de varias precuelas y secuelas oficiales de la historia original. Se publicaron 108 tomos del manga junto con una edición especial, haciendo un total de 109 en formato Tankoubon, dividido en 28 volúmenes con tres series principales: Santuario, Poseidón y Hades. Ha sido reimpreso y reeditado en formato Wideban, Bunkoban y Kanzenban y también el llamado "Remix", la producción en tres ediciones (2002, 2007 y 2012).</p>

        <!--lista no ordenada></!-->
        <!--usando emmet tab></!-->
        <ul>
            <li>un papu </li>
            <li>dos papus</li>
            <li>tres papus</li>
        </ul>

        <ol>
            <li>un gato </li>
            <li>dos gatos </li>
            <li>tres gatos</li>
        </ol>
</body>

</html>

```
<br>
### Resultado en el navegador


<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/01.HTML/Informe/Imagenes/html%20resultado.PNG" width="800" height="500">
</p>

<br>

Manejo de colores desde el navegador. 
El uso de colores para cambiar los estilos resulta mas facil desde el navegor, inspeccionado el elemento con F12, simplemente se copia el codigo de color del elemento como se muestra a continuación.

<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/01.HTML/Informe/Imagenes/elementos%20del%20html.PNG" width="900" height="600">
</p>

# Manejo de PostMan
Postman permite obtener información mediante varios metodos como GET, POST, entre otros. 
Para su utilizacion ingresamos una url por ejemplo:
Se desea obtener la información de un pokemón.

- Parametros necesarios (el número del pokemón deseado - 100)
```
http://pokeapi.co/api/v2/pokemon/100/
```
Resultado
<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/01.HTML/Informe/Imagenes/PostMan.PNG" width="900" height="600">
</p>

El uso de PostMan sirve para obtener archivos .json a partir de urls con metodos get y pos. 

# Inspección de elementos en el navegador

Dentro de la inspección de elementos se puede visualizar el tiempo de carga de nuestra pagina, esto sirve para establecer buenas practicas de desarrollo y que la pagina Web no se demore mas de lo debido.

<br>
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/01.HTML/Informe/Imagenes/trafico.PNG" width="900" height="600">
</p>

<a name="conrec"></a>

<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Gracias a la practica realizada se logra entender el funcionamiento del navegador y la web
- Utilizar extensiones como emmet y beautify sirven para reducir tiempos de desarrollo, permitiendos realizar mayor cantidad de trabajo.
- El lenguaje Markdown nos permite crear archivos ligeros que sean legibles y faciles de entender. 
- Herramientas de desarrollo como PostMan nos permiten obtener datos normalizados .json o .xml

<br>
<a href="#cabecera">A la cabecera</a>

Author: [Angel Molina](https://github.com/f3ar161)
