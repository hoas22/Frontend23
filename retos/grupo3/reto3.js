
const moviles = [
    {
        marca: "LG",
        modelo: "MCL3",
        tamaño: 'mediano',
        color: 'negro'
        
    },
    {
        marca: "SAMSUNG",
        modelo: "MCHF5",
        tamaño: 'mediano',
        color: 'plateado'
        
    },
    {
        marca: "REDMI",
        modelo: "MJBDV",
        tamaño: 'mediano',
        color: 'blanco'
        
    }];

for (let i = 0; i < moviles.length; i++) {
    console.log("Indice: " + i)
    console.log("Marca: " + moviles[i].marca)
    console.log("Modelo: " + moviles[i].modelo)
}

console.log('*************');
const autos = [
    {
        marca: "TOYOTA",
        modelo: "HFK8",
        camaras: 3
    },
    {
        marca: "AUDI",
        modelo: "HFK8",
        camaras: 3
    },
    {
        marca: "CHEVROLET",
        modelo: "HFK8",
        camaras: 3
    }
]

autos.map((autos,i) => {
    console.log("Indice: ",i)
    console.log("Marca: ",autos.marca)
})




