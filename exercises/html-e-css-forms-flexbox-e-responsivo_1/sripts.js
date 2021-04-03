const selectStates = document.querySelector("#state");
const arrayStates = ['Selecione um estado' ,'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
  'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
  'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia','Roraima',
  'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const createOption = () => {
  for (let index = 0; index < arrayStates.length; index += 1 ) {
    const createOption = document.createElement('option');
    selectStates.appendChild(createOption).innerText = arrayStates[index];
    // selectStates.appendChild(createOption).value = arrayStates[index];
  } 
}
console.log(createOption());

