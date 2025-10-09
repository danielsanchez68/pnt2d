export default {
  name: 'Formulario',

  components: {
    // componentes hijos
  },

  props: {
    // ejemplo: titulo: { type: String, default: '' }
  },

  data() {
    return {
      // estado local
      formData: {
        nombre: null,
        apellido: null,
        edad: null
      }
    };
  },

  computed: {
    // propiedades calculadas
  },

  watch: {
    // observadores
  },

  methods: {
    // funciones del componente
    enviar() {
      const datos = { ...this.formData }    // ... Spread Operator
      console.log(datos)

      this.formData = {
        nombre: null,
        apellido: null,
        edad: null
      }
    }
  },

  created() {
    // hook de creación
  },
  mounted() {
    // hook de montaje
  },
  unmounted() {
    // hook de desmontaje
  }
};
