Vue.component('person-component', {
    template: '<div>' +
        '<h1>{{nombre}}</h1>' +
        '</div>',
    data() {
        return {nombre: 'Elias Vargas'};
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    }
});
