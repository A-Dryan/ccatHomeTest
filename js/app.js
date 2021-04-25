
    document.querySelector(".container-portada").addEventListener("click",changeImg);

function changeImg(){
    const arrayImg= [
        "http://www.wedoitmarketing.com/wp-content/uploads/2015/10/1-3.jpg",
        "https://covertalavera.com/wp-content/uploads/2021/02/office-381228_1920.jpg",
        "https://www.iberopuebla.mx/sites/default/files/slidp/img-bg/00_img_d._inteligencia_empresarial_copy.jpg"
    ];
    portada = document.querySelector(".container-portada");
    portada.style.backgroundImage=`url(${arrayImg[1]})`;
};
