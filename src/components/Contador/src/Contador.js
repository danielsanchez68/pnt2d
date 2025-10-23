export default {
  name: 'Contador',
  props: {
    ini: { type: String, default: '0' },
    fondo: { type: String, default: 'primary' },
  },    // (2)
  //props: ['ini','fondo'],   // (1)
  data() {
    return {
      // estado local
      //contador: this.ini || 0   // || short circuit operator  (1)
      contador: this.ini          // (2)
    };
  },

  methods: {
    contar() {
      this.contador++
    },
    getColorFondo() {
      //return 'btn-' + (this.fondo || 'primary')   // (1)
      return 'btn-' + this.fondo   // (2)
    }
  },
};
