import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Header({uname, profilePic}){


    return <div className='fixed top-0 w-screen right-0 lg:right-0 lg:w-3/4'>


        <div className='flex pr-4 pl-5 justify-between pt-5 pb-5 bg-header w-full'>


            <div className='flex'>
                <img className='w-10 h-10 rounded-full object-cover' src={profilePic} alt='idk idk'/>
                <div className='mr-2 ml-3'>
                    <div className='text-xl font-bold'>{uname}</div>
                    <div className='text-sm font-md'>Click here for contact info</div>
                </div>
            </div>
            <div className='flex mt-2'>
                <IoVideocamOutline className='text-3xl text-blue-700 mr-2'/>
                <IoCallOutline className='text-3xl text-blue-700 mr-2 ml-2'/>
                <BsThreeDotsVertical className='text-3xl text-blue-700 ml-2'/>
            </div>
        </div>
    </div>
}