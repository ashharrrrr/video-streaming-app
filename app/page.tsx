import Image from "next/image";

import { drizzle } from "drizzle-orm/neon-http";
import { UserTable } from "../db/schema";

export default async function Home() {
  const db = drizzle(process.env.DATABASE_URL!);

  await db.insert(UserTable).values({
    name: "Ayush",
    email: "soni.ayush.2212@gmail.com",
    password: "chika",
  });

  const users = await db.select().from(UserTable);
  console.log(users);

  return <div>User Table</div>;
}
