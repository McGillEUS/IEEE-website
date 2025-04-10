import { posts } from '$lib/posts.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			date: post.date,
			background: post.background,
			location: post.location,
			shortDesc: post.shortDescription
		}))
	};
}
