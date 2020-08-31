# NODE-TCKIMLIK


![Node.js CI](https://github.com/emreycolakoglu/node-tckimlik/workflows/Node.js%20CI/badge.svg?branch=master)
![Node.js Package](https://github.com/emreycolakoglu/node-tckimlik/workflows/Node.js%20Package/badge.svg?branch=0.02)


## Kurulum

``` npm install node-tckimlik ```

or

``` yarn add node-tckimlik ``` 

## Kullanım

```
const clientPromise = require("node-tckimlik");

clientPromise
  .then((client) => {
    return client.KisiVeCuzdanDogrulaAsync({
      TCKimlikNo: 12312312312,
      Ad: "Adem",
      Soyad: "Testoğlu",
      DogumGun: 15,
      DogumAy: 6,
      DogumYil: 1990,
    });
  })
  .then((response) => {
    console.log(response[0].KisiVeCuzdanDogrulaResult);
  });


```

## Parametreler

[bu linke](https://tckimlik.nvi.gov.tr/Service/KPSPublicV2.asmx?op=KisiVeCuzdanDogrula) tıklayarak parametre listesini görebilirsiniz.