<script setup>
import { ref, provide } from 'vue'
import SerieDetail from './SerieDetail.vue'

const seriesArray = ref([
  [
    {
      id: 1,
      titulo: 'Frieren: Beyond Journey’s End',
      año: 2023,
      genero: ['Fantasía', 'Drama', 'Aventura'],
      imagen: 'https://image.tmdb.org/t/p/w300/rM7v1fZpP0N9qG5L9vFfR4t2N1E.jpg',
      sinopsis:
        'Tras derrotar al Rey Demonio, la elfa maga Frieren emprende un viaje introspectivo para comprender el paso del tiempo, la mortalidad humana y el valor de los recuerdos.',
    },
    {
      id: 2,
      titulo: 'Cyberpunk: Edgerunners',
      año: 2022,
      genero: ['Ciencia ficción', 'Acción', 'Drama'],
      imagen: 'https://image.tmdb.org/t/p/w300/7jSWOc6jWSw5hZ78HB8Hw3pJxuk.jpg',
      sinopsis:
        'En una ciudad futurista obsesionada con la tecnología y el poder, un joven intenta sobrevivir convirtiéndose en un mercenario fuera de la ley conocido como edgerunner.',
    },
    {
      id: 3,
      titulo: 'DOTA: Dragon’s Blood',
      año: 2021,
      genero: ['Fantasía', 'Acción', 'Aventura'],
      imagen: 'https://image.tmdb.org/t/p/w300/fY2H5xZg8pRr5nZ8Rz8s8Y0V1nT.jpg',
      sinopsis:
        'Un Caballero Dragón se ve envuelto en eventos épicos tras conocer a una poderosa hechicera y a un antiguo dragón, alterando el destino del mundo.',
    },
    {
      id: 4,
      titulo: 'The Legend of Vox Machina',
      año: 2022,
      genero: ['Fantasía', 'Aventura', 'Acción'],
      imagen: 'https://image.tmdb.org/t/p/w300/4f8fJ8xR5p3k2E0V7G0m9B5kP9H.jpg',
      sinopsis:
        'Un grupo de mercenarios desadaptados se une para proteger el reino de Exandria, enfrentándose a amenazas oscuras mientras forjan lazos de amistad.',
    },
    {
      id: 5,
      titulo: 'Attack on Titan',
      año: 2013,
      genero: ['Acción', 'Drama', 'Fantasía oscura'],
      imagen: 'https://image.tmdb.org/t/p/w300/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg',
      sinopsis:
        'La humanidad vive tras enormes murallas para protegerse de los titanes, criaturas gigantes que amenazan con extinguir a la raza humana.',
    },
    {
      id: 6,
      titulo: 'Arcane',
      año: 2021,
      genero: ['Acción', 'Drama', 'Fantasía'],
      imagen: 'https://image.tmdb.org/t/p/w300/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg',
      sinopsis:
        'Ambientada en el universo de League of Legends, la serie explora el conflicto entre dos ciudades y el origen de heroínas y villanas.',
    },
    {
      id: 7,
      titulo: 'Demon Slayer',
      año: 2019,
      genero: ['Acción', 'Fantasía', 'Drama'],
      imagen: 'https://image.tmdb.org/t/p/w300/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg',
      sinopsis:
        'Tanjiro se convierte en cazador de demonios tras la masacre de su familia y la transformación de su hermana en una criatura demoníaca.',
    },
    {
      id: 8,
      titulo: 'Fullmetal Alchemist: Brotherhood',
      año: 2009,
      genero: ['Aventura', 'Fantasía', 'Drama'],
      imagen: 'https://image.tmdb.org/t/p/w300/5ZFUEOULaVml7pQuXxhp6jFQ4wB.jpg',
      sinopsis:
        'Dos hermanos alquimistas buscan la Piedra Filosofal para recuperar sus cuerpos tras un fallido ritual prohibido.',
    },
    {
      id: 9,
      titulo: 'Made in Abyss',
      año: 2017,
      genero: ['Fantasía', 'Aventura', 'Drama'],
      imagen: 'https://image.tmdb.org/t/p/w300/7Z6pGZ6f7K6Bq0F6J9b0VwP5yXx.jpg',
      sinopsis:
        'Una niña y un misterioso robot se adentran en un abismo lleno de criaturas y secretos mortales en busca de respuestas.',
    },
    {
      id: 10,
      titulo: 'Vinland Saga',
      año: 2019,
      genero: ['Acción', 'Drama', 'Histórico'],
      imagen: 'https://image.tmdb.org/t/p/w300/6h9fV5Z4KkGZC6GZ2V0Z9Jm5Q7s.jpg',
      sinopsis:
        'Un joven vikingo busca venganza en un mundo brutal marcado por la guerra, el honor y la supervivencia.',
    },
  ],
])
provide('listaSeries', seriesArray)

const pendientesVer = ref([]);
provide('pendientesVer', pendientesVer)

</script>

<template>
  <main class="layout">
    <section class="contenido">
    <h2>Top Series Anime</h2>

    <div class="films-grid">
      <SerieDetail
        v-for="serie in seriesArray[0]"
        :key="serie.id"
        :serie="serie"
      />
    </div>
    </section>

 <!-- ASIDE -->
    <aside class="pendientes">
      <h3>Pendientes de ver</h3>

      <p v-if="pendientesVer.length === 0">
        No hay series pendientes
      </p>

      <ul>
        <li v-for="serie in pendientesVer" :key="serie.id">
          <img :src="serie.imagen" />
          <span>{{ serie.titulo }}</span>
        </li>
      </ul>
    </aside>
  </main>
</template>

<style scoped>
    /* ===== LAYOUT GENERAL ===== */
.layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 32px;
  align-items: start;
}

/* ===== TITULOS ===== */
h2 {
  margin-bottom: 24px;
  font-size: 1.8rem;
}

aside h3 {
  margin-bottom: 16px;
  font-size: 1.2rem;
}

/* ===== GRID DE SERIES ===== */
.films-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}

/* ===== CARD ===== */
.film-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
}

.film-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
}

.film-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.film-card h3 {
  padding: 12px;
  font-size: 1rem;
  text-align: center;
  min-height: 48px;
}

.film-card button {
  margin: 12px;
  padding: 10px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s ease;
}

.film-card button:hover {
  opacity: 0.9;
}

/* ===== ASIDE ===== */
.pendientes {
  position: sticky;
  top: 24px;
  background: #f9fafb;
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  max-height: calc(100vh - 48px);
  overflow-y: auto;
}

/* ===== LISTA ASIDE ===== */
.pendientes ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pendientes li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  background: #ffffff;
  border-radius: 12px;
  padding: 8px;
  transition: background 0.2s ease;
}

.pendientes li:hover {
  background: #eef2ff;
}

.pendientes img {
  width: 48px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
}

.pendientes span {
  font-size: 0.95rem;
  font-weight: 500;
}

/* ===== EMPTY STATE ===== */
.pendientes p {
  color: #6b7280;
  font-size: 0.9rem;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .pendientes {
    position: relative;
    max-height: none;
  }
}

</style>