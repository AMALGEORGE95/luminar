class bank{
    accountcreate(acno,ac_type,balance){
        this.accno=acno;
        this.ac_type=ac_type;
        this.balance;

    }
    deposit(amount)
    {
        this.balance+=amount;
        console.log(`your account number ${this.acno} has been credited with amount ${amount} `)
    }
    withdrawal(amount){
        if(this.balance>=amount)
        {
            this.balance-+amount
            console.log(`withdrawed rs ${amount}`)

        }
        else{
            console.log("insufficient balance")
        }
    }
}
var obj=new bank
obj.accountcreate(100,"savings,20000")
obj.deposit(20000)
obj.withdrawal(8000)
