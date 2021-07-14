import http from './httpCommon';

const PRODUTO_URL = '/produto';

const ObterTodos = () => {
  return http.get(ULR_PRODUTO);
};

const ObterPorId = (id) => {
  return http.get(`${ULR_PRODUTO}/${id}`);
};

const adicionar = (data) => {
  return http.post(ULR_PRODUTO, data);
};

const atualizar = (id, data) => {
  return http.put(`${ULR_PRODUTO}/${id}`, data);
};

const deletar = (id) => {
  return http.delete(`${ULR_PRODUTO}/${id}`);
};

export default {
  ObterTodos,
  ObterPorId,
  atualizar,
  deletar,
  listarID,
};