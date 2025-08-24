import { Router } from "express";
import { allVMs, createVM, getVM, restartVM, startVM, stoptVM } from "../../controller/vms.controller.js";

const router = Router();

// list all VMs
router.get("/", allVMs);

// creates VM
router.post("/", createVM);

// get a indivisual VM
router.get("/:vmId", getVM)

// starts VM
router.get("/:vmId/start", startVM)

// stops VM
router.get("/:vmId/stop", stoptVM)

// restarts VM 
router.get("/:vmId/restart", restartVM)


export default router;
