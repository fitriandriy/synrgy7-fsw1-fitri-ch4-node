const volumeKubus = (sisi) => {
  return sisi**3
}

const luasPermukaanKubus = (sisi) => {
  return 6 * (sisi**2)
}

module.exports = {
  volumeKubus,
  luasPermukaanKubus
}