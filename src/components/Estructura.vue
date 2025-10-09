<template>
  <section class="card">
    <div class="card-header">
        <h3>Componente Estructura</h3>
    </div>

    <div class="card-body">
      <!-- ------------------------ -->
      <!--           v-if           -->
      <!-- ------------------------ -->
      <h4><u>v-if</u></h4>

      <button class="btn btn-warning my-3" @click="mostrar = !mostrar">
        {{ mostrar? 'Ocultar' : 'Mostrar' }}
      </button>

      <p v-if="mostrar" class="alert alert-warning">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus sed aperiam sint delectus labore fugiat? Mollitia exercitationem corporis asperiores repellat sunt eligendi consequatur dolores pariatur perspiciatis, perferendis, officia tempora!
      </p>
      <!-- <p v-if="!mostrar" class="alert alert-danger"> -->
      <p v-else class="alert alert-danger">
        ELEMENTO REMOVIDO
      </p>


      <!-- ------------------------ -->
      <!--          v-show          -->
      <!-- ------------------------ -->
      <h4><u>v-show</u></h4>

      <button class="btn btn-info my-3" @click="mostrar2 = !mostrar2">
        {{ mostrar2? 'Ocultar' : 'Mostrar' }}
      </button>

      <p v-show="mostrar2" class="alert alert-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ducimus sed aperiam sint delectus labore fugiat? Mollitia exercitationem corporis asperiores repellat sunt eligendi consequatur dolores pariatur perspiciatis, perferendis, officia tempora!
      </p>

      <!-- ------------------------ -->
      <!--           v-for          -->
      <!-- ------------------------ -->
      <h4><u>v-for</u></h4>

      <ul>
        <li v-for="(usuario, index) in usuarios" :key="index">
          {{ index + 1 }} - {{ usuario }}
        </li>
        <!-- <li>{{ usuarios[0] }}</li>
        <li>{{ usuarios[1] }}</li>
        <li>{{ usuarios[2] }}</li> -->
      </ul>

      <hr>

      <button class="btn btn-warning my-3" @click="agregarAlumno">Agregar Alumno</button>

      <div v-if="alumnos.length">
        <ul>
          <li v-for="(alumno,index) in alumnos" :key="index">
            <!-- {{ index + 1 }} - <pre>{{ alumno }}</pre> -->
            <!-- {{ alumno.nombre }} {{ alumno.apellido }} -->
            <!-- {{ index + 1 }} - {{ alumno.nombre }} {{ alumno.apellido }} -->
            <!-- {{ (index + 1) + ' - ' + alumno.nombre + ' ' + alumno.apellido }} -->
            {{ `${index + 1} - ${alumno.nombre} ${alumno.apellido}` }}
          </li>
        </ul>

        <hr>

        <div class="table-responsive">
          <table class="table table-dark">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Curso</th>
                <th>Foto</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(alumno,index) in alumnos" :key="index">
                <td>{{ alumno.nombre }}</td>
                <td>{{ alumno.apellido }}</td>
                <td>{{ alumno.edad }}</td>
                <td>{{ alumno.curso? 'Si':'No' }}</td>
                <td>
                  <img :src="alumno.foto" width="50" :alt="alumno.nombre"> 
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- ------------------------------------- -->
        <!--       Propiedades computadas          -->
        <!--      v-if / v-else-if / v-else        -->
        <!-- ------------------------------------- -->
        <h4 class="alert alert-primary">
          <span v-if="obtenerDatosAlumnos.cantidad == 0">
            Ningún alumno hizo el curso
          </span>
          <span v-else-if="obtenerDatosAlumnos.cantidad == obtenerDatosAlumnos.total">
            Todos los alumnos hicieron el curso
          </span>
          <span v-else>
            {{obtenerDatosAlumnos.cantidad}} de {{obtenerDatosAlumnos.total}} alumnos hicieron el curso
          </span>
        </h4>
        <!-- <p>obtenerDatosAlumnos: {{ obtenerDatosAlumnos }}</p> -->

        <br>

        <div v-for="(alumno, index) in alumnos" :key="index" class="media alert alert-danger w-75">
          <img :src="alumno.foto" width="150" :alt="alumno.nombre" class="me-3"> 
          <div>
            <h5 class="mb-3"><u>Orden #{{ index + 1 }}</u></h5>
            <p>Nombre: <a :href="alumno.foto">{{ alumno.nombre }} {{ alumno.apellido }}</a></p>
            <p>Edad: <i>{{ alumno.edad }}</i></p>
            <!-- Hizo el curso: <b>{{ alumno.curso? 'Si': 'No' }}</b> -->
            Hizo el curso: <input type="checkbox" v-model="alumno.curso">
            <button class="btn btn-danger ms-3" @click="borrarAlumno(index)">Borrar</button>
          </div>
        </div>
      </div>
      <h4 v-else class="alert alert-info">
        No se encontraron alumnos
      </h4>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Estructura', // cambiá el nombre si querés

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
      // ejemplo: contador: 0
      mostrar: true,
      mostrar2: true,
      usuarios: [
        'Pablo',
        'Ana',
        'Juan',
        'Laura'
      ],
      // https://www.iconfinder.com/iconsets/business-avatar-1
      alumnos: [
        { nombre: 'Pablo', apellido: 'Mei', edad: 23, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-512.png' },
        { nombre: 'Ana', apellido: 'Blanco', edad: 24, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png' },
        { nombre: 'Juan', apellido: 'Perez', edad: 31, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png' },
        { nombre: 'Laura', apellido: 'Lopez', edad: 26, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-1024.png' },
      ]
    };
  },

  // Propiedades computadas
  computed: {
    // ejemplo: doble() { return this.contador * 2; }
    obtenerDatosAlumnos() {
      let cant = 0
      this.alumnos.forEach(alumno => {
        if(alumno.curso) cant++
      })
      return {
        cantidad: cant,
        total: this.alumnos.length
      }
    }
  },

  // Observadores
  watch: {
    // ejemplo: contador(nuevo, viejo) { /* ... */ }
  },

  // Métodos
  methods: {
    // ejemplo: incrementar() { this.contador++; }
    borrarAlumno(index) {
      console.log('borrarAlumno')
      this.alumnos.splice(index, 1)
    },
    agregarAlumno() {
      this.alumnos.push({
        nombre: 'Federico', apellido: 'Alberca', edad: 33, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-1024.png'
      })
    }
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
    background-color: pink;
    color: brown;
}

.table td {
  vertical-align: middle;
}

.media {
  display: flex;
  justify-content: start;
  align-items: start;
}
</style>
