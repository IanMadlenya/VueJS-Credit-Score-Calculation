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
        /*
        for (var i = 0; i < newobj.taksitSayisi; i++) {
          this.kredi[i] = newobj;
        }
        for (let j = 1; j < newobj.taksitSayisi; j++) {
          this.kredi[j].kalanBorc = this.kredi[j].toplamKredi - (this.kredi[j].faizliTaksitMiktar * (j));
          console.log(this.kredi[j].kalanBorc);
        }*/
        //Tüm eksiltmeyi yazıyor ancak son değeri bind ediyor.
      }
    },
    created() {
      this.kredi = "";
    }
  }
</script>
<style src="./assets/css/app.css"></style>

