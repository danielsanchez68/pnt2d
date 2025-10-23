import { createRouter, createWebHistory } from "vue-router"

import Binding from "./components/Binding.vue"
import Estructura from "./components/Estructura.vue"
import Atributos from "./components/Atributos.vue"
import Formulario from "./components/Formulario/index.vue"
import Contadores from "./components/Contadores.vue"
import Http from "./components/Http.vue"


const routes = [
    /* ---- definición de la ruta raíz ---- */
    //{ path: '/', component: Binding },
    { path: '/', redirect: '/binding' },

    /* ---- definición de las rutas activas ---- */
    { path: '/binding', component: Binding },
    { path: '/estructura', component: Estructura },
    { path: '/atributos', component: Atributos },
    { path: '/formulario', component: Formulario },
    { path: '/contadores', component: Contadores },
    { path: '/http', component: Http },

    /* ---- definición de las rutas no existentes ---- */
    { path: '/:pathmatch(.*)*', redirect: '/binding' },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router