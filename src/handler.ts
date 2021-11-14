export async function handleRequest(): Promise<Response> {
  const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1027,1839&CMC_PRO_API_KEY=5acf78bb-9771-4929-aa21-e9883867eb69&convert=USDT')
  return res
}
