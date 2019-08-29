import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = { credits: [{}] };

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request
  };
}

// ACTION que inicia
export function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("billingCycleForm", INITIAL_VALUES)
  ];
}

// ACTION que cria novo BC
export function create(values) {
  return submit(values, "post");
}

// ACTION que determina qual tabs será visualizada em atualizar
export function showUpdate(billingCycle) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("billingCycleForm", billingCycle)
  ];
}

// ACTION usada para remover uma BC
export function remove(values) {
  return submit(values, "delete");
}

// ACTION que determina qual tabs será visualizada em deletar
export function showDelete(billingCycle) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
    initialize("billingCycleForm", billingCycle)
  ];
}

// ACTION que determina a atualização do BC
export function update(values) {
  return submit(values, "put");
}

// Função que passa os valores e os metodos
function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : "";
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then(res => {
        toastr.success("Sucesso", "Operação realizada com sucesso!");
        dispatch(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error("Erro", error));
      });
  };
}
