import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NavbarMenu } from "configs/NavBarConfig";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return <Navbar session={session} navbarMenu={NavbarMenu} />;
}
