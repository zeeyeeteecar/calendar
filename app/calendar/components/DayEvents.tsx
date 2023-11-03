import React from "react";
import moment from "moment";
import { prisma } from "../../lib/db";

export default async function DayEvents({ monthDay }: any) {
  const weekdayNumberOfMonthDay = moment(monthDay).day();

  const barragesData: any = await prisma.tEvents.findMany({
    where: {
      OR: [
        {
          AND: [
            { Event_TypeCode: { equals: "o2b2" } },
            { Start_Date: { equals: new Date(monthDay.toString()) } },
          ],
        },
        {
          AND: [
            { Start_Date: { lte: new Date(monthDay.toString()) } },
            { End_Date: { gte: new Date(monthDay.toString()) } },
            {
              Event_Weekday: {
                contains: (weekdayNumberOfMonthDay + 1).toString(),
              },
            },
            { Event_TypeCode: { equals: "o2b2" } },
          ],
        },
        //Start_Date: { equaals: new Date("2023-10-26") },
      ],
    },
    select: { Event_ID: true, Start_Date: true, Event_Title: true },
    take: 100,
  });
  const barrages = await barragesData;

  return (
    <>
      <div>{weekdayNumberOfMonthDay}</div>
      <div>
        {barrages &&
          barrages.map((event: any, key: number) => {
            return (
              <>
                <li key={key}>
                  {event.Event_ID.toString()} <br></br>
                  {utcFormat(event.Start_Date)} - {event.Event_Title}
                </li>
              </>
            );
          })}
      </div>
    </>
  );
}

function utcFormat(date: Date) {
  const yr = new Date(date).getUTCFullYear();
  const mth = new Date(date).getUTCMonth() + 1;
  const dat = new Date(date).getUTCDate();
  return yr.toString() + ":" + mth.toString() + ":" + dat.toString();
}
