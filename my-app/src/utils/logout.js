import { redirect } from "react-router-dom";

export function logoutAction() {
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  localStorage.removeItem("userid");
  return redirect("/");
}
