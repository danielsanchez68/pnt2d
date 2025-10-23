<template>
  <section class="card">
    <div class="card-header">
        <h3>Componente Contadores</h3>
    </div>

    <div class="card-body">
      <Contador ini="123" fondo="success" />
      <Contador ini="456" fondo="warning" />
      <Contador ini="789" fondo="danger" />
      <Contador />

    </div>
  </section>
</template>

<script>
import Contador from './Contador/index.vue'
export default {
  name: 'Contadores', // cambiá el nombre si querés

  // Registrar componentes hijos
  components: {
    // Ej: HijoComponente
    Contador
  },

  // Propiedades que recibe el componente
  props: {
    // ejemplo: titulo: { type: String, default: '' }
  },

  // Estado local
  data() {
    return {
    };
  },

  // Propiedades computadas
  computed: {
    // ejemplo: doble() { return this.contador * 2; }
  },

  // Observadores
  watch: {
    // ejemplo: contador(nuevo, viejo) { /* ... */ }
  },

  // Métodos
  methods: {
    // ejemplo: incrementar() { this.contador++; }
  },

  // Ciclo de vida
  created() {
    // Se ejecuta al crear la instancia
  },
  mounted() {
    // Se ejecuta cuando el componente se monta en el DOM
  },
  unmounted() {
    // Limpieza al desmontar
  }
};
</script>

<style scoped>
.card-header {
    background-color: orangered;
    color: white;
}
</style>
