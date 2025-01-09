import localFont from "next/font/local";

import React from "react";
import { GlobalBox } from "@/app/lib/constants/global-classes";

const SubmittedForms = () => {
  return (
    <div className={`${GlobalBox} p-5 text-brand-primary`}>
      all Submitted forms
    </div>
  );
};

export default SubmittedForms;
