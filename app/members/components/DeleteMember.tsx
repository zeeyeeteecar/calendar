"use client";
import React from "react";

type DeleteMember_Props = {
  memberID: number;
  handle_DeleteMember: (_memberID: number) => void;
};

export default function DeleteMember({
  memberID,
  handle_DeleteMember,
}: DeleteMember_Props) {
  return (
    <div>
      <button
        onClick={(e) => handle_DeleteMember(memberID)}
        className=" bg-yellow-100 d px-2 =py-1 w=[100px]} h-[40px] text-sky-400  "
      >
        Delete
      </button>
    </div>
  );
}
