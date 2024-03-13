import { DioAccount } from "./DioAccount"
export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.status) {
      this.balance = this.balance + value
      console.log(`Empréstimo de R$${value} aprovado. Seu saldo atual é R$${this.balance}.`)
    } else {
      console.log('Empréstimo não aprovado. Conta inválida.')
    }
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + value
      console.log('Você depositou R$' + value)
      console.log('Seu saldo é: R$' + this.balance)
    }
  }

  withdraw = (value: number): void => {
    if(value <= this.getBalance() && this.status){
      this.balance = this.balance - value
      console.log('Você sacou R$' + value)
      console.log('Seu saldo é: R$' + this.balance)
    } else {
      console.log('Saque não permitido. Saldo insuficiente ou conta inválida.')
    }
  }
}

