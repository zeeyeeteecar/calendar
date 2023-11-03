import React from "react";
import moment from "moment";
import { prisma } from "../../lib/db";
import DayEvents from "./DayEvents";

export default async function MonthDays({ yearNumber, monthNumber }: any) {
  const year_month = yearNumber.toString() + " " + monthNumber.toString();
  const startOfMonth = moment(year_month).startOf("month").format("YYYY-MM-DD");
  const endOfMonth = moment(year_month).endOf("month").format("YYYY-MM-DD");

  function getAllSelectedMonthDays(
    startDate: string,
    endDate: string
  ): string[] {
    let date = [];

    //////////////// unshift previous month days/////////////////
    const weekdayNumberOfStartDate = moment(startDate).day();

    for (let i = 1; i <= weekdayNumberOfStartDate; i++) {
      date.unshift(moment(startDate).add(-i, "days").format("YYYY-MM-DD"));
    }

    //////////////// list selected month dayss/////////////////
    while (moment(startDate) <= moment(endDate)) {
      date.push(startDate);
      startDate = moment(startDate).add(1, "days").format("YYYY-MM-DD");
    }

    //////////////// add next  month dayss/////////////////
    const weekdayNumberOfEndDate = moment(endDate).day();
    for (let i = 1; i <= 6 - weekdayNumberOfEndDate; i++) {
      date.push(moment(endDate).add(i, "days").format("YYYY-MM-DD"));
    }

    return date;
  }

  const firstDayOfMonthBlock = getAllSelectedMonthDays(
    startOfMonth,
    endOfMonth
  )[0];
  const lastDayOfMonthBlock = getAllSelectedMonthDays(startOfMonth, endOfMonth)[
    getAllSelectedMonthDays(startOfMonth, endOfMonth).length - 1
  ];

  //////////////////////////------------------------------------------

  return (
    <>
      <div>{startOfMonth}</div>
      <div>{endOfMonth}</div>
      <div>{firstDayOfMonthBlock}</div>
      <div>{lastDayOfMonthBlock}</div>

      <div className="grid grid-cols-7 gap-0 border-2 p-1">
        {getAllSelectedMonthDays(startOfMonth, endOfMonth) &&
          getAllSelectedMonthDays(startOfMonth, endOfMonth).map(
            (monthDay: any, key: number) => {
              return (
                <div key={key} className="w-full min-h-[300px] border-2">
                  {monthDay}
                  <DayEvents monthDay={monthDay} />
                </div>
              );
            }
          )}
      </div>
    </>
  );
}

async function selectedMonthEvents(startDate: string, endDate: string) {
  const barragesData: any = await prisma.tEvents.findMany({
    where: {
      Start_Date: {
        lte: new Date("2023-01-30"),
        gte: new Date("2023-01-15"),
      },
      //Start_Date: { equals: new Date(monthDay.toString()) },
      //Start_Date: { equals: new Date("2023-10-26") },
    },
    select: { Start_Date: true, Event_Title: true },
    // take: 10,
  });
  const barrages = await barragesData;

  return barrages;
}
