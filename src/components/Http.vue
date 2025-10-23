<template>
  <section class="card">
    <div class="card-header">
        <h3>Componente Http - Timer: {{ timer }}</h3>
    </div>

    <div class="card-body">
      <button class="btn btn-primary my-3 me-2" @click="obtener">Obtener</button>
      <button class="btn btn-danger my-3" @click="posts=[]">Borrar</button>

      <!-- <pre><p>{{ posts }}</p></pre> -->

      <div v-if="posts.length">
        <div class="table-responsive">
          <table class="table table-dark">
            <thead>
              <tr>
                <th>id</th>
                <th>userId</th>
                <th>title</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(post, index) in posts" :key="index">
                <td>{{ post.id }}</td>
                <td>{{ post.userId }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h4 v-else class="alert alert-info">Pedir los posts a través del botón Obtener</h4>

    </div>
  </section>
</template>

<script>
import { obtenerPosts } from '../servicios/posts.js';
export default {
  name: 'Http', // cambiá el nombre si querés

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
      posts: [],
      timer: 0,
      refTimer: null
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
    async obtener() {
      const posts = await obtenerPosts()
      //console.log(posts)
      this.posts = posts
    }
  },

  // ------------------------------------------------
  //        Lifecycle Hooks (Ciclo de vida)
  //  https://vuejs.org/guide/essentials/lifecycle
  // ------------------------------------------------
  // instancia del componente en memoria
  beforeCreate() {
    console.log('Http -> beforeCreate')
  },
  created() {
    console.log('Http -> created')
  },
  
  // render del componente en la vista (DOM)
  beforeMount() {
    console.log('Http -> beforeMount')
  },
  mounted() {
    console.log('Http -> mounted')

    this.obtener()

    this.refTimer = setInterval(() => {
      this.timer++
      console.warn(this.timer)
    },1000)
  },

  // cambio de la data del componente
  beforeUpdate() {
    //console.log('Http -> beforeUpdate')
  },
  updated() {
    //console.log('Http -> updated')
  },

  // desmontado del componente de la vista
  beforeUnmount() {
    console.log('Http -> beforeUnmount')
  },
  unmounted() {
    console.log('Http -> unmounted')

    clearInterval(this.refTimer)
  }
};
</script>

<style scoped>
.card-header {
    background-color: blueviolet;
    color: cyan;
}
</style>
