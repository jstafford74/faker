import faker from "faker";

class User {
    constructor(name, avatar, email, color) {
        this.name = name;
        this.avatar = avatar;
        this.email = email;
        this.color = color;
    }

    getUserData() {
        return `
        Name: ${ this.name}
        Avatar: ${ this.avatar}
        Email: ${ this.email}
        Color: ${ this.color}
    `;
    }

    makeUserData() {
        this.name = faker.internet.userName();
        this.avatar = faker.internet.avatar();
        this.email = faker.internet.email();
        this.color = faker.internet.color();
    };
}

export default User;

