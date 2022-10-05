# <h1 style="text-align: center;">SPA VANILLA JS YUGIOH! - Curso UTN</h1>
![Homero presentando la pajarera](https://pbs.twimg.com/media/EETy1qCU0AA2Qtj.png)

## La App
La app consiste mostrar imágenes y detalles de las cartas del popular juego Yugioh. Adicionalmente, el **USUARIO** se podrá registrar/loguear para realizar la búsqueda por nombre de una carta específica.

## Descripcion
La aplicación consiste en una Single Aplication Page hecha puramente con JavaScript Vanilla (**FrontEnd**) que impacta contra un Api desarrollada en express (**BackEnd**), la cual se encuentra a la escucha de peticiones para encargarse de leer y guardar registros de una Base de Datos (**MySQL**) según la petición que se le realice.

## Tecnologias
* **HTML5**
* **CSS**
* **JavaScript**
* **Express**

## ¿Como Empezar?

*  ~~~
   gh repo clone AguSS8/Proyecto-SPA-UTN
   ~~~
   O descargar el repositorio en un archivo.zip.

* Abrir la carpeta del proyecto en nuestro IDE.
* Abrir la terminal y dirigirse a la carpeta **api** (utilizar el siguiente comando)
  ~~~
  cd api
  ~~~
  Instalar las dependencias necesarias
  ~~~
  npm i 
  ~~~
* Levantar la BD **bddeck.sql**
* Ejecutar el server con el siguiente comando
  ~~~
  npm start run
  ~~~
* abrir el archivo **index.html** que se encuentra dentro de la carpeta **src** y ejecutarlo con " **Live Server** ".

## Configurar Variables de entorno
Es necesario crear un directorio llamado **env** dentro de la carpeta **api** y en ella crear un nuevo archivo con extensión **.env**
con el siguiente contenido:
~~~
PORT = 3000

DB_HOST = localhost
DB_USER = root
DB_PASS = 
DB_DATABASE = bddeck

//Definimos los datos para JWT
JWT_SECRETO = super_secret

//tiempo en el que expira el token
JWT_TIEMPO_EXPIRA = 7d

//tiempo en el que expira la cookie
JWT_COOKIE_EXPIRES = 90
~~~