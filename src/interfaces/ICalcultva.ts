import { url } from "inspector";
import { useEffect } from "react";

export default interface ICalculTva {
  nombreACalculer: number;
  tva: number;
  information?: string;
}
