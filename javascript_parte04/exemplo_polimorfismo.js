class Conta {
    constructor(){
        this.saldo = 0;
    }

    get Saldo(){return this.saldo;}
    set Saldo(pSaldo){this.saldo = pSaldo;}

    imprimir(){
        return "Saldo: " + this.saldo;
    }
}

class Corrente extends Conta {
    constructor(pLimite){
        super();
        this.Limite = pLimite
    }
    get Limite(){return this.Limite;}
    set Limite(pLimite){this.limite = pLimite;}

}

imprimir(){
    return super.imprimir() + "\nLimite " + this.limite
}

// Javascript não possui conceito de sobrecarga.
