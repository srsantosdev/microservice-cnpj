const routes = require("express").Router();
const service = require("./../service");

routes.get("/search/:cnpj", async (request, response) => {
  const cnpj = await service(request.params.cnpj);
  return response.json(cnpj);
});

module.exports = routes;
