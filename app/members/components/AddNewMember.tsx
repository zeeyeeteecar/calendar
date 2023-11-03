"use client";
import React from "react";

type AddNewMember_Props = {
  handle_AddNewMember: (_firstName: string, _lastName: string) => void;
};

export default function AddNewMember({
  handle_AddNewMember,
}: AddNewMember_Props) {
  const [inputValue_FirstName, setInputValue_FirstName] = React.useState("");
  const [inputValue_LastName, setInputValue_LastName] = React.useState("");

  const onChangeHandler_FirstName = (event: any) => {
    setInputValue_FirstName(event.target.value);
  };

  const onChangeHandler_LastName = (event: any) => {
    setInputValue_LastName(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        name="txt_FirstName"
        className="border border-slate-300 rounded px-2 =py-1 w-[200px] h-[40px] text-sky-400"
        onChange={onChangeHandler_FirstName}
        value={inputValue_FirstName}
      ></input>
      <input
        type="text"
        name="txt_FirstName"
        className="border border-slate-300 rounded px-2 =py-1 w-[200px] h-[40px] text-sky-400"
        onChange={onChangeHandler_LastName}
        value={inputValue_LastName}
      ></input>
      <button
        onClick={(e) =>
          handle_AddNewMember(inputValue_FirstName, inputValue_LastName)
        }
        className=" bg-yellow-100 d px-2 =py-1 w=[100px]} h-[40px] text-sky-400  "
      >
        add new
      </button>
    </>
  );
}
