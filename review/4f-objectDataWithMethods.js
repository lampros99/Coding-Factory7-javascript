const user = {
    firstname:"George",
    lastname: "papado",
    getFirstName: function(){
        return this.firstname
    },

    getFullname(){
        return `${this.firstname}, ${this.lastname}`
    }
}

console.log(user.getFirstName)
console.log(user.getFullname)