const volumePrisma = (alas, tinggiAlas, tinggiPrisma) => {
  return (1/2 * alas * tinggiAlas) * tinggiPrisma
}

// segitiga sama sisi
const luasPermukaanPrisma = (alas, tinggiAlas, tinggiPrisma) => {
  return (2 * (1/2 * alas * tinggiAlas)) + (alas * 3 * tinggiPrisma)
}

module.exports = {
  volumePrisma,
  luasPermukaanPrisma
}