const getVMs = (req:any , res:any) => {
  interface vms {
    name: String;
    available: Boolean;
  }
  const data: vms = {
    name: "working",
    available: true,
  };
  res.json(data);
};

export default getVMs;
