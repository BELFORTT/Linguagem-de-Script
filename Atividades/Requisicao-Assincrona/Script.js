function limpaErros() {
    document.querySelector("#msg-cep").textContent = "";
}

const cepInput = document.getElementById("cep");
const inputRua = document.getElementById("rua");
const inputBairro = document.getElementById("bairro");
const inputEstado = document.getElementById("estado");
const inputCidade = document.getElementById("cidade");
const erroCep = document.getElementById("msg-cep");

cepInput.addEventListener("blur", async function () {
    let cep = cepInput.value.replace(/\D/g, "");
    if (cep.length === 8) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            
            if (!data.erro) {
                inputRua.value = data.logradouro;
                inputBairro.value = data.bairro;
                inputEstado.value = data.uf;
                inputCidade.value = data.localidade;
                limpaErros();

            } else {
                erroCep.textContent = "CEP inválido!";
                erroCep.style.color = "red";
            }
        } catch (error) {
            console.log("Deu ruim!");
        }
    } else {
        erroCep.textContent = "CEP inválido!";
        erroCep.style.color = "red";
    }
});
