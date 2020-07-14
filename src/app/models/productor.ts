export class Productor {
    idproductor?: number;
    nombreproductor: string;
    apellidoproductor: string;
    emailproductor: string;
    claveproductor: string;
    telefonoproductor: string;


    constructor(nombreproductor: string,apellidoproductor: string,emailproductor: string,claveproductor: string,telefonoproductor: string){
        this.nombreproductor = nombreproductor;
        this.apellidoproductor = apellidoproductor;
        this.emailproductor = emailproductor;
        this.claveproductor = claveproductor;
        this.telefonoproductor = telefonoproductor;
    
    }
}

