# Sailsjs - Assets / Views / Pipeline / Controllers

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="200" height="150">
</p>

### Tema : `Sailsjs - Assets / Views / Pipeline / Controllers` 
### Fecha : `2017-01-05`
### Estudiante : `Molina Ortiz Angel`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `5`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#sailjs">SailJS</a>
    * <a href="#assets">Assets</a>
    * <a href="#views">Views</a>
    * <a href="#routes">Routes</a>
    * <a href="#controllers">Controllers</a>
    * <a href="#pipeline">Pipeline</a>
  
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a SailJS`

<a name="objetivos"></a>
## Objetivos

- Realizar aplicaciones web con sails
- Aprender el uso de sails
- Comprender los conceptos básicos de sails

<a name="marco-teorico"></a>
## Marco Teorico
<a name="sailjs"></a>
### SailJS
Sails es un framework de Javascript diseñado para parecerse a una arquitectura MVC de frameworks como Ruby on Rails. Hace que el proceso de construcción de aplicaciones en Node.js sea más sencilla, especialmente las APIs, aplicaciones de paginas sumples y con características de tiempo real, como el chat.

Sails tiene como puerto de defecto el 1337. Y se encuentra conformado por las carpetas:
- Assets.- Archivos de Javascript y CSS.
- Public.- Archivos que estan disponibes de forma pública, como imagenes.
- Config.
- Vistas.- Vistas de la aplicación.

(Fuente: [sailsjs](http://sailsjs.com/documentation/concepts))

<br>
<a href="#cabecera">A la cabecera</a>

<p align="center">
<img src="https://camo.githubusercontent.com/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width="300">
</p>

<br>
<a name="assets"></a>
### Assets
Los assets son una carpeta dentro del Framework la cual funciona como un servidor web de archivos estáticos, en donde cualquier tipo de archivos que coloquemos en esta carpeta será mostrada al público.
(Fuente: [Assets](http://sailsjs.com/documentation/concepts/assets))

<p align="center">
<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRopC2y9NRW33uifZOOSa-mvnP2Pjj4RBynYamcDBbHOpDhsuGG" width="300">
</p>

<br>
<a name="views"></a>
### Views
Las vistas son las páginas que se va a mostrar al usuario dependiendo de la lógica que tenga nuestra aplicación de sailsjs. 
Link Documentación Oficial:
(Fuente: [Views](http://sailsjs.com/documentation/concepts/views))

<p align="center">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRabtBuZlKko7_AQK2GFQ0uv48jonBNpZ_dlmIchVDYaGiYq4uf" width="300">
</p>
<br>
<a name="routes"></a>
### Routes
Las rutas son a donde vamos a direccionar nuestro trafico dependiendo los métodos HTTP y el URL de nuestros recursos. 
Link Documentación Oficial:
(Fuente: [Routes](http://sailsjs.com/documentation/concepts/routes))

<p align="center">
<img src="http://www.tobinkusuma.com/PROJECT/buttons/navi.gif" width="300">
</p>
<br>
<a name="controllers"></a>
### Controllers
Los controladores dentro de Sailsjs tienen como finalidad brindar los métodos CRUD de nuestros modelos, así también como exponer la lógica de negocio que se defina en la aplicación, como por ejemplo la autenticación.
(Fuente: [Controllers](http://sailsjs.com/documentation/concepts/controllers))

<p align="center">
<img src="https://cdn0.iconfinder.com/data/icons/web-development-2/512/cog_wheel_gears_technical_support_cogwheel_service_repair_teamwork_care_development_mechanics_gear_cogs_mechanical_optimization_settings_flat_design_icon-512.png" width="300">
</p>

<br>
<a name="pipeline"></a>
### Pipeline
En el archivo pipeline.js dentro de la carpeta task se encuentran las diferentes configuraciones de GRUNT que es un automatizador de actividades con JavaScript. Dentro de este podemos configurar los assets que van a ser inyectados en TODAS las vistas de nuestra aplicación en Sailsjs. (Fuente: [Pipeline](https://code.tutsplus.com/tutorials/meet-grunt-the-build-tool-for-javascript--net-24856))

<p align="center">
<img src="https://www.smashingmagazine.com/wp-content/uploads/2013/10/grund-js-opt.png" width="300">
</p>


<a name="desarrollo"></a>
## Desarrollo del informe

Instalar sails mediante nodejs con el comando:
```
npm install sails
```
<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap1.png" width="550" height="">
</p>

Crear un nuevo proyecto de sails "Mascotas". Comando:
```
sails [Proyecto]
```

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap2.png" width="500" height="">
</p>

Se crea una carpeta con el nombre especificado y las carpetas que conforman sails.

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap3.png" width="200" height="">
</p>

En assets se encuentran los archivos fijos como: css, js, entre otros.

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap4.png" width="200" height="">
</p>
    
Para levantar el servidor se utiliza:
```
sails lift
```
Hay qye ubicarse en la carpeta del proyecto.

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap5.png" width="400" height="">
</p>
    
Ingresar a la direccion: 
```
localhost:1337/app/index.html
```
Si no se presenta ningun error se mostrar una pagina como la que se muestra a cntinuacion: 
<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap6.png" width="400" height="">
</p>


Las vistas: 
se las puede observar dentro de la carpeta views del proyecto.

<p align="center">
<img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap7.png?raw=true" width="200" height="">
</p>

Pipeline: 
Muestra lo que se encuentra en el ultimo archivo css en caso de tener varios para una pagina web. 

<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap9.png" width="400" height="">
</p>
        
Pagina con el ultimo archivo css trabajando. 

<p align="center">
<img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap10.png" width="500" height="">
</p>

A continuacion se define un solo archivo .css

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap11.png" width="" height="">
</p>


En el mismo archivo, se encuentra la variable "jsFilesToInject".
Donde se  define los archivos que se van a ejecutar y que se encuentran en assets. 

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap13.png" width="" height="">
</p>

Se especifica el body con el comando: 
```
<%- body -%>
```
Para leer el contenido desde otro archivo ubicado en las views.

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap14.png" width="" height="">
</p>
Definir en otro archivo de la vista el contenido del body. En este caso en
```
homepage.ejs
```

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap15.png" width="500" height="">
</p>

Estilos para una pagina especifica.

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap16.png" width="500" height="">
</p>

Pagina con cambios realizados.

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap17.png" width="400" height="">
</p>

En la carpeta de config archivo:
```
routes.js
``` 
Se define las rutas que se necesitaran en la aplicacion.

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap18.png" width="200" height="">
</p>

Se especifica la vista principal,
```
homepage
```
Se especifican las diferentes rutas junto con su vista asignada para cada una.

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap19.png" width="200" height="">
</p>

Se crean las vistas con .ejs 

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap20.png" width="200" height="">
</p>


Controladores
<br>	
Sails permite la creacion de controles, comando:
```
sails generate controller [nombre]
```

El archivo se puede configurar, se crea tres metodos en el cual el servidor dara una respuesta.

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap23.png" width="300" height="">
</p>

Para ejecutar los controladores se ingresa en el navegador:
```
localhost:1337/[nombre dado al controlador]/[nombre definido en el archivo]
```

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap24.png" width="300" height="">
</p>

Resultado en archivos .json 

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap25.png" width="200" height="">
</p>

retorno de respuestas en formato .json de acuerdo al metodo http.

<p align="center">
    <img src="https://github.com/f3ar161/JavaScript/blob/10-Sails-01/Informe/imagenes/cap26.png" width="200" height="">
</p>

<a name="conrec"></a>
### Conclusiones y Recomendaciones
- Sails es un framework de trabajo facil de usar con el cualse pueden crear proyectos web rapidamente sin mayor complicaicones. 
- Sails comprender el modelo MVC con el cual se puede generar controladores vistas y modelos de manera aislada sin mezclar todo, permitiendo que sea una aplicacion escalable.
- Se necesia seguir la documentacion de sails para el proceso de instalacion, para no tener ningun inconveniente. 
- Para poder utilizar sails para desarrollar un proyecto se tiene que instalar nodejs previamente en el computador o se puede utilizar cloud9.io


<br>
<a href="#cabecera">A la cabecera</a>
