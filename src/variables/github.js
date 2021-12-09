const github = {
	authentication: "https://github.com/login/oauth/authorize",
	authroization: "/api/github/authorize",
	scope: "read:user repo",
	redirectUrl: "http://gitplanner.io/git-planner/login",
	cId: "f3062111e6c4986874b7",

	api: {
		profile: "https://api.github.com/user",
		createRepo: "/user/repos",
		createRepoParams: {
			'name': "gitplanner-data",
			'description': "깃플래너용 데이터 리포지토리",
			'private': true,
			'auto_init': true
		},
		getRepo: (owner) => {
				return "/repos/{owner}/gitplanner-data".replace("{owner}", owner);
		},
		header: function(token){
			return {
				'Authorization': 'token ' + token,
				'Content-Type': 'application/json',
				'Accept': 'application/vnd.github.v3+json'
			}
		}
	},

	header: function(){
		return {
			'Content-Type': 'application/json'
		}
	},
	body: function(data){
		return JSON.stringify(data);
	}
};

export default github;