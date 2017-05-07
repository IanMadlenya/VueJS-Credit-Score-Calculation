<template>
  <div id="app">
    <br><br>
    <Input v-on:ShowResult='handleKredi'></Input><br><br>
    <Result v-bind:kredi='kredi'></Result>
  </div>
</template>

<script>
  import Input from './components/inputs.vue'
  import Result from './components/result.vue'
  export default {
    name: 'app',
    components: {
      Input,
      Result
    },
    data() {
      return {
        kredi: []
      }
    },
    methods: {
      handleKredi(newobj) {
        this.kredi = [];
        this.kredi = newobj;
      }
    },
    created() {
      this.kredi = "";
    }
  }
</script>
<style src="./assets/css/app.css"></style>

