const marca = document.querySelector("#marca"),
  modelo = document.querySelector("#modelo"),
  id = document.querySelector("#id"),
  precio = document.querySelector("#precio"),
  img = document.querySelector("#img"),
  search = document.querySelector("#search"),
  tbody = document.querySelector("#table-body"),
  btnGuardar = document.querySelector("#btnGuardar");

const radios = document.querySelectorAll('input[type="radio"]');

const inventario = [
    {id: 1, marca: "fender", modelo: "stratocaster", precio: 2100, img: "./img/stratocaster.jpg"},
    {id: 2, marca: "fender", modelo: "telecaster", precio: 1700, img: "./img/telecaster.jpg"},
    {id: 3, marca: "fender", modelo: "jaguar", precio: 1500, img:"./img/jaguar.jpg" },
    {id: 4, marca: "fender", modelo: "mustang", precio: 1300, img:"./img/mustang.jpg"},
    {id: 5, marca: "gibson", modelo: "les paul", precio: 2500, img: "./img/lespaul.jpg"},
    {id: 6, marca: "gibson", modelo: "sg", precio: 1800, img:"./img/sg.jpg"},
    {id: 7, marca: "gibson", modelo: "335", precio: 4000, img:"./img/335.jpg"},
    {id: 8, marca: "gibson", modelo: "explorer", precio: 2000, img:"./img/explorer.jpg"},
];

//Constructor
function guitarra(marca, modelo, id, precio, img) {
  this.marca = marca;
  this.modelo = modelo;
  this.id = id;
  this.precio = parseFloat(precio);
  this.precio = precio;
  this.img = img;
}

//Cargar al array inventario
function cargarInventario(arr, obj) {
  return arr.push(obj);
}

//Funciones de filtrado
function filtarPorMarca(arr, filtro) {
  return arr.filter((el) => {
    return el.marca.includes(filtro);
  });
}


//funcion genérica
function filtrar(arr, filtro, param) {
  return arr.filter((el) => {
    return el[`${param}`].includes(filtro);
  });
}

//Manipular el DOM
function crearHtml(arr) {
  let html = "";
  for (const item of arr) {
    html = `<tr>
                <td>${item.marca}</td>
                <td>${item.modelo}</td>
                <td>${item.id}</td>
                <td>${item.precio}</td>
                <td><img src="${item.img}"/></td>
            </tr>`;
    tbody.innerHTML += html;
  }
}
//llamado a la función
crearHtml(inventario);

//Listeners
btnGuardar.addEventListener("click", () => {
  const nuevaGuitarra = new guitarra(
    marca.value,
    modelo.value,
    id.value,
    precio.value,
    img.value
  );
  //console.log(nuevaGuitarra);

  cargarInventario(inventario, nuevaGuitarra);
  //resetar el html de la tabla
  tbody.innerHTML = "";
  crearHtml(inventario);
});

search.addEventListener("input", () => {
  let nuevoFiltro = filtarPorMarca(inventario, search.value);
  console.log(nuevoFiltro);
  tbody.innerHTML = "";
  crearHtml(nuevoFiltro);
});
//Agrega un evento change a los radio buttons
for (const radio of radios) {
  radio.addEventListener('change',()=>{
    //Verificamos si el radio button es checked
    if(radio.checked){
      search.addEventListener("input", () => {
        let nuevoFiltro = filtrar(inventario, search.value, radio.value);
        console.log(nuevoFiltro);
        //reiniciamos el contenedor de la tabla
        tbody.innerHTML = "";
        //pintamos el DOM con el nuevo libro
        crearHtml(nuevoFiltro);
      });
    }
  })
}