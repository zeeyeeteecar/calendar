import React from "react";
import moment from "moment";

export default function WeekdaysName() {
  const array_weekdays = moment.weekdays();

  return (
    <div className="grid grid-cols-7 gap-0 border-2 p-1">
      {array_weekdays &&
        array_weekdays.map((weekday: string, key: number) => {
          return (
            <div key={key} className="w-[100px] border-2">
              {weekday}
            </div>
          );
        })}
    </div>
  );
}
