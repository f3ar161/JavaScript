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

### SailsJS
Se instala el paquete de sails mediante nodejs con el comando ``npm install sails``
<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap1.png?raw=true" width="550" height="">
</p>

Se crea un nuevo proyecto de sail, llamado Mascotas. Para lo cual se ejecuta ``sails [Nombre Proyecto]``

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap2.png?raw=true" width="500" height="">
</p>

Una vez creado el proyecto se creará una carpeta con el nombre especificado e internamente se encontrarán las carpetas que conforman sails.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap3.png?raw=true" width="200" height="">
</p>
**Assets**
Dentro de la carpeta assets se encuentran los archivos de css y de estilo, javascript de la aplicación, entre otros.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap4.png?raw=true" width="200" height="">
</p>
    
Se levanta el servidor de sails lift. Se debe tener cuidado de estar ubicado dentro de la carpeta del proyecto para que el archivo a ejecutar pueda ser encontrado.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap5.png?raw=true" width="400" height="">
</p>
    
Se abre un navegador y se ubica el nombre de la máquina, el puerto, y la ubicación hasta llegar al archivo index.html. ``localhost:1337/app/index.html``
 
<p align="center">
<img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap6.png?raw=true" width="400" height="">
</p>

**Views**
En la carpeta de views, se encuentran los archivos de las vistas de la aplicación, originalmente se encuentran las vistas en caso de que haya algún error, y la página principal por defecto.

<p align="center">
<img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap7.png?raw=true" width="200" height="">
</p>

Dentro del archivo de layout, se encuentra una variable ``cssFilesToInject``, en el cual se especifican la ubicación de los archivos que se utilizarán en la aplicación.

<p align="center">
<img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap8.png?raw=true" width="400" height="">
</p>

**Pipeline**
En caso de que se definan varios archivos css y no se haya especificado uno solo, esta variable leerá todos, uno después de otro, y se mostrará lo que se encuentre en el último. Esto se conoce como pipeline.

<p align="center">
<img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap9.png?raw=true" width="400" height="">
</p>
        
Se actualiza la página y se muestra con los cambios en la vista.

<p align="center">
<img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap10.png?raw=true" width="500" height="">
</p>

De igual forma, se puede definir un solo archivo para que sea leído de la carpeta.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap11.png?raw=true" width="" height="">
</p>

Al actualizar el navegador, se ingresa a inspeccionar y se  verifica que está leyendo un solo archivo de estilos.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap12.png?raw=true" width="" height="">
</p>

Dentro del mismo archivo, se encuentra la variable ``jsFilesToInject``. En esta variable en cambio de define los archivos que se van a ejecutar y que se encuentren en assets. 

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap13.png?raw=true" width="" height="">
</p>

En la parte de la vista del layout, se modifica el código a mostrar. Se especifica el body ``<%- body -%>`` puesto que el contenido se leera de otro archivo ubicado en views. Esto permite definir encabezados y pies de página

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap14.png?raw=true" width="" height="">
</p>

Se define en otro archivo de la vista el contenido del body. En este caso en ``homepage.ejs``

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap15.png?raw=true" width="500" height="">
</p>

Se puede definir asi mismo, estilos propios para una pagina especifica.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap16.png?raw=true" width="500" height="">
</p>

Se actualiza la pagina y se muestran los cambios realizados

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap17.png?raw=true" width="400" height="">
</p>

En la carpeta de config se encuentra el archivo ``routes.js``, en el cual se definen las rutas que se necesitaran en la aplicacion.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap18.png?raw=true" width="200" height="">
</p>

Se especifica la vista principal o por defecto, ``homepage``, y se especifican las diferentes rutas junto con su vista asignada para cada una.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap19.png?raw=true" width="200" height="">
</p>

Se crea en la carpeta de views, las nuevas vistas definidas en la seccion de rutas, con la extension ``ejs``

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap20.png?raw=true" width="200" height="">
</p>

En el navegador se comprueba lo configurado anteriormente, para ello se ingresa al puerto y se ubica la ruta nueva que se haya especificado.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap21.png?raw=true" width="400" height="">
</p>

**Controllers**
<br>	
Sails permite la creacion de controles, para lo cual en la consola de comandos se ejecuta ``sails generate controller [nombre]``

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap22.png?raw=true" width="" height="">
</p>

Luego de ejecutar el comando se creara un archivo con un ejemplo de controladores. Este archivo se puede configurar, por ejemplo en este caso se crean tres metodos en el cual el servidor dara una respuesta.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap23.png?raw=true" width="300" height="">
</p>

Para ejecutar los controladores se ingresa en el navegador y se ubica ``localhost:1337/[nombre dado al controlador]/[nombre definido en el archivo]``

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap24.png?raw=true" width="300" height="">
</p>

Asi mismo se puede definir para que como resultado retorne un archivo jason.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap25.png?raw=true" width="200" height="">
</p>

De igual forma se pueden definir que se retornen respuestas en formato jason de acuerdo al metodo http que se define o sea necesario utilizar en la aplicacion. En este caso para comprobar se ubico con un if para que regrese un mensaje de acuerdo al metodo http.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap26.png?raw=true" width="200" height="">
</p>

Se comprueba utilizando postman, en el cual se procede a enviar con el metodo DELETE para tener como respuesta lo se especifico

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap27.png?raw=true" width="400" height="">
</p>

Se comprueba con el metodo POST y se obtiene la respuesta especificada.

<p align="center">
    <img src="https://github.com/megyltv/Tecnologias_Web_Js/blob/10-Sails-01/Informe/imagenes/cap28.png?raw=true" width="400" height="">
</p>

<a name="conrec"></a>
## Conclusiones y Recomendaciones
- Sails es un framework de Javascript el cual permite ir creando un proyecto web, pues define los elementos para definir archivos de logica, de estilos, las vistas, las rutas, entre otros. Ademas presenta una organizacion de la informacion en forma de archivos.
- Sails permite la generacion de controladores en los cuales se puede definir retonar un archivo en formato jason, asi como aplicar los metodos de http.
- Es necesario conocer la estructura que presenta Sails para que el desarrollador pueda ubicar los recursos y pueda utilizar eficientemente el framework que ofrece.
- Sails trabaja conjuntamente con Nodejs, pues es un paquete. Esto permite que pueda ejecutar aplicaciones en node y que pueda ser instalado facilmente en el equipo.


<br>
<a href="#cabecera">A la cabecera</a>
