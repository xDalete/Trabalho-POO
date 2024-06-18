import Cliente from "../lib/Cliente.js";
import DB from "../lib/Database.js";

const nomeInput = document.getElementById('nome')
const nomeFantasiaInput = document.getElementById('nome-fantasia')
const emailInput = document.getElementById('email')
const telefoneInput = document.getElementById('telefone')
const cpfInput = document.getElementById('cpf_cnpj')
const formCliente = document.getElementById('form-cliente');

formCliente.onsubmit = (event) => {
    event.preventDefault()

    const cliente = new Cliente(-1, nomeInput.value, nomeFantasiaInput.value, emailInput.value, telefoneInput.value, cpfInput.value)
    DB.cliente.add(cliente)
    console.log(DB.cliente.get())
    nomeInput.value = "";
    nomeFantasiaInput.value = "";
    emailInput.value = "";
    telefoneInput.value = "";
    cpfInput.value = "";
}
