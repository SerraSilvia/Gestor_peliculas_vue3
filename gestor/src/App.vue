<script setup>
import { ref, provide } from "vue";

</script>

<template>
  <div class="app-layout">
    <nav class="navbar">
      <div class="brand">
        <img src="/public/kitsune.png" alt="Animes Logo" class="logo" />
        <h2 class="brand-text">KitsuneFilms</h2>
      </div>

      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/films">Films</router-link>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>
    
    <footer class="basic-footer">
        <!-- Copyright -->
        <div class="copyright">
          <p>&copy; 2026 KitsuneFilms. Todos los derechos reservados.</p>
        </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.copyright p {
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
  color: #95a5a6;
}
.basic-footer {
  background-color: #2c3e50; /* Fondo oscuro elegante */
  color: white;
  padding: 20px 40px;
  margin-top: auto; /* Empuja el footer al final */
}
/* Navbar Moderna */
.navbar {
  display: flex; /* Flexbox es clave para alinear izq/der */
  justify-content: space-between; /* Separa Brand a la izq y Links a la der */
  align-items: center; /* Centra verticalmente */
  padding: 15px 40px; /* Espaciado generoso */
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03); /* Sombra muy sutil */
  position: sticky; /* Opcional: hace que el menú se quede fijo arriba */
  top: 0;
  z-index: 100;
}

/* Parte Izquierda: Marca */
.brand {
  display: flex;
  align-items: center;
  gap: 12px; /* Espacio entre logo y texto */
  text-decoration: none;
}

.logo {
  height: 45px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: rotate(-10deg);
}

.brand-text {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 800;
  color: #aa49e4; 
  letter-spacing: -0.5px;
}

/* Parte Derecha: Enlaces */
.nav-links {
  display: flex;
  gap: 30px; /* Espacio entre enlaces */
}

.nav-links a {
  text-decoration: none;
  color: #7f8c8d; /* Gris suave por defecto */
  font-weight: 600;
  font-size: 1.05rem;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s ease;
}

/* Efecto Hover y Activo */
.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: #f95fef; /* Naranja de la marca al estar activo */
}

/* Línea animada debajo del link activo */
.nav-links a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #d248e8;
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-exact-active::after {
  width: 100%;
}
</style>

