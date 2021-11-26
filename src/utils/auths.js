function setAuthState(state){
	return window.localStorage.setItem("state", state);
}

function getAuthState(){
	const state = window.localStorage.getItem("state");
	return state=='undefined'?null:state;
}

function setAuthToken(token){
	return window.localStorage.setItem("token", token);
}

function getAuthToken(){
	const token = window.localStorage.getItem("token");
	return token=='undefined'?null:token;
}

function createStateCode(){
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

export default { setAuthState, getAuthState, setAuthToken, getAuthToken, createStateCode };