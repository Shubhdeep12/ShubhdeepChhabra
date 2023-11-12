import type { NextApiRequest, NextApiResponse } from 'next'
import { createHash } from 'crypto'
import { prisma } from '@/utils/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const ip = req.headers['x-forwarded-for'] || '0.0.0'
	const slug = req.query.slug?.toString()
	const reactionType = req.body.type?.toString()

	const isReaction: Record<string, string> = {
		like: 'isLiked',
		love: 'isLoved',
		bookmark: 'isBookmarked',
	}

	try {
		const userId = createHash('md5')
			.update(ip + (process.env.IP_ADDRESS_SALT || ''), 'utf-8')
			.digest('hex')

		const user_session = `${slug}__${userId}`

		if (req.method === 'GET') {
			const [reactions, userSession] = await Promise.all([
				prisma.reactions.findUnique({
					where: { slug },
				}),
				prisma.session.findUnique({
					where: { id: user_session },
				}),
			])
			res.status(200).json({
				reactions: {
					like: (reactions?.like || 0).toString(),
					love: (reactions?.love || 0).toString(),
					bookmark: (reactions?.bookmark || 0).toString(),
				},
				userSession,
			})
		}

		if (req.method === 'POST') {
			const [newOrUpdatedReactions, newOrUpdatedUserSession] = await Promise.all([
				prisma.reactions.upsert({
					where: { slug },
					create: {
						slug: slug || '',
					},
					update: {
						[reactionType]: {
							increment: 1,
						},
					},
				}),

				prisma.session.upsert({
					where: { id: user_session },
					create: {
						id: user_session,
						[isReaction[reactionType]]: true,
					},
					update: {
						[isReaction[reactionType]]: true,
					},
				}),
			])

			res.status(200).json({
				reactions: {
					like: (newOrUpdatedReactions?.like || 0).toString(),
					love: (newOrUpdatedReactions?.love || 0).toString(),
					bookmark: (newOrUpdatedReactions?.bookmark || 0).toString(),
				},
				userSession: newOrUpdatedUserSession,
			})
		}
	} catch (e: any) {
		return res.status(500).json({ message: e.message })
	}
}
