const valorMarca = document.getElementById("marca");
const valorColor = document.getElementById("color");

const resultado = document.getElementById("resultado");
const arrayCamiones = [

    {
        id: 1,
        marca: "Iveco",
        color: "gris",
        precio: 1000,
        imagen: "./assets/img/Iveco_gris.jpg"
    },

    {
        id: 2,
        marca: "Iveco",
        color: "azul",
        precio: 2500,
        imagen: "./assets/img/Iveco_azul.jpg"
    },

    {
        id: 3,
        marca: "Ford",
        color: "blanco",
        precio: 2000,
        imagen: "./assets/img/Ford_blanco.jpg"
    },


    {
        id: 4,
        marca: "Ford",
        color: "rojo",
        precio: 3500,
        imagen: "./assets/img/Ford_rojo.jpg"
    },

    {
        id: 5,
        marca: "Scania",
        color: "amarillo",
        precio: 3000,
        imagen: "./assets/img/Scania_amarillo.jpg"
    },

    {
        id: 6,
        marca: "Scania",
        color: "azul",
        precio: 4500,
        imagen: "./assets/img/Scania_azul.jpg"
    },

    {
        id: 7,
        marca: "Scania",
        color: "blanco",
        precio: 4000,
        imagen: "./assets/img/Scania_blanco.jpg"
    },

    {
        id: 8,
        marca: "JMC",
        color: "blanco",
        precio: 5500,
        imagen: "./assets/img/JMC_blanco.jpg"
    },

    {
        id: 9,
        marca: "Mercedes Benz",
        color: "blanco",
        precio: 5000,
        imagen: "./assets/img/Mercedes_benz_blanco.jpg"
    },

    {
        id: 10,
        marca: "Mercedes Benz",
        color: "azul",
        precio: 6500,
        imagen: "./assets/img/Mecedes_Benz_azul.jpg"
    },

    {
        id: 11,
        marca: "Mercedes Benz",
        color: "negro",
        precio: 6000,
        imagen: "./assets/img/Mercedes_benz_negro.jpg"
    },

    {
        id: 12,
        marca: "Mercedes Benz",
        color: "rojo",
        precio: 7500,
        imagen: "./assets/img/Mercedes_benz_rojo.jpg"
    },

    {
        id: 13,
        marca: "Volvo",
        color: "azul",
        precio: 7000,
        imagen: "./assets/img/Volvo_azul.jpg"
    },

    {
        id: 14,
        marca: "Volvo",
        color: "blanco",
        precio: 8500,
        imagen: "./assets/img/Volvo_blanco.jpg"
    }
];

const filtrarColor = document.getElementById("filtrarColor");
const filtrarMarca = document.getElementById("filtrarMarca");
const filtrarAmbos = document.getElementById("filtrarAmbos");

//Arreglo de pizzas con la informacion completa de todas las pizzas, guardada en LocalStorage.
// // let camionesStorage = JSON.parse(localStorage.getItem("ArrayCamiones"));

//Funcion SaveToLocalStorage(). Guarda el arreglo de camiones en el localStorage.
const SaveToLocalStorage = (ArrayCamiones) => {
    localStorage.setItem("ArrayCamiones", JSON.stringify(ArrayCamiones));
    camionesStorage = JSON.parse(localStorage.getItem("ArrayCamiones"));
}

