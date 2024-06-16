function mostrarCamposProduto() {
    const cliente = document.getElementById('cliente').value;
    if (cliente) {
        document.getElementById('produtoCampos').style.display = 'block';
    } else {
        alert('Por favor, selecione um cliente.');
    }
}


