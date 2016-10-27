# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="200" height="150">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `2016-10-18`
### Estudiante : `Angel Enrique Molina Ortiz`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#defhtml">HTML</a>
  * <a href="#emmet">EMMET</a>
  * <a href="#xml">XML</a>
  * <a href="#PostMan">PostMan</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introducción a la Web`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web
- Conocer herramientas de desarrolladores web como: postman, inspetor web
- Aprender el uso de lenguaje HTML CSS

<a name="marco-teorico"></a>
## Marco Teorico
<a name="defhtml"></a>
### HTML
<p align="center">
<img src="http://www.ciudadano2cero.com/wp-content/uploads/2014/01/html-on-sheet.jpg?x46159" width="300" height="200">
</p>

HTML, que significa Lenguaje de Marcado para Hipertextos (HyperText Markup Language) es el elemento de construcción más básico de una página web y se usa para crear y representar visualmente una página web. Determina el contenido de la página web, pero no su funcionalidad.
HTML le da "valor añadido" a un texto estándar en español. Hiper Texto se refiere a enlaces que conectan una página Web con otra, haciendo de la Red Mundial (World Wide Web) lo que es hoy. Al crear y subir páginas Web a Internet, te haces participante activo de esta Red Mundial desde que tu sitio está en línea. HTML soporta imágenes y también otro tipo de elementos multimedia. Con la ayuda de HTML todos pueden hacer sítios web estáticos y dinámicos. HTML es el lenguaje que describe la estructura y el contenido semántico de un documento web.

(Fuente: [developer.mozilla](https://developer.mozilla.org/es/docs/Web/HTML))

<br>
<a name="emmet"></a>
### EMMET
Anteriormente conocido como Zen Coding; es un plugin para muchos editores de texto desarrollado y optimizado para desarrolladores web cuyo flujo de trabajo depende de HTML / XML y CSS, pero se puede utilizar con los lenguajes de programación también.

(Fuente: [html5facil](http://html5facil.com/tips/emmet-una-herramienta-esencial-para-los-desarrolladores-web/))

<br>
<a name="XML"></a>
### XML
XML, siglas en inglés de eXtensible Markup Language ("lenguaje de marcas Extensible"), es un meta-lenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium (W3C) utilizado para almacenar datos en forma legible. Proviene del lenguaje SGML y permite definir la gramática de lenguajes específicos (de la misma manera que HTML es a su vez un lenguaje definido por SGML) para estructurar documentos grandes. A diferencia de otros lenguajes, XML da soporte a bases de datos, siendo útil cuando varias aplicaciones deben comunicarse entre sí o integrar información.

(Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Extensible_Markup_Language))

<br>
<a name="PostMan"></a>
### PostMan
Esta herramienta nos permite construir y gestionar de una forma cómoda nuestras peticiones a servicios REST (Post,Get,etc). Su manejo es realmente intuitivo ya que simplemente tenemos que definir la petición que queremos realizar.

(Fuente: [Genbetadev](http://www.genbetadev.com/herramientas/chrome-rest-y-postman))

<br>
<a href="#cabecera">A la cabecera</a>
<br>

<br>
<a href="#cabecera">A la cabecera</a>


<a name="desarrollo"></a>
## Desarrollo del informe

Para el desarrollo de la practica se procede a instalar la extension emmet en bracket.

<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/01.HTML/Informe/Imagenes/emmet.png" width="800" height="500">
</p>


### Imagenes desde Github **IMPORTANTE**

Se pueden usar imágenes desde nuestros archivos en github que constan de la siguiente URL:

- Github
  * La url de github que es `https://github.com` 
- Usuario
  * La url de usuario de github que en este caso es: `/adrianeguez` 
- Repositorio
  * El repositorio de Github que estamos usando, en este caso es `/Tec_Web_Js_2016_B`
- Rama o  Branch
  * La rama de nuestro repositorio en este formato: `/blob/master`
- El PATH
  * La direccíon de nuesto archivo por ejemplo `/carpeta/subcarpeta/subsubcarpeta/archivo.png` en este ejemplo es `/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png` 
- RAW
  * Por ultimo mandamos un Query String Parameter de la con la variable `raw` y valor `true` de la siguiente manera: `?raw=true`
  
**Al final** nuestro url queda de la siguiente manera:

#### `https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true`

<p align="center">
<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">
</p>

Por ultimo podemos centrar las imagenes de la siguiente manera:


```
<p align="center">

<img src="https://github.com/adrianeguez/Tec_Web_Js_2016_B/blob/master/Ejemplo%20de%20un%20Informe/Imagenes/Flujograma.png?raw=true" width="500" height="800">

</p>
```

### Links dentro de github

Para nosotros utilizar los Links dentro de Github debemos de hacer dos cosas:

1. Definir un anchor name donde nosotros queramos mover cuando demos clic de la siguiente manera y formate (**NOTESE QUE ESTAN JUNTAS**):

  ```
  <a name="nombre"></a>
  ## titulo2
  ```
2. Después de esto debemos de linkear mediante un texto por ejemplo en una lista de la siguiente manera (**NO ELVIDAR EL `#`**):
 
  ```
  - <a href="#nombre">Dale clic aqui para ir al titulo 2</a>
  ```
  <a name="conrec"></a>

<br>
<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- Se recomienda mejorar la presentacion
- Se recomienda usar el ir a cabecera despues de terminar una seccion
- Se aprendio el uso de HTML con Markdown
- Conocimos herramientas de desarrollo web como postman e inspector web
- Desarrollamos conocimientos de introducción Web

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Angel Molina](https://github.com/f3ar161)
