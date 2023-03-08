import { baseUrl } from "./base_url";
import { User } from "../../../server/src/types/posts.types";

export async function fetchAllUsers():Promise <Array<User>> {
	try {
		const result = await fetch(baseUrl + "/api/users/all");
		const users = await result.json();
		return users;
	} catch {
		return [];
	}
}
