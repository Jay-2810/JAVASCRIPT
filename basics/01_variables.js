const id=202201187
let name="Jay Patel"
var pass="123456"
city="Surat"
let address
// Use let instead of var because of issue in block scope and functional scope
// scope means {} this

// Try to change const
// id=202201188
console.log(id)
console.table([id,name,pass,city,address])
// if something is not defined and we try to print it then node simply print undefined