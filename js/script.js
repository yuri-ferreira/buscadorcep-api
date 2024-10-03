const CEP = document.getElementById('cep')

const RUA = document.getElementById('rua')
const CIDADE = document.getElementById('cidade')
const ESTADO = document.getElementById('uf')
let cepAtv


const fetchCEP = async(CEP) => {
  const APIResponse = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
  const data = await APIResponse.json();
  return data;
}

const renderDados = async (CEP) => {
  const data = await fetchCEP(CEP);

  RUA.value = data.logradouro
  CIDADE.value = data.localidade
  ESTADO.value = data.uf
}

const btn = document.getElementById("btn1")

btn.addEventListener('click', () => {
  cepAtv = CEP.value;
  renderDados(cepAtv);
})
