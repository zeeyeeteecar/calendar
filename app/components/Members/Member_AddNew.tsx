'use client'
import React from "react";

type addNewMemberProps = {
  handleClick_Member_AddNew: () => void;
};

export default function Member_AddNew({
  handleClick_Member_AddNew,
}: addNewMemberProps) {
  return (
    <>
      {" "}
      <button
        type="button"
        name="submit"
        className="btn btn-primary"
        onClick={() => {
          handleClick_Member_AddNew();
        }}
      >
        Click
      </button>
    </>
  );
}
