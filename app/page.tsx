import React from "react";
import Link from "next/link";

export default function page() {
  const mainMenuData = [
    { title: "Member", link: "/members" },
    { title: "Calendar", link: "/calendar-1" },
  ];

  return (
    <div className="w-screen h-screen flex flex-row  justify-center items-center border-2  ">
      <ul className="flex flex-col">
        {mainMenuData &&
          mainMenuData.map((menu: any, key: number) => {
            return (
              <Link
                className="text-blue-500 hover:text-blue-800 font-bold text-4xl "
                href={menu.link}
              >
                <div
                  key={key}
                  className="mr-6 w-[300px] h-[80px] text-center border-2 flex justify-center items-center hover:bg-slate-400 "
                >
                  {menu.title}
                </div>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}
