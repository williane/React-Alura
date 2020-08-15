export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(client) {
        if (client instanceof Client) {

            this._cliente = client;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        const temSaldo = this._saldo >= valor;
        // temSaldo ? this._saldo -= valor : console.log('saldo insuficiente');
        if (temSaldo) {
            this._saldo -= valor;
            return valor;
        } else {
            return 0;
        }
    }

    depositar(valor) {
        const ehPositivo = valor > 0;
        ehPositivo ? this._saldo += valor : console.log('valor não pode ser negativo');
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        valorSacado > 0 ? conta.depositar(valorSacado) : console.log('não foi possivel transferir');
    }
}