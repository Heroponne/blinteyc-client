//composant login
const LoginComponent = {
	data(){
		return {
			username: ""
		};
	},
	methods: {
		login(){
			let headers = {'sessionToken' : localStorage.getItem('sessionToken')};
			console.log("coucou " + this.username);
			axios
			.post('http://localhost/appli-blind-test/public/users/login', {'username' : this.username}, {headers: this.headers})
			.then(response => {
				console.log('Connexion réussie !');
				console.log(response.data.sessionToken);
				localStorage.setItem('sessionToken', response.data.sessionToken);
				localStorage.setItem('username', response.data.username);
				window.location.href = "home.html";
			})
			.catch(error => console.log(error))
		}
	}
}

const loginApp = Vue.createApp(LoginComponent)

const loginvm = loginApp.mount('#loginForm')
