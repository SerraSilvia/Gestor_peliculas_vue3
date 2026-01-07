<script setup>
const props = defineProps({
  film: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['selected']);
function selected() {
  emit('selected', props.film);
}

</script>

<template>
  <div class="film-detail">
    <h3>{{ film.titulo }}</h3>
    <img :src="film.imagen" alt="Imagen de la película">
    <button @click="selected">Seleccionar</button>
  </div>
</template>