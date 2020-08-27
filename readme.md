# NODE-TCKIMLIK

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