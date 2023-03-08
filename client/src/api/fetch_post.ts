import { baseUrl } from "./base_url";
import {Post} from  "../../../server/src/types/posts.types"

export async function fetchPost(id: number):Promise<Post | []> {
	try {
		const result = await fetch(baseUrl + "/api/posts/" + id);
		const post = await result.json();
		return post;
	} catch {
		return [];
	}
}
