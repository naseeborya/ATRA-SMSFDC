"use server";

import { redirect } from "next/navigation";
import { Users } from "@/app/lib/constants/placeholder-data";

export async function LoginServerAction(state, formData) {
  console.log(formData);

  redirect("/admin");
}
