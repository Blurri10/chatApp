import { CiCirclePlus } from "react-icons/ci";
import { MdSend } from "react-icons/md";
import { IoMicCircleOutline } from "react-icons/io5";


export default function Bottom({uname}){
    return <div className='fixed bottom-0 flex pb-3 justify-center pr-5 pl-5 py-2 w-full bg-white lg:right-0 lg:w-3/4'>
        <div className='flex'>
            <CiCirclePlus className='text-4xl lg:text-5xl mr-2 font-light text-gray-400 mt-3.5'/>
            <IoMicCircleOutline className='text-4xl lg:text-5xl mr-2 ml-2 text-gray-400 mt-3.5 font-light'/>
        </div>

        <div className='flex justify-between border-2 rounded-full pr-3 pl-3 text-xl pt-4 pb-4 w-4/5'>
            <input type='text' className='outline-0 text-lg' placeholder={`Message ${uname}`}/>
            <MdSend className='text-3xl mt-1 text-gray-500'/>



        </div>
    </div>
}