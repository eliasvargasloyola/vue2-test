<template>
    <div id="app" class="container">
        <cabecera></cabecera>
        <lista></lista>
    </div>
</template>

<script>
  import Cabecera from "./components/Cabecera";
  import Lista from "./components/Lista";

  export default {
        name: 'app',
        components: {
            Lista,
            Cabecera
        }
    }
</script>

<style>
</style>
