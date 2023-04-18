import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  res.json({ now: Date.now() })
}

export default handler
