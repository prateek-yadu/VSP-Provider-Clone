import { Router } from "express";
import { allVMs, getVM, startVM, stoptVM } from "../../controller/vms.controller.js";

const router = Router();

// list all VMs
router.get("/", allVMs);

// get a indivisual VM
router.get("/:vmId", getVM)

// starts VM
router.get("/:vmId/start", startVM)

// stops VM
router.get("/:vmId/stop", stoptVM)


export default router;
