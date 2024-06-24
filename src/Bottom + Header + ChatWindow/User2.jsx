import Header from "../Bottom + Header + ChatWindow/Header.jsx";
import UserMessage from "../MessageTypes/UserMessage.jsx";
import YouMessage from "../MessageTypes/YouMessage.jsx";
import Bottom from "../Bottom + Header + ChatWindow/Bottom.jsx";

export default function User2({data}) {
    return <div className='flex flex-col justify-center items-center lg:w-3/4 lg:absolute lg:right-0'>
        <Header uname={data[1].name} profilePic={data[1].profilePictureURL}/>

        <div className='mt-24 mb-24 lg:w-full'>
            <UserMessage messageU={data[1].chat[0].user2.message} timeU={data[1].chat[0].user2.timeStamp}/>
            <YouMessage youMessage={data[1].chat[0].you.message} youTime={data[1].chat[0].you.timeStamp}/>

            <UserMessage messageU={data[1].chat[1].user2.message} timeU={data[1].chat[1].user2.timeStamp}/>
            <YouMessage youMessage={data[1].chat[1].you.message} youTime={data[1].chat[1].you.timeStamp}/>

            <UserMessage messageU={data[1].chat[2].user2.message} timeU={data[1].chat[2].user2.timeStamp}/>
            <YouMessage youMessage={data[1].chat[2].you.message} youTime={data[1].chat[2].you.timeStamp}/>


        </div>

        <Bottom uname={data[1].name}/>

    </div>
}