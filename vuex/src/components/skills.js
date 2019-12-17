Vue.component('my-skills',{
    template: '<div>' +
        '<button @click="aumentar(5)">+</button>  ' +
        '<button @click="disminuir">-</button>' +
        '</div>',
    data() {
        return {
            nombre: 'Elias Vargas'
        }
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir'])
    }
});
