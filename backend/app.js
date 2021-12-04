// Importamos las librerías que necesitamos.
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "./morgan.config.js";

// Conexión base de datos
const uri = "mongodb+srv://auditplus:auditplus123@auditplus.x2ndc.mongodb.net/auditplus?retryWrites=true&w=majority";

const connOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Promesa para establecer la conexión a mongoose con el objeto de opciones.
mongoose.connect(uri, connOptions).then(
  () => {
    console.log("Se ha conectado exitosamente a la base de datos.");
  },
  (error) => {
    // Si hay algún error, lo imprime en la consola.
    console.log(error);
  }
);

const app = express();
const appConfig = {
  port: process.env.PORT || 4000,
};

//Middlewares
app.use(morgan);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
import userRoutes from "./routes/users.js";
import facturaRoutes from "./routes/facturas.js";
import clienteRoutes from "./routes/clientes.js";
import coddevRoutes from "./routes/coddev.js";
import contratoRoutes from "./routes/contratos.js";
import ipsRoutes from "./routes/ips.js";
import rolRoutes from "./routes/roles.js";
import tipocontratoRoutes from "./routes/tipocontrato.js";
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoutes);
app.use("/api", clienteRoutes);
app.use("/api", coddevRoutes);
app.use("/api", contratoRoutes);
app.use("/api", ipsRoutes);
app.use("/api", rolRoutes);
app.use("/api", tipocontratoRoutes);
app.use("/api", facturaRoutes);

app.listen(appConfig.port, function () {
  console.log(`La aplicación está corriendo en el puerto: ${appConfig.port}`);
});
