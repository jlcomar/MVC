class ListaNegociacoes {

    constructor() {

        this._negociaçoes = [];
    }

    adiciona(negociacao) {

        this._negociaçoes.push(negociacao);
    }

    get negociacoes() {

        return [].concat(this._negociaçoes);
    }
}