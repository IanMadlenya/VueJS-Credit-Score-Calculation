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
        <tr v-for="k in kredi.krediler">
          <td>{{k.toplamKredi}} TL</td>
          <td>{{k.faizliTaksitMiktar}} TL</td>
          <td>{{k.faizsizTaksitMiktar}} TL</td>
          <td>{{k.faizMiktar}} TL</td>
          <td>{{Math.abs(k.kalanBorc.toFixed(2))}}TL</td>
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
<style src="../assets/css/result.css"></style>

