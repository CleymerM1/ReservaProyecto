export class Denuncias{
    _id?: number;
    NombreDenunciado:string;
    ApellidoDenunciado:string;
    correo:string;
    idDenunciante:number;
    NombreDenunciante:string;
    ApellidoDenunciante:string;
    correoDenunciante: string;
    asunto:string;
    estado:string;

    constructor(NombreDenunciado: string, ApellidoDenunciado:string,  correo:string, idDenunciante:number, NombreDenunciante: string, ApellidoDenunciante:string,correoDenunciante:string, asunto:string, estado:string){
        this.NombreDenunciado=NombreDenunciado;
        this.ApellidoDenunciado= ApellidoDenunciado;
        this.correo=correo;
        this.idDenunciante= idDenunciante;
        this.NombreDenunciante=NombreDenunciante;
        this.ApellidoDenunciante= ApellidoDenunciante;
        this.correoDenunciante=correoDenunciante;
        this.asunto=asunto
        this.estado=estado;
    }



}