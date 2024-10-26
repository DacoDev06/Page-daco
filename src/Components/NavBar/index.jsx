import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { FaLinux } from "react-icons/fa6";
import Colombia from '../../assets/colombia.png'

let items = [
  // {to:'/',content:'Shopiy',styles:'font-semibold text-lg'},
  {to:'/',content:FaUserAlt,color:'text-green-500 shadow-md shadow-green-500',size:'text-2xl'},
  {to:'/ciberSeguridad',content:FaLinux,color:'text-sky-500',size:'text-2xl'},
]

function NavBar() {
  // eslint-disable-next-line react/prop-types
  const IconButton = ({Icon,size}) => (
    <button className="py-4 px-2 flex items-center justify-center text-2xl outline-none">
      <Icon className={`${size}`} />
    </button>
  );
  
  return (
    <nav className="lg:px-60 flex justify-between mx-auto sticky top-0 z-10 bg-opacity-80 dark:bg-opacity-90 backdrop-blur-2xl">
          {/* donde ira el nombre e imagen al scrollear */}
          <div></div>
          <ul className="-full bottom-0 static flex justify-end items-center py-1 px-5 z-20 bg-opacity-80 dark:bg-opacity-90 backdrop-blur-2xl"> 
            {items.map((item) =>(
              
              <li key={item.content}>
                <NavLink to={item.to} className={({isActive})=>isActive?item.color:undefined}>
                  <IconButton Icon={item.content} size={item.size}/>
                </NavLink>
              </li>
            ))}
            <hr className="border border-gray-300 h-5"/>
            <IconButton Icon={IoSunny} color={'text-blue-950'}/>
            <button className="w-[40px] h-[56px] py-4 px-2">
              <img src={Colombia} alt=""/>
            </button>
          </ul>
      </nav>
  )
}

export {NavBar}