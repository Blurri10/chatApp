import Header from "../Bottom + Header + ChatWindow/Header.jsx";
import UserMessage from "../MessageTypes/UserMessage.jsx";
import YouMessage from "../MessageTypes/YouMessage.jsx";
import Bottom from "../Bottom + Header + ChatWindow/Bottom.jsx";

export default function User1({data}) {


    return <div className='flex flex-col justify-center items-center lg:w-3/4 lg:absolute lg:right-0'>
        <Header uname={data[0].name} profilePic={data[0].profilePictureURL}/>

        <div className='mt-24 mb-24 lg:w-full'>
            <UserMessage messageU={data[0].chat[0].user1.message} timeU={data[0].chat[0].user1.timeStamp}/>
            <YouMessage youMessage={data[0].chat[0].you.message} youTime={data[0].chat[0].user1.timeStamp}/>

            <UserMessage messageU={data[0].chat[1].user1.message} timeU={data[0].chat[1].user1.timeStamp}/>
            <YouMessage youMessage={data[0].chat[1].you.message} youTime={data[0].chat[1].user1.timeStamp}/>

            <UserMessage messageU={data[0].chat[2].user1.message} timeU={data[0].chat[2].user1.timeStamp}/>
            <YouMessage youMessage={data[0].chat[2].you.message} youTime={data[0].chat[2].user1.timeStamp}/>

            <UserMessage messageU={data[0].chat[3].user1.message} timeU={data[0].chat[3].user1.timeStamp}/>
            <YouMessage youMessage={data[0].chat[3].you.message} youTime={data[0].chat[3].user1.timeStamp}/>
        </div>

        <Bottom uname={data[0].name}/>

    </div>
}