export async function getDollar() {
  const res = await fetch('https://mindicador.cl/api/dolar')
  const data = await res.json()

  return data.serie[0].valor
}