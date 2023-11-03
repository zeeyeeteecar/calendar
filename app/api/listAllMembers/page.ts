// //import { prisma } from "@/app/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// // //const prisma = new PrismaClient();

// // async function getData() {
// //   const result: any = await prisma.tAdmin.findMany();
// //   return result;
// // }

// // export default async function handle(req: NextApiRequest, resp: NextApiResponse)  {

// //   const result: any = await getData();
// //   await prisma.$disconnect();
// //   return resp.json(result);
// // }

// // Fetch all posts (in /pages/api/posts.ts)
// const prisma = new PrismaClient();

export interface PostProps {
  ID: number;
  StaffFName: string | null;
  StaffLName: string | null;
}

// type ResponseData = {
//   message: string
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   const posts = await prisma.tAdmin.findMany({
//     select: {
//       ID: true,
//       StaffFName: true,
//       StaffLName: true,
//     },
//   });
//   return res.json({ message: 'Hello from Next.js!' })
// }
//
// import type { NextApiRequest, NextApiResponse } from "next";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   return NextResponse.json({ msg: "Successfuly created new User: " + "newUser" ,status:200})
//   //res.status(200).json({ message: "Hello from Next.js!" });
// };

// // export default handler;

// const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

// const API_KEY: string = process.env.DATA_API_KEY as string;

// export default async function GET() {
//   const res = await fetch(DATA_SOURCE_URL);

//   const todos = await res.json();

//   return NextResponse.json(todos);
// }
