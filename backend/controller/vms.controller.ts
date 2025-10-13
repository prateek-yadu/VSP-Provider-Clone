import { Request, Response } from "express";

// TODO: Put every thing in try catch block
// TODO: Add standard error and response logic

export const allVMs = async (req: Request, res: Response) => {
  const vmsList = await (await fetch(`${process.env.LXD_SERVER}/1.0/instances?project=${process.env.PROJECT}&recursion=2`)).json()
  res.send(vmsList)
};

export const getVM = async (req: Request, res: Response) => {
  const VMDetails = await (await fetch(`${process.env.LXD_SERVER}/1.0/instances/${req.params.vmId}?project=${process.env.PROJECT}&recursion=1`)).json()
  res.send(VMDetails)
}

export const createVM = async (req: Request, res: Response) => {
  const payload = await req.body
  const createReq = await (await fetch(`${process.env.LXD_SERVER}/1.0/instances?project=${process.env.PROJECT}`, {
    method: "POST",
    body: JSON.stringify({
      "name": `${payload.name}`,
      "description": `${payload.description}`,
      "config": {
        "limits.cpu": "1",
        "limits.memory": "4GiB"
      },
      "devices": {
        "root": {
          "path": "/",
          "pool": "default",
          "type": "disk",
          "size": "15GiB"
        }
      },
      "source": {
        "alias": "24.04",
        "protocol": "simplestreams",
        "server": "https://cloud-images.ubuntu.com/releases/",
        "type": "image"
      },
      "boot.autostart": false,
      "start": true,
      "type": "virtual-machine"
    })
  })).json()
  
  res.json(createReq)
}

export const startVM = async (req: Request, res: Response) => {
  const startReq = await (await fetch(`${process.env.LXD_SERVER}/1.0/instances/${req.params.vmId}/state?project=${process.env.PROJECT}`, {
    method: "PUT",
    body: JSON.stringify({ "action": "start" })
  })).json()
  res.send(startReq)
}

export const stoptVM = async (req: Request, res: Response) => {
  const stopReq = await (await fetch(`${process.env.LXD_SERVER}/1.0/instances/${req.params.vmId}/state?project=${process.env.PROJECT}`, {
    method: "PUT",
    body: JSON.stringify({ "action": "stop", "force": true })
  })).json()
  res.send(stopReq)
}

export const restartVM = async (req: Request, res: Response) => {
  const restartReq = await (await fetch(`${process.env.LXD_SERVER}/1.0/instances/${req.params.vmId}/state?project=${process.env.PROJECT}`, {
    method: "PUT",
    body: JSON.stringify({ "action": "restart", "force": true })
  })).json()
  res.send(restartReq)
}

export const destroyVM = async (req: Request, res: Response) => {
  const destryReq = await (await fetch(`${process.env.LXD_SERVER}/1.0/instances/${req.params.vmId}?project=${process.env.PROJECT}`, {
    method: "DELETE"
  })).json()
  res.send(destryReq)
}