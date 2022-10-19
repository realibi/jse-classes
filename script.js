






let user = {
    login: "realibi",
    passwords: ["asd123", "qwerty"],
    location: {
        city: "Almaty",
        street: "Navoi",
    },
    loginFunc: function(){
        console.log(`${this.passwords[0]} logged in`);
    }
}

user.loginFunc();
