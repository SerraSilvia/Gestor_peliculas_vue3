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
  <div class="film-card">
    <img :src="film.imagen" alt="Imagen de la película" />
    <div class="film-info">
      <h3>{{ film.titulo }}</h3>
      <button @click="selected">Seleccionar</button>
    </div>
  </div>
</template>

<style scoped>
.film-card {
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  width: 220px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.film-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
}

.film-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.film-info {
  padding: 14px;
  text-align: center;
}

.film-info h3 {
  font-size: 1rem;
  margin-bottom: 12px;
  color: #333;
}

.film-info button {
  background: #aa49e4;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;

}

.film-info button:hover {
  background: #f95fef;
}
</style>
