import React from "react";
import{Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import{RiLinkedinFill} from 'react-icons/ri'
import{AiFillYoutube, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai'

const socialLinks = [
    {

    }
]



const Footer = ()=>{

    const year = new Date().getFullYear()
    return <footer>
        <div className="container">
            <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                <div>
                    <img src={logo} alt="" />
                    <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
                        CopyRight © {year} 
                    </p>

                    <div>
                        {socialLinks.map((link, index)=> (
                            <Link to={link.path} key={index} className="w-9 h-9 border border-solod border-[#181A1E] rounded-full flex items-center
                            justify-center group hover:bg-primaryColor hover:border-none" >
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div> 
            </div>
        </div>
    </footer>
};

export default Footer;