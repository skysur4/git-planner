function setThemeColor(color){
	return window.localStorage.setItem("themeColor", color);
}

function getThemeColor(){
	const defaultColor = "black";
	const color = window.localStorage.getItem("themeColor");

	return (!color || color == "undefined")?defaultColor:color;
}

export default { setThemeColor, getThemeColor };