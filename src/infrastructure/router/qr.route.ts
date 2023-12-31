import express, { Router } from "express";
import QrCtrl from "../controller/qr.ctrl";
import container from "../ioc";
const router: Router = Router();

/**
 * http://localhost/qr POST
 */
const qrCtrl: QrCtrl = container.get("qr.ctrl");
router.get("/", qrCtrl.showQr);

export { router };
