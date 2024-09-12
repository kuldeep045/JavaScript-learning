const accountId = 1234;
let accountEmail =" cooldeep@google.com";
var accountPassword = 12344; //has global scope and create problem in functional and bloock scope so it is not used most of the time...
accountCity = "Fairborn";

let accountState; //show undefined  if not assigned any value


console.log(accountEmail + " " + accountId + " " + accountPassword + " " + accountCity)

// accountId = 54534; //cant change a constant



//can change these
accountEmail = "cooldeep@microsoft.com";
accountPassword = "8789797";
accountCity = "Dallas";

console.log(accountEmail + " " + accountId + " " + accountPassword + " " + accountCity);

console.log(accountState);

