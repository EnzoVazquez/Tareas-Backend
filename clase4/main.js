const fs = require ('fs');

class contenedor{
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }

    
    getAll = async()=>{
        try{
            let leerArchivo = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
            let catalogo = JSON.parse(leerArchivo);//convertimos a objeto
            console.log(catalogo);
        }catch(error){
            console.log(error);
        }
    }

    save = async(producto)=>{
        const productos = await this.getAll();
        let id
        if(producto.includes(id)){//verifica si tiene id
            console.log('este producto ya existe')
        }else{
            producto.id = productos.length++;
            
            let productoNuevo = {
                nombre: producto.nombre,
                precio: producto.precio,
                thumbnail : producto.thumbnail,
                id : producto.id
            }
            productos.push(productoNuevo);

            let pasoJson = JSON.stringify(productos)//convierte en JSON
            await fs.promises.writeFile(this.nombreArchivo, aJson);
            console.log('todo salio como se esperaba')
        }

    }
}

let rutaProductos = new contenedor('./products.json')
rutaProductos.save("Auriculares Inalambricos Logitech G733 Lightspeed RGB Lila", 22.844, 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24416_Auriculares_Inalambricos_Logitech_G733_Lightspeed_RGB_Lila__1dffcd73-grn.jpg' );