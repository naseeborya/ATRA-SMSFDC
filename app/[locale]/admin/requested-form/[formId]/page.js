import React from "react";
import { GlobalBox } from "@/app/lib/constants/global-classes";

function ViewForm({ params }) {
  const { formId } = params;
  return <div className={`${GlobalBox} p-5 `}>Form ::: {formId}</div>;
}

export default ViewForm;
