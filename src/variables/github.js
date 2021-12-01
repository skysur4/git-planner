const github = {
	authentication: "https://github.com/login/oauth/authorize",
	authroization: "/api/github/authorize",
	scope: "read:user repo",
	redirectUrl: "http://gitplanner.io/git-planner/common/login",
	cId: "f3062111e6c4986874b7",

	api: {
		profile: "https://api.github.com/user",
	},

	header: function(token){
		return {
			'Authorization': 'token ' + token
		}
	}
};

export default github;