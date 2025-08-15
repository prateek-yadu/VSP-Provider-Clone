import { Request, Response } from "express";

// TODO: Put every thing in try catch block
// TODO: Add standard error and response logic

export const allVMs = async (req: Request, res: Response) => {
  const vmsList = await (await fetch(`${process.env.LXD_SERVER}/1.0/instances/server-01?recursion=1`)).json()
  res.send(vmsList)
};

export const getVM = async (req: Request, res: Response) => {
  const VMDetails = await (await fetch(`${process.env.LXD_SERVER}/1.0/instances/${req.params.vmId}?recursion=1`)).json()
  res.send(VMDetails)
}

export const startVM = async (req: Request, res: Response) => {
  const start = await (await fetch(`${process.env.LXD_SERVER}/1.0/instances/${req.params.vmId}/state`, {
    method: "PUT",
    body: JSON.stringify({ "action": "start" })
  })).json()
  res.send(start)
}

export const stoptVM = async (req: Request, res: Response) => {
  const stop = await (await fetch(`${process.env.LXD_SERVER}/1.0/instances/${req.params.vmId}/state`, {
    method: "PUT",
    body: JSON.stringify({ "action": "stop", "force": true })
  })).json()
  res.send(stop)
}