export class User {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: number;
    address: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.dateOfBirth = obj ? obj.dateOfBirth : '';
        this.address = obj ? obj.address : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }


    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            dateOfBirth: this.dateOfBirth,
            address: this.address,
            zipCode: this.zipCode,
            city: this.city
        };
    }
}