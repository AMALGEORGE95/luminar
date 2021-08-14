var account_details={
    1000:{acno:1000,balance:2000,username:"userone",password:"userone"},
    1001:{acno:1001,balance:3000,username:"usertwo",password:"usertwo"},
    1002:{acno:1002,balance:2002,username:"userthree",password:"userthree"},
    1003:{acno:1003,balance:20000,username:"userfour",password:"userfour"}
}
//check for 1000 is present ot not
console.log(1000 in account_details);
//print username and password of 1001
console.log(account_details[1001].username)
console.log(account_details[1001].password)
console.log(account_details[1003].balance)