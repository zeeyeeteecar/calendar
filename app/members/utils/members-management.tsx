import { PrismaClient } from "@prisma/client";

import { prisma } from "@/app/lib/db";

export interface PostProps {
  ID: number;
  StaffFName: string | null;
  StaffLName: string | null;
}

import React from "react";

// export default function fetchAllMembers() {
//   return (
//     <div>fetchAllMembers</div>
//   )
// }

// export default async function fetchAllMembers(): Promise<PostProps[]> {
//   const prisma = new PrismaClient();
//   //const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await prisma.tAdmin.findMany({
//     select: {
//       ID: true,
//       StaffFName: true,
//       StaffLName: true,
//     },
//   });

//   return posts;
// }

export async function fetchAllMembers(): Promise<PostProps[]> {
  //const prisma = new PrismaClient();

  // const data = await fetch("http://localhost:3000/api/listAllMembers")
  //   .then((response) => response.json())
  //   .catch((error) => console.log(error));

  const posts = await prisma.tAdmin.findMany({
    select: {
      ID: true,
      StaffFName: true,
      StaffLName: true,
    },
    take: 10,
    orderBy: [{ ID: "desc" }],
  });

  return posts;
}

////////////////////--------------------------------------------------------------------------------

// export const member_AddNew = async (firstName: string, lastName: string) => {
//   const prisma = new PrismaClient();
//   if (typeof firstName !== "string" || firstName.length === 0) {
//     throw new Error("Invalid title");
//   }

//   await prisma.tAdmin.create({
//     data: { StaffFName: "StaffFName", StaffLName: "StaffFName" },
//   });

//   const posts = await prisma.tAdmin.findMany({
//     select: {
//       ID: true,
//       StaffFName: true,
//       StaffLName: true,
//     },
//   });

//   return posts;
// };
