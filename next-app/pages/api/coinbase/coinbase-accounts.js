import coinbaseAuth from './auth'
import axios from './axios'
require('dotenv').config()

export default async function handler(req, res) {
  const [cb_access_sign, timestamp] = coinbaseAuth(
    'GET',
    '/coinbase-accounts',
    '',
  )

  try {
    const response = await axios({
      method: 'GET',
      url: 'coinbase-accounts',
      headers: {
        Accept: 'application/json',
        'CB-ACCESS-KEY': process.env.CB_ACCESS_KEY,
        'CB-ACCESS-SIGN': cb_access_sign,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-PASSPHRASE': process.env.CB_PASSPHRASE,
      },
    })
    res.status(200).json(response.data)
  } catch (err) {
    res.status(500).json({ Error: `Failed to fetch accounts: ${err}` })
  }
}
