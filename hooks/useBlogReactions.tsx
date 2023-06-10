import useSWR, { SWRConfiguration } from 'swr'

export type Reactions = {
	reactions: Record<string, string>
	userSession: Record<string, unknown>
}

const API_URL = '/api/reactions'

async function getBlogReactions(slug: string): Promise<Reactions> {
	const res = await fetch(`${API_URL}/${slug}`)
	if (!res.ok) {
		throw new Error('An error occured while fetching reactions')
	}
	return res.json()
}

async function updateBlogReactions(slug: string, type: string): Promise<Reactions> {
	const res = await fetch(`${API_URL}/${slug}`, {
		method: 'POST',
		body: JSON.stringify({ type }),
		headers: { 'Content-Type': 'application/json' },
	})
	if (!res.ok) {
		throw new Error('An error occured while updating reactions')
	}
	return res.json()
}

export const useBlogReactions = (slug: string, config?: SWRConfiguration) => {
	const { data, error, mutate } = useSWR<Reactions>(`${API_URL}/${slug}`, () => getBlogReactions(slug), {
		dedupingInterval: 600000,
		...config,
	})

	const reactions = data?.reactions
	const user = data?.userSession

	const addReaction = (type: string) => {
		mutate(
			updateBlogReactions(slug, type).catch(() => {
				return {
					reactions: {
						like: '0',
						love: '0',
						bookmark: '0',
					},
					userSession: {},
				}
			})
		)
	}

	return {
		reactions,
		user,
		isLoading: !error && !reactions,
		isError: !!error,
		addReaction,
	}
}
