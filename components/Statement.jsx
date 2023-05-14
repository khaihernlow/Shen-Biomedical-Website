import React from "react";

const Statement = () => {
  return (
    <section className="mx-2.5 lg:mx-[70px] xl:mx-auto lg:flex block lg:my-10 mt-5 mb-10 gap-2 max-w-screen-xl">
      <div className="w-64 font-semibold text-2xl text-zinc-700 lg:mb-0 mb-4">Our approach</div>
      <div className="flex-1">
        <p className="font-medium text-gray-600 text-lg mb-2">
          Our teams aspire to make discoveries that impact everyone, and core to
          our approach is sharing our research and tools to fuel progress in the
          field.
        </p>
        <p className="font-regular text-neutral-500 text-base mb-3">
          Our researchers publish regularly in academic journals, release
          projects as open source, and apply research to Google products.
        </p>
        <button className="bg-blue-600 text-base px-3 py-3 rounded-full text-white">
          See what we are about
        </button>
      </div>
    </section>
  );
};

export default Statement;
