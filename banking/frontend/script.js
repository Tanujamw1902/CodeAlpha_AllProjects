function goHome() {
    window.location.href = "../../index.html";
}

let account = null;

document.getElementById('create').onclick = ()=>{
    let name = document.getElementById('name').value;
    let bal = parseFloat(document.getElementById('balance').value)||0;
    if(name===''){ alert("Enter name"); return;}
    account = {name:name, balance:bal, transactions:[`Account created with balance ${bal}`]};
    document.getElementById('output').innerText = `Account for ${name} created.`;
};

document.getElementById('do-deposit').onclick = ()=>{
    if(!account){ alert("Create account first"); return;}
    let amt = parseFloat(document.getElementById('deposit').value)||0;
    if(amt<=0){ alert("Enter valid amount"); return;}
    account.balance += amt;
    account.transactions.push(`Deposited: ${amt}`);
    document.getElementById('output').innerText = `Deposited ${amt}. Current balance: ${account.balance}`;
};

document.getElementById('do-withdraw').onclick = ()=>{
    if(!account){ alert("Create account first"); return;}
    let amt = parseFloat(document.getElementById('withdraw').value)||0;
    if(amt<=0 || amt>account.balance){ alert("Invalid withdrawal"); return;}
    account.balance -= amt;
    account.transactions.push(`Withdrawn: ${amt}`);
    document.getElementById('output').innerText = `Withdrawn ${amt}. Current balance: ${account.balance}`;
};

document.getElementById('show-info').onclick = ()=>{
    if(!account){ alert("Create account first"); return;}
    let text = `Name: ${account.name}\nBalance: ${account.balance}\nTransactions:\n`;
    account.transactions.forEach(t=>{ text+= t+'\n';});
    document.getElementById('output').innerText = text;
};
