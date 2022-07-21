let update = document.getElementById('actualizar');
const updateSubmit = (e, form, route) =>{
    e.preventDefault();
    let newInfo = new FormData(form);
    fetch(route,{
        method:"PUT",
        body:newInfo
    })
}

update.addEventListener('submit',(e)=>updateSubmit(e,e.target,'/api/productos'));

let add = document.getElementById('agregar');
const handleSubmit = (e, form, route) =>{
    e.preventDefault();
    let newInfo = new FormData(form);
    fetch(route,{
        method:"POST",
        body: newInfo
    })
}

add.addEventListener('submit',(e)=>handleSubmit(e,e.target, '/api/productos'));

let borrar = document.getElementById('delete');
const deleteSubmit = (e, form, route)=>{
    e.preventDefault();
    let newInfo = new FormData(form);
    fetch(route,{
        method:"DELETE",
        body: newInfo
    })
}

borrar.addEventListener('submit',(e)=>deleteSubmit(e, e.target, '/api/productos'))

