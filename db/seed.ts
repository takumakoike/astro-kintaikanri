import { db, Users } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Users).values([
		{userId: 1, userName: "takuma", userOccupation: "OT", userEmproyeeType: "パートタイマー"}
	]);
}
