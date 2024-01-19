// console.log( Vue);

const {createApp} = Vue;

const app = createApp({
    name: 'Vue Hello',
    data() {
        return {
            message: 'Sto usando Vue per la prima volta'
        }
    }
})


app.mount('#root');