import React from "react";
import { fetchAllMembers } from "../utils/members-management";

export interface PostProps {
  ID: number;
  StaffFName: string | null;
  StaffLName: string | null;
}

export default async function page() {
  //////////////////////////////////////////////////===================

  const posts: any = await fetchAllMembers();
  console.log(posts);

  return (
    <>
      <div>
        <ul>
          {posts &&
            posts.map((post: PostProps, key: number) => (
              <li key={key}>
                {post.ID} -- {post.StaffFName} -- {post.StaffLName}
              </li>
            ))}
        </ul>
      </div>
      <div>
        <input required name="firstName" placeholder="First Name" />
        <input required name="lirstName" placeholder="Last Name" />
        <input type="submit">Add New Member</input>
      </div>
      <div>
        <h1>{JSON.stringify(posts)}</h1>
      </div>
    </>
  );
}
