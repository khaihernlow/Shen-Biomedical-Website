import React from "react";
import Image from "next/image";
import Link from "next/link";

const Recruitment = () => {
  return (
    <section className="mx-2.5 lg:mx-[70px] xl:mx-auto lg:flex block gap-2 max-w-screen-xl">
      <div className="w-64 font-semibold text-2xl text-red-500 lg:mb-0 mb-4">Join Us</div>
      <div className="lg:flex-auto block lg:w-64 w-full">
        <p className="font-medium text-gray-600 text-lg mb-2">
          We're always looking for more passionate people
        </p>
        <p className="font-regular text-neutral-500 text-base mb-3">
          We have meetings every other Mondays in Room 145 with Ms. Kinsella as
          our advisor. Check our calendar and Google Classroom for more updated
          information and events.
        </p>
        <div className="flex items-center gap-2">
          <a target="_blank" href="mailto:khaihernlow@gmail.com">
            <button className="flex-initial bg-blue-600 text-base px-3 py-3 rounded-full text-white border-solid border-2 border-blue-600">
              Questions? Email Us
            </button>
          </a>
          <a target="_blank" href="https://classroom.google.com/c/MTA5NjY2MDIwOTha?cjc=FYATXOV">
            <button className="flex-initial px-3 py-3 rounded-full text-gray-600 text-base font-semibold border-solid border-2 border-gray-600">
              Classroom Code: FYATXOV
            </button>
          </a>
        </div>
      </div>
      <div className="lg:flex-auto lg:h-auto h-44 lg:mt-0 mt-5 lg:w-fit md:w-1/2 relative">
        <Image
          src="/assets/images/new_vision.jpg"
          alt="new_vision"
          fill={true}
          className="object-cover rounded-xl px-px py-px border-solid border-2 border-black"
        />
      </div>
    </section>
  );
};

export default Recruitment;
