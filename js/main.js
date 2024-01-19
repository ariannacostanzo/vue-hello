// console.log( Vue);

const {createApp} = Vue;

const app = createApp({
    name: 'Vue Hello',
    data() {
        return {
            message: 'Sto usando Vue per la prima volta',
            image: {
                name: 'Vue',
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
            }
            
        }
    }
})


app.mount('#root');