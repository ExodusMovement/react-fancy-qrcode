 // @ts-nocheck
import { QR } from "qr-image/lib/qr-base.js";
import { ErrorCorrection } from "./types";

export const generateDataMatrix = (
  value: string,
  errorCorrection: ErrorCorrection
): number[][] => {
  return QR(value, errorCorrection);
};
