export function list(){
	return [
	  {
		theme: "warning",
		color: "yellow",
	    icon: "ui-1_simple-remove",
	  },
	  {
		theme: "info",
		color: "blue",
	    icon: "ui-1_simple-remove",
	  },
	  {
		theme: "success",
		color: "green",
	    icon: "ui-1_simple-remove",
	  },
	  {
		theme: "primary",
		color: "orange",
	    icon: "ui-1_simple-remove",
	  },
	  {
		theme: "danger",
		color: "red",
	    icon: "ui-1_simple-remove",
	  },
	  {
		theme: "default",
		color: "black",
	    icon: "ui-1_simple-remove",
	  },
	];
}
export function count(){
	return list().length;
}