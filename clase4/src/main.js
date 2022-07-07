const fs = require ('fs');

const path = "../files/products.json";
class contenedor{
    
    getAll = async()=>{
        try{
            if(fs.existsSync(path)){
            let leerArchivo = await fs.promises.readFile(path, 'utf-8');//busco el archivo
            let catalogo = JSON.parse(leerArchivo);//convertimos a objeto
            console.log(catalogo);
        }else{
            return [];
        }
        }catch(error){
            console.log(error);
        }
    }

    save = async(producto)=>{
        const productos = await this.getAll();
        if(productos.length === 0){//verifica si tiene id
            producto.id = 1,
            productos.push(producto);
            await fs.promises.writeFile(path, JSON.stringify(pets, null ,'\t'))
        }else{
            producto.id = productos[productos.length-1].id+1
            productos.push(producto);
            await fs.promises.writeFile(path, JSON.stringify(pets, null ,'\t'))
            console.log(`Nuevo producto añadido: ${producto.name}, id: ${producto.id}`)
        }

    }

    getById = async(id)=>{
        try{

            const productos = await this.getAll();
            const filtrar = productos.find((producto)=>{
                if(id = producto.id){
                    return producto;
                }else{
                    console.log('No hay coincidencias');
                }
            })

            console.log(producto);
        }catch(error){
            console.log(error);
        }
    }
}

const manejador = new contenedor()

let producto = {
    nombre: "Auriculares Inalambricos Logitech G733 Lightspeed RGB Lila",
    precio: 22.844,
    thumbnail:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24416_Auriculares_Inalambricos_Logitech_G733_Lightspeed_RGB_Lila__1dffcd73-grn.jpg"
}

manejador.save(producto);