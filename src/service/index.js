const axios = require("axios").default;

module.exports = async (cnpj = "") => {
  return await axios
    .get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return false;
    });
};
