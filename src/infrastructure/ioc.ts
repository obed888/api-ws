import { ContainerBuilder } from "node-dependency-injection";
import { LeadCreate } from "../application/lead.create";
import LeadCtrl from "./controller/lead.ctrl";

import { QrCreate } from "../application/qr.create";
import QrCtrl from "./controller/qr.ctrl";

import MetaRepository from "./repositories/meta.repository";
import MockRepository from "./repositories/mock.repository";
import TwilioService from "./repositories/twilio.repository";
import WsTransporter from "./repositories/ws.external";

const container = new ContainerBuilder();

/**
 * Inicamos servicio de WS / Bot / Twilio
 */
container.register("ws.transporter", WsTransporter);
const wsTransporter = container.get("ws.transporter");

container.register("db.repository", MockRepository);
const dbRepository = container.get("db.repository");

container
  .register("lead.creator", LeadCreate)
  .addArgument([dbRepository, wsTransporter]);

container
  .register("qr.creator", QrCreate);

const leadCreator = container.get("lead.creator");
const qrCreator = container.get("qr.creator");

container.register("lead.ctrl", LeadCtrl).addArgument(leadCreator);
container.register("qr.ctrl", QrCtrl).addArgument(qrCreator);

export default container;
