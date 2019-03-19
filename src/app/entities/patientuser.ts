import { Vsign } from "./vsign";

export class Patientuser {
  /**
   *
   */
  constructor(
    public did: string, //doctor ID
    public id: string,
  
    public first: string,
    public last: string,
    public born: string,
    public gender: string,
    public email: string

  ) {


  }


}
