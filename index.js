const {volumeBalok, luasPermukaanBalok} = require('./balok')
const {volumeKubus, luasPermukaanKubus} = require('./kubus')
const {volumePrisma, luasPermukaanPrisma} = require('./prisma')

console.log(volumeBalok(12, 5, 7))
console.log(luasPermukaanBalok(12, 5, 7))
console.log(volumeKubus(9))
console.log(luasPermukaanKubus(9))
console.log(volumePrisma(5, 7, 10))
console.log(luasPermukaanPrisma(5, 7, 10))

// buat tiga module prisma, balok, kubus = volume dan luas permukaan