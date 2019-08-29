import { toastr } from "react-redux-toastr";
import axios from "axios";
import consts from "../consts";

// login
export function login(values) {
  return submit(values, `${consts.OAPI_URL}/login`);
}

// signup
export function signup(values) {
  return submit(values, `${consts.OAPI_URL}/signup`);
}

// metodo para submetor o formulário de autenticação
function submit(values, url) {
  return dispatch => {
    axios
      .post(url, values)
      .then(res => {
        dispatch([
          {
            type: "USER_FETCHED",
            payload: res.data // usuário obtido
          }
        ]);
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error("Erro", error));
      });
  };
}

// logout, dispara uma action com payload false e coloca o usuário como nulo
export function logout() {
  return {
    type: "TOKEN_VALIDATED",
    payload: false
  };
}

// função para validar o token
export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios
        .post(`${consts.OAPI_URL}/validateToken`, { token })
        .then(res => {
          dispatch({
            type: "TOKEN_VALIDATED",
            payload: res.data.valid
          });
        })
        .catch(e =>
          dispatch({
            type: "TOKEN_VALIDATED",
            payload: false
          })
        );
    } else {
      dispatch({
        type: "TOKEN_VALIDATED",
        payload: false
      });
    }
  };
}
