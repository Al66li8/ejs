//librerias de express
const express = require  ('express');
const app = express();

//libreria morgan
const morgan = require  ('morgan');

//libreria cors
const cors = require ('cors');

//ejs
const ejs =require  ('ejs');


//configuracion inicial del servidor en el puerto 4000
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);


//ruta get


//aqui va el codigo del programa 
app.listen(app.get('port'), () => {
    console.log(`http://localhost:4000`);
});