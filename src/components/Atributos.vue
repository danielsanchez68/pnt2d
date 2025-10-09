<template>
  <section class="card">
    <div class="card-header">
        <h3>Componente Atributos</h3>
    </div>

    <div class="card-body">

      <!-- ------------------ -->
      <!--       :style       -->
      <!-- ------------------ -->
      <h4><u>:style</u></h4>

      <button class="btn btn-success my-3" @click="estado1 = !estado1">Cambiar Color Fondo</button>

      <!-- <p style="background-color: green; color: white; padding: 10px; border-radius: 10px;"> -->
      <p :style="{'background-color': estado1?'green':'crimson', color: 'white', padding: '10px', borderRadius: '10px'}">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis fugiat dolores mollitia, explicabo minus magnam perspiciatis officia ratione itaque officiis qui in! Recusandae, eveniet incidunt delectus atque aperiam distinctio.
      </p>

      <br>
      <hr>

      <!-- ------------------ -->
      <!--       :class       -->
      <!-- ------------------ -->
      <h4><u>:class</u></h4>

      <button class="btn btn-success my-3" @click="estado2 = !estado2">Cambiar Color Fondo</button>

      <!-- <p class="btn btn-success"> -->
      <!-- <p :class="{btn:true, 'btn-success':estado2, 'btn-danger':!estado2}"> -->
      <p :class="['btn', {'btn-success':estado2, 'btn-danger':!estado2}]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, veritatis fugiat dolores mollitia, explicabo minus magnam perspiciatis officia ratione itaque officiis qui in! Recusandae, eveniet incidunt delectus atque aperiam distinctio.
      </p>



    </div>
  </section>
</template>

<script>
export default {
  name: 'Atributos', // cambiá el nombre si querés

  // Registrar componentes hijos
  components: {
    // Ej: HijoComponente
  },

  // Propiedades que recibe el componente
  props: {
    // ejemplo: titulo: { type: String, default: '' }
  },

  // Estado local
  data() {
    return {
      estado1: true,
      estado2: true
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
    background-color: blueviolet;
    color: white;
}
</style>
