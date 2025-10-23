import axios from "axios";


console.log('Servicios Http')

const url = 'https://jsonplaceholder.typicode.com/posts'

// ------------ 1) xhr - XMLHttpRequest ----------------
/* const xhr = new XMLHttpRequest()
xhr.open('get', url)
xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
        const posts = JSON.parse(xhr.response)
        console.warn(typeof posts)
        console.log(posts)
    }
    else {
        console.error(`Error en petición http GET (status): ${xhr.status}`)
    }
})
xhr.send() */

// -------------- 2) fetch (promesas) ---------------
//  a) sintaxis then/catch
/* fetch(url)
    .then(response => {
        //console.log(response)
        return response.json()
    })
    .then(posts => console.log(posts))
    .catch(error => console.error(`Error en petición http GET: ${error.message}`)) */


//  b) sintaxis async/await

//async function prueba() {

// IIFE - INMEDIATLY INVOKED FUNCTION EXPRESSION - ify
/* ;(async function() {
    try {
        const response = await fetch(url)
        const posts = await response.json()
        console.log(posts)
    }
    catch(error) {
        console.error(`Error en petición http GET: ${error.message}`)
    }
})() */

//prueba()


// -------------- 3) axios (promesas) ---------------
// https://www.npmjs.com/package/axios
// https://github.com/axios/axios
// https://axios-http.com/
/* ;(async function() {
    try {
        //const rta = await axios(url)
        //console.log(rta.data)

        //const { data } = await axios(url)     // Object Destructring
        //console.log(data)

        const { data:posts } = await axios(url)     // Object Destructring con alias
        console.log(posts)        
    }
    catch(error) {
        console.error(`Error en petición http GET: ${error.message}`)
    }
})() */


export const obtenerPosts = async () => {
    try {
        const { data:posts } = await axios(url)
        return posts
    }
    catch(error) {
        console.error(`Error en petición http GET: ${error.message}`)
    }
}    