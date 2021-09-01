// submitting sign up form
const signUpForm = document.querySelector(".login-form");

const signUpUser = async (username, password, email) => {
	try {
		const res = await axios({
			method: "POST",
			url: "/api/v1/users/signup",
			data: {
				username,
				password,
				email,
			},
		});
		M.toast({
			html: `You have been registered. You will be redirected soon.`,
			classes: "success-toast",
		});
		setTimeout(() => {
			location.assign("/play");
		}, 2000);
	} catch (err) {
		M.toast({ html: `${err.response.data.message}`, classes: "error-toast" });
	}
};

signUpForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const email = document.getElementById("email").value;

	signUpUser(username, password, email);
});
