import { baseUrl } from "./base_url";
import { Post } from '../../../server/src/types/posts.types'

export async function fetchAllPosts(): Promise<Array<Post>> {
	try {
		const result = await fetch(baseUrl + "/api/posts/all");
		const posts = await result.json();
		return posts
	} catch {
		return [];
	}
}
