import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface ModeloInterface<T> extends Imprimivel, Comparavel<T> {

}