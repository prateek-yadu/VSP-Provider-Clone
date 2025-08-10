import express from "express";
import vmsRoutes from "./routes/vms/vms.routes.js";

const app = express();
const port = 3000; // <-- TODO: Put it in .env file

app.get("/", (req, res) => {
  res.send("VPS Provider Project");
});

app.use("/api/v1/vms", vmsRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
