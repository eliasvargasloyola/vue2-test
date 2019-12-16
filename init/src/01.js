const app = new Vue({
    el: '#app',
    data: {
        titulo: 'First app Vue 2',
        frutas: [{nombre: 'Manzana', cantidad: 0}, {nombre: 'Naranja', cantidad: 10}, {nombre: 'Pera', cantidad: 23}],
        nuevaFruta: '',
        totalFrutas: 0
    },
    methods: {
        agregarFruta() {
            this.frutas.push({nombre: this.nuevaFruta, cantidad: 0});
            this.nuevaFruta = '';
        },
        otroMetodo() {

        },
    },
    computed: {
        sumarFrutas() {
            this.totalFrutas = 0;
            for (fruta of this.frutas) {
                this.totalFrutas = this.totalFrutas + fruta.cantidad;
            }
            return this.totalFrutas;
        }
    }
});
