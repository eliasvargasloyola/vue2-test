<template>
    <div class="container">
        <ul>
            <li v-for="(item, index) of toSort" :key="item.nombre"
                class="list-group-item d-flex justify-content-between align-items-center" @click="aumentar(index)">
                {{index+1}} - {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
            <button class="btn btn-danger btn-block" @click="reset">Reset</button>
        </ul>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "Lista",
        computed: {
            ...mapState(['frutas']),
            toSort(){
                const myArray = this.frutas;
                return myArray.sort((a, b) => b.cantidad - a.cantidad);
            }
        },
        methods: {
            ...mapMutations(['aumentar', 'reset'])
        }
    }
</script>

<style scoped>

</style>
