import Produto from "../lib/Produto.js";
// import Cliente from "../lib/Cliente.js";
import Orcamento from "../lib/Orcamento.js";
import DB from "../lib/Database.js";

// essa pagina ainda não funciona corretamente
// cadastre um cliente pela pagina de adicionar cliente e ele vai aparecer no select de cliente 

DB.produto.add(new Produto(-1, "sim", 10, 15, 10))
DB.cliente.get()[0] && DB.orcamento.add(new Orcamento(-1, DB.cliente.get()[0], DB.produto.get()))
console.log(DB.produto.get())
console.log(DB.cliente.get())
console.log(DB.orcamento.get())



function updateProdutos() {
    document.getElementById("cliente").innerHTML = '<option value="">Selecione um cliente</option>'
    DB.cliente.get().forEach(cliente => {
        const option = document.createElement('option')
        option.value = cliente.id
        option.innerText = cliente.nome
        document.getElementById("cliente").appendChild(option)
    })
}
updateProdutos()