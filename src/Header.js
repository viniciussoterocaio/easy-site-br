import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Header() {
  return (
    <header id = 'header-site'>
      <h1 id= 'text-header'>Entre em contato</h1>
      <ul id = "list-social-header">
        <li className = 'icon-header'>
          <FaWhatsapp/>
        </li>
        <li className = 'icon-header'>
          <IoLogoInstagram/>
        </li>
        <li className = 'icon-header'>
          <MdEmail />
        </li>
      </ul>
    </header>
  );
}

export default Header;