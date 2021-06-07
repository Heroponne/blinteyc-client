//composant logout
const LogoutComponent = {
	data(){
		return {
			logged: false,
			sessionToken: localStorage.getItem('sessionToken')
		};
	},
	methods: {
		logout(){
			let headers = {'sessionToken' : localStorage.getItem('sessionToken')};
			axios
			.post('http://localhost/appli-blind-test/public/users/logout', undefined, {headers: headers})
			.then(response => {
				console.log('Déconnexion réussie !');
				localStorage.removeItem('sessionToken');
				this.logged = false;
				window.location.href = "login.html";
			})
			.catch(error => console.log(error))
		}
	},
	mounted() {
		if(localStorage.getItem('sessionToken')){
			this.logged = true;
		}
	}
}

const logoutApp = Vue.createApp(LogoutComponent)

logoutApp.mount('#logoutButton')