export class Usuario {
    idusuario?:number;
    nombreusuario:string;
    apellidousuario:string;
    emailusuario: string;
    claveusuario: string;
    telefonousuario: string;
    direccionusuario: string;

    
    constructor(nombreusuario: string,apellidousuario: string,emailusuario: string,claveusuario: string,telefonousuario: string, direccionusuario: string){
        this.nombreusuario = nombreusuario;
        this.apellidousuario = apellidousuario;
        this.emailusuario = emailusuario;
        this.claveusuario = claveusuario;
        this.telefonousuario = telefonousuario;
        this.direccionusuario = direccionusuario;
    }

}
