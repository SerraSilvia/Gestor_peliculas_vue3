<script setup>
import { inject } from 'vue';

const props = defineProps({
  serie: {
    type: Object,
    required: true
  }
});
const pendientesVer = inject('pendientesVer')
const seriesArray = inject('listaSeries');

function selected() {
    if (!pendientesVer.value.find(s => s.id === props.serie.id)) {
    pendientesVer.value.push(props.serie)
  }
}

</script>

<template>
  <div class="film-card">
    <h3>{{ serie.titulo }}</h3>
    <img :src="serie.imagen" :alt="serie.titulo" />
    <p><strong>Año:</strong> {{ serie.año }}</p>
    <p><strong>Género:</strong> {{ serie.genero.join(', ') }}</p>
    <p><strong>Sinopsis:</strong> {{ serie.sinopsis }}</p>
    <button @click="selected">Añadir</button>
  </div>
</template>