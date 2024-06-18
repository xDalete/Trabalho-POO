export default class Orcamento {
    id
    cliente
    /** 
    * @type {Produto[]} 
    */
    produtos = []
    /**
     * @param {number} id 
     * @param {Cliente} cliente 
     * @param {produtos[]} produtos 
    */
    constructor(id, cliente, produtos) {
        this.id = id;
        this.cliente = cliente
        this.produtos = produtos
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getCliente() {
        return this.cliente
    }

    setCliente(cliente) {
        this.cliente = cliente
    }

    getProdutos() {
        return this.produtos
    }

    setProdutos(produtos) {
        this.produtos = produtos
    }

    /** 
    * @param {Produto} produto
    */
    addProduto(produto) {
        this.produtos.push(produto)
    }
}