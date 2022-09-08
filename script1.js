const productos = [
    {id: 1, marca:  "fender", modelo: "stratocaster", precio: 2100},
    {id: 2, marca: "fender", modelo: "telecaster", precio: 1700},
    {id: 3, marca: "fender", modelo: "jaguar", precio: 1500, },
    {id: 4, marca: "fender", modelo: "mustang", precio: 1300,},
    {id: 5, marca: "gibson", modelo: "les paul", precio: 2500},
    {id: 6, marca: "gibson", modelo: "sg", precio: 1800},
    {id: 7, marca: "gibson", modelo: "335", precio: 4000},
    {id: 8, marca: "gibson", modelo: "explorer", precio: 2000},
];


function Producto(id,marca,modelo,precio) {
this.id = id;
this.marca = marca;
this.modelo = modelo;
this.precio = precio;
};


const nuevoProducto = new Producto(9,"ibanez", "lespaul", 2500)

function cargarProducto(arr,valor){
    arr.push(valor)
}
cargarProducto(productos, nuevoProducto);

function filtrarProducto(arr,filtro) {
    const filtrado = arr.filter((el) => {
        return el.marca.includes(filtro);
    });
    return filtrado;
}


let ingreso = prompt("Que marca de Guitarra esta buscando? ");
const resultado = filtrarProducto(productos, ingreso.toLocaleLowerCase());
console.log(resultado);