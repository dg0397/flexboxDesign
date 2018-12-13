let images = [
    {src:"images/abstract-art-biology-978342.jpg",figcaption:"Photo by Saya Kimura from Pexels"},
    {src:"images/abstract-architecture-art-986735.jpg",figcaption:"Photo by Nick Demou from Pexels"},
    {src:"images/blurred-bokeh-bright-241683.jpg",figcaption:"Photo by Ravi Kant from Pexels"},
    {src:"images/art-blur-blurred-89732.jpg",figcaption:"Photo by Ester Sánchez Alfaro from Pexels"},
    {src:"images/abstract-ball-shaped-bright-745708.jpg",figcaption:"Photo from Pexels"},
    {src:"images/art-ball-shaped-circle-414860.jpg",figcaption:"Photo from Pexels"},
    {src:"images/dark-light-light-bulb-7882.jpg",figcaption:"Photo from Pexels"},
    {src:"images/illuminated-light-light-bulb-247789.jpg",figcaption:"Photo from Pexels"},
    {src:"images/abstract-art-blur-721200.jpg",figcaption:"Photo from Pexels"},
]

const img = document.querySelector('.hero img');
const description = document.querySelector('.hero figcaption');


function newImg(){
    let num = Math.floor(Math.random()*(images.length));
  
    img.src=images[num].src;
    description.innerHTML=images[num].figcaption;
}

newImg()