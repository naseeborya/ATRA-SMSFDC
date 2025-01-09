"use client";
import React from "react";
import { GlobalBox } from "../../lib/constants/global-classes";
import Cards from "../../ui/components/admin-componets/admin-dashboard/Cards";
import Statistic from "../../ui/components/admin-componets/admin-dashboard/Statistic";

function page() {
  return (
    <div className="flex flex-col gap-5">
      <Cards />
      <Statistic />
    </div>
  );
}

export default page;
