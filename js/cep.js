async function buscarCep() {
    try {
        const cep = document.getElementById('cep').value
        const response = await fetch(`http://viacep.com.br/ws/${cep}/json`)
        const data = await response.json()

        const logradouro = document.getElementById('logradouro')
        const bairro = document.getElementById('bairro')
        const uf = document.getElementById('uf')

        logradouro.innerText = data.logradouro
        bairro.innerText = data.bairro
        uf.innerText = data.uf

    }

    catch (error) {
        error.message = "Não foi possível localizar o CEP informado. Verifique se digitou corretamente."
        alert(error.message)
    }
}