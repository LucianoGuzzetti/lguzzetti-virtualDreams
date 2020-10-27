### lguzzetti-virtualDreams

------------------

#### Ejercicio 2

##### Consignas

1. ¿Qué es un servidor HTTP?
2. ¿Qué son los verbos HTTP? Mencionar los más conocidos
3. ¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers?
4. ¿Qué es un queryString? (En una url)
5. ¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
6. ¿Cómo se envía data en un Get y cómo en un POST?
7. ¿Qué verbo http utiliza el navegador cuando accedemos a una página?
8. Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
9. Explicar brevemente el estandar SOAP
10. Explicar brevemente el estandar REST Full
11. ¿Qué son los headers en un request? ¿Para qué se utilizar el key Content-type en un header?

##### Respuestas

1. Un servidor HTTP es un servidor que almacena los archivos de una página web. A través del protocolo HTTP el servidor se comunica con el cliente. Cuando el cliente realiza una solicitud (request), el servidor procesa y envia una respuesta (response) de acuerdo a esta solicitud.
   

2. Los verbos HTTP son un conjunto de métodos de petición para indicar la acción que el cliente solicita cuando se comunica con el servidor. Los más conocidos son:

   * GET (extaer información del servidor)
   * POST (enviar información al servidor)
   * PUT (reemplazar la información actual de un recurso)
   * DELETE (borrar un recurso previamente solicitado)
     

3. Request es el pedido por parte del cliente en una comunicacion HTTP y response es la respuesta por parte del servidor web. Los headers son los parámetros que se envian en una request o response HTTP tanto al cliente como al servidor para proporcionar informacion adicional sobre la solicitud en curso.
   

4. Una queryString dentro de una URL es una cadena de caracteres que se utiliza para especificar valores de parámetros al momento de realizar una solicitud.
   

5. El responseCode es el indicador del estado de respuesta hacia el cliente por parte del servidor luego de una solicitud previa. Indica si la solicitud se completó satisfactoriamente o no. Tiene forma de código y significan lo siguiente:
   

   * Respuestas informativas (100-199)
   * Respuestas satisfactorias (200-299)
   * Redirecciones (300-399)
   * Errores de los clientes (400-499)
   * Errores de los servidores (500-599)
     

6. En un GET la infomación se envía a través de la URL. Esto ocasiona que la visibilidad de la información sea alta y que al ser parte de la URL la información quede almacenada en el historial de búsqueda. Además la información que se envía es limitada debido a que el largo de la URL también lo es.

   En un POST, en cambio, la información que se envía no es visible en la URL y también es ilimitada en cuanto a cantidad se refiere. Además al no ser parte de la URL no queda guardada en el historial.

   

7. Cuando accedemos a una página web, el navegador envía una solicitud al servidor donde se encuentra dicha página utilizando el verbo HTTP GET para extraer del servidor la informacion necesaria para mostrarnos la página web que solicitamos abrir.
   

8. Las estructuras de datos JSON (JavaScript Object Notation) y XML (Extensible Markup Language) son formatos de texto utilizados para el intercambio de información de manera estructurada.

   JSON

   ```
   {
   	"cliente": {
   		"nombre": "Luciano",
   		"apellido": "Guzzetti",
   		"dni": 40904268,
   	}
   }
   ```

   XML

   ```
   <cliente>
   	<nombre>Luciano</nombre>
   	<apellido>Guzzetti</apellido>
   	<dni>40904268</dni>
   </cliente>
   ```

   

9. SOAP (Simple Object Access Protocol) es un protocolo estandar que define la comunicación entre objetos a traves de un intercambio de datos en formato XML. Una ventaja de SOAP es que permite la comunicación entre distintos lenguajes de programación dentro del desarrollo de aplicaciones.
   

10. REST (REpresentational State Transfer) es un estilo de arquitectura de software que facilita el intercambio y manejo de datos a traves de servicios web. Para esta manipulacion de datos utiliza HTTP. Todo servicio web que siga el estilo de arquitectura REST es llamado RESTful web service.
    

11. Como se dijo en el punto 3, los headers son los parámetros que se envian en una request o response HTTP tanto al cliente como al servidor para proporcionar informacion adicional sobre la solicitud en curso, como por ejemplo información acerca de la página solicitada. El Content-type en un header se utiliza para indicar el tipo de dato que se esta enviando.

    

#### Ejercicio 3

GET

![](GET1.png)

POST

![](POST.png)

GET

![](GET2.png)

Se obsverva que se actualizaron los datos, mostrando los datos enviados en el POST.

#### Ejercicio 4

```
$ npm install  # instala las dependencias

$ node mostrarPersonas.js
```

#### Ejercicios 5 y 6

```
$ node main.js  # levanta el servidor
```

