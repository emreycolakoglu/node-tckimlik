var soap = require("soap");

var url = "https://tckimlik.nvi.gov.tr/Service/KPSPublicV2.asmx?wsdl";

function buildClient() {
  return new Promise((resolve, reject) => {
    soap
      .createClientAsync(url)
      .then((client) => {
        resolve(client);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = buildClient();
