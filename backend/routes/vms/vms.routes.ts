import { Router } from "express";
import getVMs from "../../controller/vms.controller.js";

const router = Router();

// router.get("/", (req, res) => {
//   res.send("List all vms");
// });

router.get("/", getVMs);

export default router;
