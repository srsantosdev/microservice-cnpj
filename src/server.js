const app = require("./app");

const port = 3004;

app.listen(port, () => {
  console.log("[INFO] Starting...");
  console.log("[INFO] EXECUTING MICROSERVICE CNPJ.");
  console.log(`[PORT] ${port}`);
});
