let fullName = "Brenda Kaye"
parseAndDisplayName(fullName)
fullName = "Ian Auston"
parseAndDisplayName(fullName)
fullName = "Siddalee Grace"
parseAndDisplayName(fullName)

function parseAndDisplayName(name1) {
 let space = fullName.indexOf(" ");   

console.log("Full Name: " + name1)
console.log("First Name: " + name1.substring(0, space))
console.log("Last Name: " + name1.substring(space + 1,))
}