import { v4 as uuid } from "uuid";

export class Qr {
  readonly uuid: string;
  readonly url: string;

  constructor({ url }: { url:string }) {
    this.uuid = uuid();
    this.url = url;
  }
}
