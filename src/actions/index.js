export const LOGIN = 'LOGIN';
export const SELECTCURRENCY = 'SELECTCURRENCY';
export const ADDEXPENSE = 'ADDEXPENSE';
export const TOTALHEADER = 'TOTALHEADER';
export const DELETEEXPENSE = 'DELETEEXPENSE';
export const IS_EDITING = 'IS_EDITING';

export function login(email) {
  return {
    type: LOGIN,
    email,
  };
}

export function actionSelectCurrency(currency) {
  return {
    type: SELECTCURRENCY,
    currency,
  };
}

export function addExpense(expense) {
  return {
    type: ADDEXPENSE,
    expense,
  };
}

export function deleteExpense(expense) {
  return {
    type: DELETEEXPENSE,
    expense,
  };
}

export function totalHeader(newTotal) {
  return {
    type: TOTALHEADER,
    newTotal,
  };
}

export function isEditing(condition) {
  return {
    type: IS_EDITING,
    condition,
  };
}

export function fetchCurrency() {
  return async (dispatch) => {
    const infoAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const infoJSON = await infoAPI.json();
    dispatch(actionSelectCurrency(infoJSON));
  };
}
