import React from "react";
import { GlobalBox } from "@/app/lib/constants/global-classes";

const EditRecord = ({ params }) => {
  const { formId } = params;
  return (
    <div className={`${GlobalBox} p-5 text-brand-primary `}>
      Edit Form Page ::: {formId}
    </div>
  );
};

export default EditRecord;