const filtrarPorMarca = () => {
    resultado.innerHTML = "";
    let marcaFiltrada = valorMarca.options[valorMarca.selectedIndex].value;
    let listaFiltradaMarca = camionesStorage.slice();
 
    if (marcaFiltrada.toLowerCase() !== 'todas') {
        listaFiltradaMarca = camionesStorage.filter((camion) => camion.marca.toLowerCase() === marcaFiltrada.toLowerCase());
    } 

    if (listaFiltradaMarca.length > 0) {
        listaFiltradaMarca.map((camion) => {
            resultado.innerHTML +=
                `<div class="card-camion">
           <div class="imagen-camion">
             <img src=${camion.imagen} alt="Imagen camion"/>
           </div>
           <div class="datos-camion">
             <p class="nombre-camion">Marca: ${camion.marca}</p>
             <p class="color-camion">Color: ${camion.color}</p>
             <div class="precio-camion">
               <span>Precio $.: ${camion.precio}</span>
             </div>
            </div>
         </div>`;
        })
    }
 };
 
 const filtrarPorColor = () => {
     resultado.innerHTML = "";
         
     let colorFiltrado = valorColor.options[valorColor.selectedIndex].value;
     let listaFiltradaColor = camionesStorage.slice();

     if (colorFiltrado.toLowerCase() !== 'todos') {
        listaFiltradaColor = camionesStorage.filter((camion) => camion.color.toLowerCase() === colorFiltrado.toLowerCase());
     } 

     if (listaFiltradaColor.length > 0) {
         listaFiltradaColor.map((camion) => {
             resultado.innerHTML +=
                 `<div class="card-camion">
           <div class="imagen-camion">
             <img src=${camion.imagen} alt="Imagen camion"/>
           </div>
           <div class="datos-camion">
             <p class="nombre-camion">Marca: ${camion.marca}</p>
             <p class="color-camion">Color: ${camion.color}</p>
             <div class="precio-camion">
               <span>Precio $.: ${camion.precio}</span>
             </div>
            </div>
         </div>`;
         })
     }
 };
 
 const filtrarAmbosDos = () => {
     resultado.innerHTML = "";
         
     let colorFiltrado = valorColor.options[valorColor.selectedIndex].value;
     let marcaFiltrada = valorMarca.options[valorMarca.selectedIndex].value;
     let listaFiltradaAmbos = camionesStorage.slice();

     if ((colorFiltrado.toLowerCase() !== 'todos') && (colorFiltrado.trim() !== '') && 
         (marcaFiltrada.toLowerCase() !== 'todas') && (marcaFiltrada.trim() !== '')) {
        listaFiltradaAmbos = camionesStorage.filter((camion) => camion.color.toLowerCase() === colorFiltrado.toLowerCase() && camion.marca.toLowerCase() === marcaFiltrada.toLowerCase());
    } else if ((marcaFiltrada.toLowerCase() !== 'todas') && (marcaFiltrada.trim() !== '')) {
        listaFiltradaAmbos = camionesStorage.filter((camion) => camion.marca.toLowerCase() === marcaFiltrada.toLowerCase()); 
    } else if ((colorFiltrado.toLowerCase() !== 'todos') && (colorFiltrado.trim() !== '')) {
        listaFiltradaAmbos = camionesStorage.filter((camion) => camion.color.toLowerCase() === colorFiltrado.toLowerCase());
    }   
     
     if (listaFiltradaAmbos.length > 0) {
       listaFiltradaAmbos.map((camion) => {
        resultado.innerHTML +=  
        `<div class="card-camion">
           <div class="imagen-camion">
             <img src=${camion.imagen} alt="Imagen camion"/>
           </div>
           <div class="datos-camion">
             <p class="nombre-camion">Marca: ${camion.marca}</p>
             <p class="color-camion">Color: ${camion.color}</p>
             <div class="precio-camion">
               <span>Precio $.: ${camion.precio}</span>
             </div>
            </div>
         </div>`;  
       })
     } else {
         window.alert('No hay camiones con los datos especificados !!!');
     }
 }

const init = () => {

SaveToLocalStorage(arrayCamiones);

filtrarColor.addEventListener("click", (e) => {
    e.preventDefault();
    filtrarPorColor();
})

filtrarMarca.addEventListener("click", (e) => {
    e.preventDefault();
    filtrarPorMarca();
})

filtrarAmbos.addEventListener("click", (e) => {
    e.preventDefault();
    filtrarAmbosDos();
})

 camionesStorage.map((camion) => {
    resultado.innerHTML +=  
    `<div class="card-camion">
       <div class="imagen-camion">
         <img src=${camion.imagen} alt="Imagen camion"/>
       </div>
       <div class="datos-camion">
         <p class="nombre-camion">Marca: ${camion.marca}</p>
         <p class="color-camion">Color: ${camion.color}</p>
         <div class="precio-camion">
           <span>Precio $.: ${camion.precio}</span>
         </div>
        </div>
     </div>`;  
})
};

init();



