import React from "react";

const Calendar = () => {
  return (
    <section className="mx-2.5 lg:mx-[70px] xl:mx-auto lg:flex block my-10 gap-2 max-w-screen-xl">
      <div className="w-full lg:w-64 font-semibold text-2xl text-zinc-700 lg:mb-0 mb-4">
        Plan and meetup with us
      </div>
      <div className="flex-1">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=shenschools.org_3q67quulln3bmf6u327rcabuvk%40group.calendar.google.com&ctz=America%2FNew_York"
          className="border-none rounded-xl"
          width="100%"
          height="600"
        ></iframe>
      </div>
    </section>
  );
};

export default Calendar;
