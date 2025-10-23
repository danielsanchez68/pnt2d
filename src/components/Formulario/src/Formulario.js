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
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
    };
  },

  computed: {
    // propiedades calculadas
    errorNombre() {
      let mensaje = ''
      let nombre = this.formData.nombre
      if(!nombre) mensaje = 'Campo requerido'
      else if(nombre.length < 3) mensaje = 'Este campo debe poseer al menos 3 caracteres'
      else if(nombre.length > 10) mensaje = 'Este campo debe poseer como máximo 10 caracteres'
      else if(nombre.includes(' ')) mensaje = 'Este campo no permite espacios intermedios'

      return {
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.nombre,
        ok: mensaje == ''
      }
    },
    errorApellido() {
      let mensaje = ''
      let apellido = this.formData.apellido
      if(!apellido) mensaje = 'Campo requerido'

      return {
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.apellido,
        ok: mensaje == ''
      }
    },
    errorEdad() {
      let mensaje = ''
      let edad = this.formData.edad
      if(!edad) mensaje = 'Campo requerido'
      else if(edad < 18) mensaje = 'Debe ingresar una edad mayor a 18 años.'
      else if(edad > 120) mensaje = 'Debe ingresar una edad menor a 120 años.'

      return {
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.edad,
        ok: mensaje == ''
      }
    },    
  },

  watch: {
    // observadores
  },

  methods: {
    getInicialData() {
      return {
        nombre: null,
        apellido: null,
        edad: null
      }
    },
    estadoBotonDeshabilitado() {
      return !this.errorNombre.ok || !this.errorApellido.ok || !this.errorEdad.ok
    },
    // funciones del componente
    enviar() {
      const datos = { ...this.formData }    // ... Spread Operator
      console.log(datos)

      this.formData = this.getInicialData()
      this.formDirty = this.getInicialData()
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
