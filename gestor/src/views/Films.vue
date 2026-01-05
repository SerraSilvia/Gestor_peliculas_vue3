<script setup>
 import { ref, provide  } from 'vue';
 import FilmDetail from './FilmDetail.vue';

const filmsArray = ref( [
  [
    {
      id: 1,
      titulo: 'El viaje de Chihiro',
      año: 2001,
      genero: ['Fantasía', 'Aventura', 'Drama'],
      imagen: 'https://es.web.img3.acsta.net/c_310_420/pictures/21/05/11/13/47/5979708.jpg',
      sinopsis:
        'Chihiro, una niña de diez años, queda atrapada en un mundo mágico gobernado por dioses y espíritus, donde deberá trabajar en un balneario para poder salvar a sus padres y regresar al mundo humano.',
    },
    {
      id: 2,
      titulo: 'Bubble',
      año: 2022,
      genero: ['Ciencia ficción', 'Romance', 'Animación'],
      imagen: 'https://image.tmdb.org/t/p/w200/wjgwIZyEgtgy9nIdz6C5uJNel2X.jpg',
      sinopsis:
        'En un Tokio aislado por una misteriosa burbuja que desafía la gravedad, un joven con habilidades especiales conoce a una chica enigmática que cambiará el destino de ambos.',
    },
    {
      id: 3,
      titulo: 'Your Name',
      año: 2016,
      genero: ['Romance', 'Fantasía', 'Drama'],
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Bow1CVS7YMeGg9CtO69uJkHDgaXwpYrb9w&s',
      sinopsis:
        'Dos adolescentes desconocidos comienzan a intercambiar sus cuerpos de manera inexplicable, creando un profundo vínculo que desafía el tiempo y el espacio.',
    },
    {
      id: 4,
      titulo: 'El castillo ambulante',
      año: 2004,
      genero: ['Fantasía', 'Romance', 'Aventura'],
      imagen: 'https://example.com/images/el-castillo-ambulante.jpg',
      sinopsis:
        'Sophie, una joven convertida en anciana por una maldición, encuentra refugio en el castillo mágico del hechicero Howl mientras intenta recuperar su verdadera forma.',
    },
    {
      id: 5,
      titulo: 'Suzume',
      año: 2022,
      genero: ['Fantasía', 'Aventura', 'Drama'],
      imagen: 'https://example.com/images/suzume.jpg',
      sinopsis:
        'Suzume emprende un viaje por Japón para cerrar puertas místicas que provocan desastres naturales, enfrentándose a pérdidas del pasado y a su propio crecimiento personal.',
    },
    {
      id: 6,
      titulo: 'El niño y la bestia',
      año: 2015,
      genero: ['Fantasía', 'Aventura', 'Acción'],
      imagen: 'https://example.com/images/el-nino-y-la-bestia.jpg',
      sinopsis:
        'Un niño solitario cruza a un mundo de bestias y se convierte en aprendiz de un guerrero brutal, forjando una relación que cambiará a ambos.',
    },
    {
      id: 7,
      titulo: 'La chica que saltaba a través del tiempo',
      año: 2006,
      genero: ['Ciencia ficción', 'Romance', 'Drama'],
      imagen: 'https://example.com/images/la-chica-que-saltaba-en-el-tiempo.jpg',
      sinopsis:
        'Makoto descubre que puede viajar al pasado y usa ese poder para resolver pequeños problemas cotidianos, sin imaginar las consecuencias emocionales de alterar el tiempo.',
    },
    {
      id: 8,
      titulo: 'Weathering With You',
      año: 2019,
      genero: ['Romance', 'Fantasía', 'Drama'],
      imagen: 'https://example.com/images/weathering-with-you.jpg',
      sinopsis:
        'Un joven que huye a Tokio conoce a una chica capaz de controlar el clima, y juntos desafían las normas de la naturaleza por amor.',
    },
    {
      id: 9,
      titulo: 'El jardín de las palabras',
      año: 2013,
      genero: ['Romance', 'Drama'],
      imagen: 'https://example.com/images/el-jardin-de-las-palabras.jpg',
      sinopsis:
        'Un estudiante y una mujer adulta crean un vínculo especial al encontrarse en un jardín durante los días de lluvia, compartiendo silencios y emociones profundas.',
    },
    {
      id: 10,
      titulo: 'A Silent Voice',
      año: 2016,
      genero: ['Drama', 'Romance'],
      imagen: 'https://example.com/images/a-silent-voice.jpg',
      sinopsis:
        'Un joven que acosó a una compañera sorda en su infancia intenta redimirse años después, enfrentándose a la culpa, el perdón y la empatía.',
    },
  ],
]);
provide("listaFilms", filmsArray);

const elementoSeleccionado = ref(null);
function cogerSeleccionado(film) {
  elementoSeleccionado.value = film;
}
</script>

<template>
  <h2>Top Películas Anime</h2>
  <FilmDetail v-for="film in filmsArray" :key="film.id" :film="film" @selected="cogerSeleccionado" />
   <div v-if="elementoSeleccionado"></div> 
</template>

<style scoped>
    h2 {
    text-align: center;
    margin-bottom: 20px;
    }
</style>