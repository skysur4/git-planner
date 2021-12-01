const list = [
	  {
		locale: "ko_KR",
		language: "ko",
	    country: "Korea",
	    supported: true,
	  },
	  {
		locale: "en_US",
		language: "en",
	    country: "United States",
	    supported: true,
	  },
	  {
		locale: "id_ID",
		language: "id",
	    country: "Indonesia",
	    supported: false,
	  },
	];

const count = () => {
	return list.length;
}

export default { list, count }