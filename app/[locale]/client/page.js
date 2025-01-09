"use client";
import { GlobalBox } from "../../lib/constants/global-classes";

import { FormsList } from "../../lib/constants/forms-list";

function Page() {
  return (
    <div className={`${GlobalBox} p-8`}>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6   ">
        {FormsList.map((item) => (
          <div
            key={item.id}
            className={`${GlobalBox} text-center px-10 py-8 flex flex-col gap-4 justify-center items-center `}
          >
            <div className="text-brand-primary  p-4 rounded-full bg-gray-100 w-fit  ">
              <item.icon size={60} className="  text-brand-primary      " />
            </div>
            <h2 className="text-xl font-semibold text-brand-primary ">
              {item.label}
            </h2>
            <p className=" text-brand-primary text-sm ">{item.describtion}</p>
            <button className=" w-full py-2 text-brand-primary rounded-xl hover:bg-brand-secondary hover:text-white border-1 border-brand-light hover:border-brand-secondary ">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
