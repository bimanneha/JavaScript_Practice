const profile = {
    firstName: '',
    lastName: '',
    setName: function(name) {
        let splitName = (name) => {
            let nameArray = name.split(' ');
            this.firstName = nameArray[0];
            this.latName = nameArray[1];

        }

        splitName(name);
    }
}

profile.setName('Neha Biman');
console.log(`First Name : ${profile.firstName}`);