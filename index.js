class Contact {
    constructor(name, phone, email, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.user = [{
            name: "superman",
            phone: "313-867-5309",  
            email: "super@man.com",            
            relation: "student"
        }];
    }
    add(info) {
        this.user.push(info);
    }
    deleteAt(index) {
        this.user.splice(index, 1);
    }
    print() {
        this.user.forEach((user) => {
            console.log(`name: ${user.name}  P: ${user.phone}  E: ${user.email}  R: ${user.relation}`);
        })
    }
}

let addressBook = new AddressBook();
while (true) {
    let choice = prompt("Add, Remove, Print, or Quit?");
    if (choice === "add") {
        let name = prompt("Name?");
        let phone = prompt("Phone?");
        let email = prompt("Email?");        
        let relation = prompt("Relation?");
        addressBook.add(new Contact(name, email, phone, relation));
    } else if (choice === "remove") {
        let number = prompt("Index to delete?");
        addressBook.deleteAt(number);
    } else if (choice === "print") {
        console.log("");
        addressBook.print();
    } else {
        console.log("");
        console.log("Farewell.");
        break;
    }
}







