const list = [
	  {
		mode: "advanced",
		default: false,
	  },
	  {
		mode: "simple",
		default: true,
	  },
	];

const count = () => {
	return list.length;
}

export default { list, count }