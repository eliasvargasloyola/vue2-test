const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Start With Vuex'
    },
    store: myStore,
    methods: {
    },
    computed: {
    },
    beforeCreate() {
        console.log('Constructor');
    },
    created() {
        console.log('Init');
    },
    beforeMount() {
        console.log('Antes de insertar al DOM');
    },
    mounted() {
        console.log('Insertado html en el DOM');
    }
});
