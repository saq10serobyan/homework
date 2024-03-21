
//task1

class Author {
    constructor(name, email, gender) {
        this.name = name
        this.email = email
        this.gender = gender
    }
    get n() {
        return this.name
    }
    get e() {
        return this.email
    }
    get gend() {
        return this.gender
    }
    toString() {
        return 'this is toString method in Author class'
    }
}
let a = new Author('saq', 'ssa', 'male')


class Book {
    constructor(title, author, price, quantity) {
        this.title = title
        this.author = author
        this.price = price
        this.quantity = quantity
    }
    get tit() {
        return this._title
    }
    set tit(v) {
        this._title = v
    }
    get aut() {
        return this._author
    }
    set aut(v) {
        this._author = v
    } get pr() {
        return this._price
    }
    set pr(v) {
        this._price = v
    } get quant() {
        return this._quantity
    }
    set quant(v) {
        this._quantity = v
    }
    getProfit(price, quantity) {
        return price * quantity
    }
    toString() {
        return 'this is tostring method in book class'
    }
}
let b = new Book('EL', a, 200, 20)


//task2

class Account {
    constructor(id, name, balance) {
        this.id = id
        this.name = name
        this.balance = balance
    }
    static compare(ac1, ac2) {
        for (const key in ac1) {
            if (!(ac1[key] === ac2[key])) {
                return 'false'
            }
        }
        return true
    }
    get i() {
        return this.id
    }
    get n() {
        return this._name
    }
    set n(v) {
        this._name = v
    }
    get b() {
        return this._balance
    }
    set b(v) {
        this._balance = v
    }
    credit(amaount) {
        this.balance += amaount
        return this.balance
    }
    debit(amaount) {

        if (this.balance > amaount) {
            this.balance -= amaount
            return `your balance now is ${this.balance}`
        } else {
            return 'Amount exceeded balance.'
        }
    }
    transferTo(anotherAcc, amaount) {
        if (this.balance > amaount) {
            anotherAcc.balance += amaount
            this.balance -= amaount
            return this.balance
        } else {
            return 'Amount exceeded balance.'
        }
    }
    toString() {
        return 'this is tostring method iN Account class'
    }
}

let c = new Account(12, 'saq', 2311)
let d = new Account(12, 'saq', 231)


//task 3

class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
    }
    get fn(){
        return this._firstName
    }
    set fn(v){
        this._firstName = v
    }
    get ln(){
        return this._lastName
    }
    set ln(v){
        this._lastName = v
    }
    get gen(){
        return this._gender
    }
    set gen(v){
        this._gender = v
    }
    get ag(){
        return this._age
    }
    set ag(v){
        this._age = v
    }
    toString(){
        return 'this is tostring method in person class'
    }
}

class Student extends Person{
    constructor(array,year, fee){
        this.programName = array[0]
        this.grade = array[1]
        this.year = year
        this.fee = fee
    }
    get pn(){
        return this._programName
    }
    set pn(v){
        this._programName = v
    }
    get gr(){
        return this._grade
    }
    set gr(v){
        this._grade = v
    }
    get y(){
        return this._year
    }
    set y(v){
        this._year = v
    }
    get f(){
        return this._fee    
    }
    set f(v){
        this._fee = v
    }
    passExam(programName,grade){
        if(grade === 'great' || grade === 50){
            this.year += 1
        }
    }
    toString(){
        return 'this is tostring method in student class'
    }
}
