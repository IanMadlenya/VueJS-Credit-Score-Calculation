<template>
  <div class="results">
    <div v-bind="kredi">
      <table>
        <tr>
          <th>Kredi Toplami</th>
          <th>Faizli Aylik</th>
          <th>Faizsiz Aylik</th>
          <th>Faiz Miktari</td>
            <th>Kalan Borc</th>
        </tr>
        <tr v-for="k in kredi">
          <td>{{k.toplamKredi}} TL</td>
          <td>{{k.faizliTaksitMiktar}} TL</td>
          <td>{{k.faizsizTaksitMiktar}} TL</td>
          <td>{{k.faizMiktar}} TL</td>
          <td>{{k.kalanBorc.toFixed(2)}} TL</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['kredi']
  }
</script>

<style>
   table {
     margin-left: 15%;
     width: 70%;
     border: 1px solid black;
   }
   
   table {
     font-size: .9em;
     font-family: Arial, sans-serif;
     border-collapse: collapse;
   }
   
   td,
   th {
     text-align: left;
     padding: 10px 5px;
     border: 1px solid #aaa;
   }
</style>