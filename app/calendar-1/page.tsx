import React from "react";
import { prisma } from "../lib/db";
import moment from "moment";
import WeekdaysName from "./components/WeekdaysName";
import MonthDays from "./components/MonthDays";

export default async function page() {
  // const barragesData: any = await prisma.tEvents.findMany({
  //   where: {
  //     Start_Date: {
  //       lte: new Date("2023-01-30"),
  //       gte: new Date("2023-01-15"),
  //     },
  //     // Start_Date: {equals:new Date("2023-10-31"),}
  //   },
  //   select: { Start_Date: true, Event_Title: true },
  //   take: 20,
  // });
  // const barrages = await barragesData;

  return (
    <>
      <div>
        <WeekdaysName />
      </div>
      <div>
        <MonthDays yearNumber={2023} monthNumber={11} />
      </div>
      {/* <div>{JSON.stringify(barrages)}==</div> */}
    </>
  );
}
