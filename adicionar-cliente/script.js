class Clientes {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;

    }

    getNome() {
        return this.nome;
    }

    setNome(Novonome) {
        this.nome = Novonome
    }

    getEmail() {
        return this.email;
    }

    setEmail(Novoemail) {
        this.email = Novoemail
    }

    getTelefone() {
        return this.telefone;
    }

    setTelefone(Novotelefone) {
        this.telefone = Novotelefone
    }

    cliente() {
        return {
            nome: this.nome,
            email: this.email,
            telefone: this.telefone
        };
    }

    mostrarDados() {
        console.log(this.cliente());
    }
}

let cliente1 = new Clientes("Cleisson", "clp@gmail.com", "(33) 00000-0000");
let cliente2 = new Clientes("Pedro", "plp@gmail.com", "(33) 00000-0000");
let cliente3 = new Clientes("Lucas","ls@gmail.com","(33) 00000-0000")