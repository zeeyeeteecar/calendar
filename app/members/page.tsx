import React from "react";
import { prisma } from "@/app/lib/db";
import { revalidatePath } from "next/cache";

import AddNewMember from "./components/AddNewMember";
import DeleteMember from "./components/DeleteMember";

import { fetchAllMembers } from "./utils/members-management";

export interface MemberProps {
  ID: number;
  StaffFName: string | null;
  StaffLName: string | null;
}

//////////////////////////////////////////////////===================

async function handle_DeleteMember(_memberID: number) {
  "use server";

  await prisma.tAdmin.delete({
    where: { ID: _memberID },
  });
  revalidatePath("/members");
}

//////////////////////////////////////////////////===================

async function handle_AddNewMember(_firstName: string, _lastName: string) {
  "use server";

  if (typeof _firstName !== "string" || _firstName.length === 0) {
    throw new Error("Invalid title");
  }

  await prisma.tAdmin.create({
    data: { StaffFName: _firstName, StaffLName: _lastName },
  });

  console.log("Free pizza!");
  revalidatePath("/members");
}

//////////////////////////////////////////////////===================

export default async function page() {
  //////////////////////////////////////////////////===================

  const members: any = await fetchAllMembers();
  console.log(members);

  return (
    <>
      <div>
        <div>
          <AddNewMember handle_AddNewMember={handle_AddNewMember} />
        </div>
        <div className="w-[500px] border-2">
          {members &&
            members.map((member: MemberProps, key: number) => (
              <div key={key} className="w-full  border-2 flex flex-row">
                <div>
                  {member.ID} -- {member.StaffFName} -- {member.StaffLName}
                </div>
                <div>
                  <DeleteMember
                    memberID={member.ID}
                    handle_DeleteMember={handle_DeleteMember}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div></div>
      {/* <div>
        <h1>{JSON.stringify(posts)}</h1>
      </div> */}
    </>
  );
}

// import React from "react";

// export default function page() {
//   return <div>page</div>;
// }
