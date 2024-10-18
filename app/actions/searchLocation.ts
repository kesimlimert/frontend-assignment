"use server";

import { redirect } from "next/navigation";

export async function searchLocation(formData: FormData) {
  const location = formData.get("location");
  if (typeof location === "string") {
    const parsedLocation = encodeURIComponent(
      location.toLowerCase().replace(/[, ]+/g, "-").trim()
    );
    return redirect(`/filter/${parsedLocation}`);
  } else {
    return redirect("/filter");
  }
}
