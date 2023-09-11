import Navbar from "./navbar";
import { NavbarMenu } from "configs/NavBarConfig";

export default async function Nav() {
  return <Navbar navbarMenu={NavbarMenu} />;
}
