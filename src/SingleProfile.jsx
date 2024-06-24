
import { BsThreeDotsVertical } from "react-icons/bs";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
export default function SingleProfile({uname, profilepic, message, navigateTo, unreadMessages, uid}) {

    const [isOpen, setIsOpen] = useState(false)
    const [readCount, setReadCount] = useState(unreadMessages)
    const [deleted, setDeleted] = useState(false)



    const navigate = useNavigate()
    const location = useLocation()
    let path = location.pathname



    function handleClick(){
        setReadCount(0)
        navigate(`/${navigateTo}`)
    }


    function openSetter(e){
        e.stopPropagation()

        setIsOpen(prev => !prev)
    }

    function handleUnread(e){
        e.stopPropagation()
        setReadCount(unreadMessages)

    }

    function handleDelete(e){
        e.stopPropagation()
        setDeleted(prev => !prev)
    }

    function handleCancel(e){
        e.stopPropagation()
        setIsOpen(false)
    }




    return <div className={`flex justify-between pl-2 pr-2 pt-6 pb-4 border-b-2 border-gray-200 relative hover:cursor-pointer ${path === `/${uid}`? 'bg-header': 'bg-white'} ${deleted ? 'hidden' : 'visible'}`}
                onClick={handleClick}>
        <div className='flex justify-between'>
            <img className='ml-7 w-12 h-12 rounded-full object-cover mr-4' src={profilepic} alt='profilepic'/>
            <div className='mr-2 ml-1'>
                <div className='text-xl font-bold'>{uname}</div>
                <div className='text-md font-light'>{

                    message.toString().length < 25? message: message.toString().slice(0,21)
                }...</div>
            </div>
        </div>

        <div className='flex'>
            <div>
                <div className='font-light'>11/19/19</div>
                <div className={`bg-green-700 rounded-full h-6 w-6 text-center text-white ${unreadMessages === 0 || readCount === 0? 'hidden': 'visible'} ml-auto`}>{unreadMessages}</div>
            </div>
            <BsThreeDotsVertical className='mt-4 text-2xl text-blue-700 ml-2' onClick={openSetter}/>
        </div>

        <div className={`absolute bg-gray-200 right-4 top-16 pt-2 pb-2 pr-3 pl-3 ${isOpen ? 'visible' : 'hidden'} rounded-xl shadow-lg z-10`}>
            <div className='mt-2 mb-2 pl-2 pr-2 ' onClick={handleUnread}>Mark as unread</div>
            <div className='mt-2 mb-2 pl-2 pr-2 ' onClick={handleDelete}>Delete</div>
            <div className='mt-2 mb-2 pl-2 pr-2 ' onClick={handleCancel}>Cancel</div>
        </div>

    </div>

}