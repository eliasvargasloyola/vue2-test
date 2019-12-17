Vue.component('my-profile', {
    template: '' +
        '<div>' +
        '<button @click="getProfiles">Load</button>' +
        '<ul v-for="prof of profiles">' +
        '<h3>{{prof.nombre}}</h3>' +
        '<h5>Edad : {{ prof.edad }}</h5>' +
        '<my-skills></my-skills>' +
        '</ul>' +
        '</div>',
    data() {
        return {
            nombre: 'Elias Vargas'
        }
    },
    computed: {
        ...Vuex.mapState(['edad', 'profiles'])
    },
    methods: {
        ...Vuex.mapActions(['getProfiles'])
    }
});
