<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header">
        <header>
          <h2>Componente Principal (App)</h2>
        </header>
      </div>

      <div class="card-body">
        <main>
          <Binding />
          <Estructura />
          <Atributos />
          <Formulario />

        </main>
      </div>
    </div>
  </div>
</template>

<script>
/* Componentes de simple archivo (template, script, scope) */
import Binding from './components/Binding.vue';
import Estructura from './components/Estructura.vue';
import Atributos from './components/Atributos.vue';

/* Componentes de múltiples archivos (.html, .js, .css) */
import Formulario from './components/Formulario/index.vue'


export default {
  name: 'App',
  components: {
    Binding,
    Estructura,
    Atributos,
    Formulario
  },
}
</script>

<style scoped>
.card-header {
  background-color: green;
  color: white;
}
</style>
