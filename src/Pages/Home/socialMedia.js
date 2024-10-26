import { FaGithub, FaInstagram, FaLinkedin , } from "react-icons/fa"
import { MdDownload } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

const socialMedia = [
    // to:  LINK
    // Icon: ICONO
    // Name: Nombre
    // buttonStyle: Color del borde, Color del texto 
    // iconStyle: Si quiere poner color personal al icono
    // nameStyle: si quiere ponerle color personal al nombre
    // {to:'',Icon:,Name:'',buttonStyle:'',iconStyle:'',nameStyle:''},
    {to:'',Icon:MdDownload,Name:'CV',buttonStyle:'border-green-600 text-green-600 shadow-green-600 md:shadow-inherit sm:hover:shadow-green-600',iconStyle:'',nameStyle:'',color:'green-600'},
    {to:'https://www.linkedin.com/in/juan-diego-marroquín-reyes-538b91263/',Icon:FaLinkedin,Name:'LinkedIn',buttonStyle:'border-blue-500 text-blue-500 shadow-blue-500 md:shadow-inherit sm:hover:shadow-blue-500',iconStyle:'',nameStyle:'',color:'blue-500'},
    {to:'https://github.com/DacoDev06',Icon:FaGithub,Name:'Github',buttonStyle:'border-black text-black shadow-black md:shadow-inherit sm:hover:shadow-black',iconStyle:'',nameStyle:'',color:'black'},
    {to:'https://www.instagram.com/j.diego__o.r/?hl=es',Icon:FaInstagram,Name:'Instagram',buttonStyle:'border-instagram-orange text-instagram-orange shadow-instagram-orange md:shadow-inherit sm:hover:shadow-instagram-orange',iconStyle:'',nameStyle:'bg-gradient-to-r from-instagram-orange to-instagram-purple bg-clip-text text-transparent',color:'instagram-orange'},
    {to:'#',Icon:TbTargetArrow,Name:'Looking for job',buttonStyle:'border-green-600 text-green-600 shadow-green-600 md:shadow-inherit sm:hover:shadow-green-600',iconStyle:'',nameStyle:'',color:'green-600'},
  ]

  export {socialMedia}