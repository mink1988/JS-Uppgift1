export default class user {
    constructor (firstName, lastName, emailAddress, phoneNumber, deliveryAddress, zipCode, postalCity) {
        this.firstName = firstName
        this.lastName = lastName
        this.emailAddress = emailAddress
        this.phoneNumber = phoneNumber
        this.deliveryAddress = deliveryAddress
        this.zipCode = zipCode
        this.postalCity = postalCity
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`
    }
    get id() {
        return Date.now().toString()
    }

}

