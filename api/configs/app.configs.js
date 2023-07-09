const configDev = {
  PORT: 5000,
  origin: "http://127.0.0.1:5173",
  credentials: true,
};

const configProd = {
  origin: "https://nerviidevelopperhelper.web.app/",
  credentials: true,
};

module.exports = { configDev, configProd };
