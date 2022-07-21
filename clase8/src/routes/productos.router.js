import { Router } from "express";
import context from "../contexts/productos.context.js"

const utilidades = new context();
const router = Router();

//todos los productos
router.get('/', async(req, res)=>{
    let productos = await utilidades.getAll();
    return productos;
})

//producto por id
router.get('/:id', async(req,res)=>{
    let productos = await utilidades.getAll();
    let idFiltrado = req.query.id;
    if(idFiltrado > productos.length){
        res.send('no existe producto con ese ID')
    }else{
        let obtenerProducto = await utilidades.getById(idFiltrado);
        res.send(obtenerProducto);
    }
})

export default router;