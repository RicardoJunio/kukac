export class Data{
    name: string;
    cep: string;
    rm: string;
    nd: string;
    rpc: string;
    constructor(){
        this.name = '';
        this.cep = '';
        this.rm = '';
        this.nd = '';
        this.rpc = '';
    }

    setRendaPerCapita(){
        this.rpc = (parseInt(this.rm)/(parseInt(this.nd)+1)).toFixed(2).replace(".",",");
    }
}