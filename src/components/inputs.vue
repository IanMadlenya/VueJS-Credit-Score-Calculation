<template>
<center>
<div class="search">
<input type="radio" v-model="picked" value="newcar" name="newCar">Sıfır Araba
<input type="radio" v-model="picked" value="oldcar" name="oldCard"> Ikinci El Araba<br> Vade : <input class="values" type="text" name="vade" placeholder="Vadeyi Giriniz" v-model="vade" @keyup="(event) => handleHesap(event, 'vade')"> Toplam Kredi:
<input class="values" type="text" name="totalKredi" placeholder="Krediyi Giriniz" v-model="kredi" @keyup="(event) => handleHesap(event, 'kredi')"> Aylik : <input class="values" type="text" name="aylik" placeholder="Aylık Odeme" v-model="aylik"
    @keyup="(event) => handleHesap(event, 'aylik')">
<button v-on:click="handleKredi">Search</button>
</div>
</center>
</template>


<script>

export default {
data() {
return {
    vade: 0,
    kredi: 0,
    aylik: 0,
    picked: 0
}
},

methods: {
handleKredi() {
    var oldcar = 1.25;
    var newcar = 2.8;
    var faizliTaksitMiktar = 0,
        faizsizTaksitMiktar = 0,
        yuzde = 0,
        taksitSayisi = 0,
        faizMiktar = 0,
        kalanBorc = 0,
        toplamKredi = 0;
    if (this.kredi <= 0 || this.vade <= 0) {
        alert("Degerler sıfırdan büyük olmalıdır");
    } else {
        if (this.picked == 0) {
            alert("Araba Türü Seçiniz");
        } else {
            if (this.picked == "oldcar") {
                yuzde = ((this.kredi) * oldcar) / 100;
                faizsizTaksitMiktar = (parseFloat(this.kredi)) / parseInt(this.vade);
                faizliTaksitMiktar = (parseFloat(this.kredi) + yuzde) / parseInt(this.vade);
                faizMiktar = yuzde;
                kalanBorc = this.kredi;
                toplamKredi = (parseFloat(this.kredi) + yuzde);
                taksitSayisi = this.vade;
                var newObject = {
                    krediler:[

                    ]};
                for(let i = 0 ; i<taksitSayisi ; i++){
                    var monthPayments = {
                        faizliTaksitMiktar: faizliTaksitMiktar.toFixed(2),
                                        faizsizTaksitMiktar: faizsizTaksitMiktar.toFixed(2),
                                        taksitSayisi: taksitSayisi,
                                        faizMiktar: faizMiktar.toFixed(2),
                                        toplamKredi: toplamKredi.toFixed(2),
                                        kalanBorc: (toplamKredi-(faizliTaksitMiktar*(i+1)))
                    }
                    newObject.krediler[i]=monthPayments;
                }
                console.log(newObject);
                this.$emit('ShowResult', newObject);
            } else {
                yuzde = ((this.kredi) * newcar) / 100;
                faizsizTaksitMiktar = (parseFloat(this.kredi)) / parseInt(this.vade);
                faizliTaksitMiktar = (parseFloat(this.kredi) + yuzde) / parseInt(this.vade);
                taksitSayisi = this.vade;
                kalanBorc = this.kredi;
                toplamKredi = (parseFloat(this.kredi) + yuzde);
                faizMiktar = yuzde;
                var newObject = {
                    krediler:[

                    ]};
                for(let i = 0 ; i<taksitSayisi ; i++){
                    var monthPayments = {
                        faizliTaksitMiktar: faizliTaksitMiktar.toFixed(2),
                                        faizsizTaksitMiktar: faizsizTaksitMiktar.toFixed(2),
                                        taksitSayisi: taksitSayisi,
                                        faizMiktar: faizMiktar.toFixed(2),
                                        toplamKredi: toplamKredi.toFixed(2),
                                        kalanBorc: (toplamKredi-(faizliTaksitMiktar*(i+1)))
                    }
                    newObject.krediler[i]=monthPayments;
                }
                console.log(newObject);
                this.$emit('ShowResult', newObject);
            }
        }
    }

},
handleHesap(event, name) {
    if (name == "kredi") {
        if (this.vade != 0) {
            this.aylik = (this.kredi / this.vade).toFixed(2);
        }
        if (this.aylik != 0) {
            this.vade = (this.kredi / this.aylik).toFixed(2);
        }
    }
    if (name == "vade") {
        this.kredi = (this.vade * this.aylik).toFixed(2);
        if (this.vade != 0) {
            this.aylik = (this.kredi / this.vade).toFixed(2);
        }
    }
    if (name == "aylik") {
        if (this.aylik != 0) {
            this.vade = (this.kredi / this.aylik).toFixed(2);
        }
        this.kredi = (this.aylik * this.vade).toFixed(2);
    }
}
}
}
</script>
<style src="../assets/css/inputs.css"></style>
