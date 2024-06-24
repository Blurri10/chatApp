import Header from "../Bottom + Header + ChatWindow/Header.jsx";
import UserMessage from "../MessageTypes/UserMessage.jsx";
import YouMessage from "../MessageTypes/YouMessage.jsx";
import Bottom from "../Bottom + Header + ChatWindow/Bottom.jsx";


export default function User3({data}) {
    return <div className='flex flex-col justify-center items-center lg:w-3/4 lg:absolute lg:right-0'>
        <Header uname={data[2].name} profilePic={data[2].profilePictureURL}/>

        <div className='mt-24 mb-24 lg:w-full'>
            <UserMessage messageU={data[2].chat[0].user2.message} timeU={data[2].chat[0].user2.timeStamp}/>
            <YouMessage youMessage={data[2].chat[0].you.message} youTime={data[2].chat[0].you.timeStamp}/>

            <UserMessage messageU={data[2].chat[1].user2.message} timeU={data[2].chat[1].user2.timeStamp}/>
            <YouMessage youMessage={data[2].chat[1].you.message} youTime={data[2].chat[1].you.timeStamp}/>

            <UserMessage messageU={data[2].chat[2].user2.message} timeU={data[2].chat[2].user2.timeStamp}/>
            <YouMessage youMessage={data[2].chat[2].you.message} youTime={data[2].chat[2].you.timeStamp}/>

        </div>

        <Bottom uname={data[2].name}/>

    </div>
}