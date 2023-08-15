const imagenes=["https://www.educaciontrespuntocero.com/cursos/wp-content/uploads/2021/07/programacion-de-videojuegos-978x652.jpg.webp",
"https://cdn.colombia.com/sdi/2022/12/09/colombia-es-el-segundo-pais-con-mayor-consumo-de-videojuegos-en-america-latina-1096929.webp",
"https://www.muycomputer.com/wp-content/uploads/2022/07/Mercado-de-los-videojuegos-decrece-2022-e1657268244413.jpg",
"https://s3.amazonaws.com/businessinsider.mx/wp-content/uploads/2021/12/08164547/Comparacio%CC%81n-de-consolas-1280x620.jpg",
"https://www.eleconomista.com.mx/__export/1581119523386/sites/eleconomista/img/2020/02/07/que-son-esports.jpg_554688468.jpg"
];

function asignarImagenes(){
    const random=Math.floor(Math.random() * imagenes.length)
    return imagenes[random];
}

module.exports = {
    asignarImagenes
}