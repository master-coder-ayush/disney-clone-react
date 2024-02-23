import { useState } from "react"
import HeaderItem from "../components/HeaderItem"
import logo from '../assets/Images/logo.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2"
import {
    HiPlus,
    HiDotsVertical
} from "react-icons/hi"

export default function Header(){
    const [toggle,setToggle] = useState(false);
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
    return (
        // Complete Header
        <div className="flex items-center gap-8 justify-between p-5">
            {/* Logo and Links */}
            <div className="flex items-center gap-8">    
                {/* Logo */}
                <img src={logo} alt="Logo" className='w-[80px] md:w-[115px] object-cover' />
                {/* Links */}
                {/* Full Screen Links */}
                <div className="hidden md:flex gap-8 ">
                    {
                        menu.map((item)=>(
                            <HeaderItem name={item.name} Icon={item.icon}/>
                        ))
                    }
                </div>
                {/* Small Screen Links */}
                <div className="flex md:hidden gap-5 ">
                    {
                        menu.map((item,index)=>(
                            index<3 && <HeaderItem name={''} Icon={item.icon}/>
                        ))
                    }
                    {/* Small Screen Menu Button */}
                    <div className="md:hidden" onClick={()=>{setToggle(!toggle)}}>
                        <HeaderItem name={''} Icon={HiDotsVertical}/>
                        {/* Links Shown which were hidden on Click */}
                            {
                                toggle ? 
                                <div className="absolute mt-3 bg-[#121212] border-[1px] border-grey-700 p-3 px-5 py-4">
                                    {
                                        menu.map((item,index)=>(
                                            index>2 && <HeaderItem name={item.name} Icon={item.icon}/>
                                        ))
                                    }
                                </div>:null
                            }
                    </div>
                </div>
            </div>
            {/* Avatar Logo */}
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="Profile Logo" className="w-[40px] rounded-full" />
        </div>
    )
}