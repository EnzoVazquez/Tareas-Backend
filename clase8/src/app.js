import express from 'express';
import __dirname from './utils.js'
import router from './routes/productos.router.js';

const app = express();

const server = app.listen(8080,()=>{
    console.log('escuchando al puerrto 8080')
});

app.use(express.json());//linea para que el servidor lea Json
app.use(express.urlencoded({ extended:true }))//linea para enviar informacion compleja desde la URL
app.use(express.static(__dirname +'/public'))//carpeta que tiene archivos estaticos, html, css, etc
app.use(__dirname + '/api/productos', router);

