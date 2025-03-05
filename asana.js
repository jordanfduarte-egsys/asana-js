
const TOEKN_ASANA = "TOKEN AQUI DO ASANA"; // ver em https://developers.asana.com/docs/personal-access-token
const PROJECT_ASANA = "1208140340524740"; // Criar um projeto no site https://app.asana.com/ e copiar código da URL e colar aqui EX:
// https://app.asana.com/0/1208140340524740/1208140512477521

const URL_ASANA = "https://app.asana.com/api/1.0"; // Não mexer


////CRUD CRIAR - passar no parâmetro do método o valor
// - passar no parâmetro no callbak o function(resposeta) {}, do que vai ocorrer depois do get all
function createTaskAsana(name, callback = null) {
    const body = JSON.stringify({
        data: {
            name,
            projects: [PROJECT_ASANA],
            resource_type: "task",
            resource_subtype: "default_task"
        }
    });
    const options = {
        method: 'POST',
        headers: new Headers({
            'Authorization': `Bearer ${TOEKN_ASANA}`,
            'Content-Type': 'application/json'
        }),
        body
    }

    fetch(`${URL_ASANA}/tasks?project=${PROJECT_ASANA}`, options).then((resp) => { if (callback) callback(resp) });
}


/// CRUD UPDATE - passar no parâmetro o id obtido no método getAllTaskAsana e o novo valor
// - passar no parâmetro no callbak o function(resposeta) {}, do que vai ocorrer depois do get all
function updateTaskAsana(id, name, callback = null) {
  const body = JSON.stringify({
      data: {
          name,
          resource_type: "task",
          resource_subtype: "default_task"
      }
  });
  const options = {
      method: 'PUT',
      headers: new Headers({
          'Authorization': `Bearer ${TOEKN_ASANA}`,
          'Content-Type': 'application/json'
      }),
      body
  }

  fetch(`${URL_ASANA}/tasks/${id}`, options).then((resp) => { if (callback) callback(resp) });
}

/// CRUD LISTAR - passar no parâmetro somente o function(resposeta) {}, do que vai ocorrer depois do get all
function getAllTaskAsana(callback = null) {
  const options = {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${TOEKN_ASANA}`,
          'Content-Type': 'application/json'
      },
  }

  fetch(`${URL_ASANA}/tasks?project=${PROJECT_ASANA}`, options).then((resp) => { if (callback) callback(resp) });
}


///CRUD DELETAR - passar o id obtido no método getAllTaskAsana
// - passar no parâmetro no callbak o function(resposeta) {}, do que vai ocorrer depois do get all
function deleteTaskAsana(id, callback) {
  const options = {
      method: 'DELETE',
      headers: new Headers({
          'Authorization': `Bearer ${TOEKN_ASANA}`,
          'Content-Type': 'application/json'
      }),
  }

  fetch(`${URL_ASANA}/tasks/${id}`, options).then((resp) => { if (callback) callback(resp) });
}


/**
 * Como utilizar ?
 * 
 * Chamar o método createTaskAsana("NOMEITEM NOVO", function(resposta) {
 *   // AQUI DENTRO É A RESPOSTA DO MÉTODO CRIAR
 *   console.log(resposta);
 * });
 * 
 * Chamando o método getAllTaskAsana(function(resposta) {
 *    // AQUI DENTRO É A LISTA DE TAREFAS RETORNADAS
 *   console.log(resposta);
 * });
 * 
 * Chamando o método updateTaskAsana(ID_OBTIDO_NO_ITEM_PELO_METODO_GET_ALL, "NOVO VALOR", function(resposta) {
 *   // RESPOSTA DO EDITAR
 *   console.log(resposta);
 * });
 * 
 * Chamando o método deleteTaskAsana(ID_OBTIDO_NO_ITEM_PELO_METODO_GET_ALL, function(resposta) {
 *   // RESPOSTA DO DELETE
 *   console.log(resposta);
 * });
 */
