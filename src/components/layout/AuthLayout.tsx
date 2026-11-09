import { Outlet } from "react-router-dom";

/** Bare shell for authentication screens: no site navigation or footer. */
export default function AuthLayout() {
  return <Outlet />;
}
