
const changeCircleColor = (color) => {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

const imgSlider = (img, color, tipo) => {

    document.querySelector('.latita').src = img;

    const circle = document.querySelector('.circle');
    circle.style.background = color;

    const titulo = document.querySelector('.titulo');
    const subtitulo = document.querySelector('.subtitulo');
    const parrafo = document.querySelector('.parrafo');

    switch (tipo) {

        case 'clasica':
            titulo.innerHTML = 'Clásica';
            subtitulo.innerHTML = 'Cerveza dorada y equlibrada';
            parrafo.innerHTML = 'La cerveza de los argentinos por excelencia. Es una típica cerveza lager perfectamente equilibrada, transparente dorada, buen nivel de espuma y sabor. Para hacerla utilizamos sólo ingredientes naturales que crecen en los campos de Argentina';

            break;

        case 'stout':
            titulo.innerHTML = 'Stout';
            subtitulo.innerHTML = 'Cerveza dulce y de espuma cremosa';
            parrafo.innerHTML = 'Cerveza negra, de cuerpo y espuma cremosa. De suave dulzor y con notas de chocolate y café provenientes del golpe de fuego que recibe la malta al momento de ser tostadas.';

            break;

        case 'bock':
            titulo.innerHTML = 'Bock';
            subtitulo.innerHTML = 'Cerveza de cuerpo robusto';
            parrafo.innerHTML = 'Intenso   sabor    tostado y acaramelado. Su pronunciado amargor es equilibrado por el dulzor de las tres variedades de malta con las que se elabora.';

            break;

        case 'doblemalta':
            titulo.innerHTML = 'Doble Malta';
            subtitulo.innerHTML = 'Notas de cereal, leve dulzor y amargor';
            parrafo.innerHTML = 'El suelo de nuestra querida Argentina esta vez nos regala dos tipos de maltas, Pilsen y Carapils, que le dan vida a esta Quilmes Doble Malta.Es nuestro orgullo. Disfrutala el doble.';

            break;

        case '00':
            titulo.innerHTML = 'Cero Alcohol';
            subtitulo.innerHTML = 'Fresca y de cuerpo liviano.';
            parrafo.innerHTML = '<br>Así es la Quilmes 0,0% una cerveza rubia, elaborada con ingredientes naturales y sin alcohol.';

            break;

        case 'red':
            titulo.innerHTML = 'Red Lager';
            subtitulo.innerHTML = 'Cerveza roja y acaramelada';
            parrafo.innerHTML = 'Cerveza de cuerpo medio, color cobrizo y acaramelada. Esta variedad debe sus características al particular proceso de caramelización de las maltas con las que se elabora.';

            break;

    }

}

