var datas=[
    {acno:1000,ac_type:"savings",balance:5000,transactions:[
        {to:1001,amount:500,note:"food"},
        {to:1003,amount:600,note:"travel"},
        {to:1001,amount:700,note:"ball"}

    ]},
    {acno:1001,ac_type:"savings",balance:6000,transactions:[
        {to:1000,amount:550,note:"bill"},
        {to:1002,amount:900,note:"emi"},
        {to:1002,amount:650,note:"bill"}

    ]},
    {acno:1002,ac_type:"savings",balance:8000,transactions:[
        {to:1001,amount:600,note:"clothing"},
        {to:1000,amount:800,note:"travel"},
        {to:1000,amount:6700,note:"cycle"}

    ]}]
   // datas.map(accnt=>accnt.transactions).filter(acc=>acc.forEach(dd=>dd.to==1001?console.log(dd):""))
   payment_history=[]
   var credit_transs=datas.map(account=>account.transactions).forEach(transactions=>{transactions.forEach(trans=>{trans.to==1000?payment_history.push(trans):""})})
   datas.filter(account=>account.accno==1000).map(account=>payment_history.push(account.transactions))
   console.log(payment_history)

