import Link from "next/link"
import Wrapper from "./shared/Wrapper"
const Header = () => {
  return (
    <Wrapper>
    <header className="header">
      <ul className="header-buttons">
      <Link href={"/"}>
        <li>Home</li></Link> 
        <Link href={"/about"}>
        <li>Resume</li></Link>
        <Link href={"/contact-us"}>
        <li>Contacts</li></Link>
        <Link href={"/jobs"}>
        <li>Jobs</li></Link>
      </ul>
    </header>
    </Wrapper>
  )
}

export default Header
