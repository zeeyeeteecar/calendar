import React from "react";
import moment from "moment";
import { prisma } from "../../lib/db";

export default async function DayEvents({ monthDay, events }: any) {
  const weekdayNumberOfMonthDay = moment(monthDay).day();

 

  return (
    <>
      <div>{weekdayNumberOfMonthDay}</div>
      <div>
        {events &&
          events.map((event: any, key: number) => {
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
