import { Request, Response } from "express";
import { LeadCreate } from "../../application/lead.create";

class QrCtrl {

  constructor() {}

  public showQr = async () => {
    console.log("NADA");
    return "NO DEVUELVE NADA";
  };
}

export default QrCtrl;
