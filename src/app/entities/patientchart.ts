import { Vsign } from "./vsign";
//import { Patientuser } from "./patientuser";
 import { Patientuser} from "./patientuser";

export class Patientchart {

   patient: Patientuser;
   vsign : Vsign;

   //@feature Mesurement for the Patient
  avg: Vsign;
  mx: Vsign;
  min: Vsign;

  //@feature State Code for patient
  status: number;
}
