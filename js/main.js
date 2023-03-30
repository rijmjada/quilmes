
const changeCircleColor = (color)=> {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

const imgSlider = (img, color )=> {

    document.querySelector('.latita').src = img;
    const circle = document.querySelector('.circle');

    circle.style.background = color;
}