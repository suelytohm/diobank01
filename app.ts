import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Suelytohm', 10)
console.log(peopleAccount)
peopleAccount.deposit(20720)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(150000)
console.log(companyAccount)