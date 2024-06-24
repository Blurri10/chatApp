import SingleProfile from "./SingleProfile.jsx";

export default function HomePage({data}){
    return <div className='lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/4 lg:border-r-2 lg:border-gray-300'>
        <div className='text-4xl pt-6 pl-7'> Chats</div>
        <SingleProfile profilepic={data[0].profilePictureURL} uname={data[0].name} unreadMessages={data[0].unreadCount} navigateTo='user1' uid={data[0].userId} message={data[0].chat[3].user1.message}/>
        <SingleProfile profilepic={data[1].profilePictureURL} uname={data[1].name} unreadMessages={data[1].unreadCount} navigateTo='user2' uid={data[1].userId} message={data[1].chat[2].user2.message}/>
        <SingleProfile profilepic={data[2].profilePictureURL} uname={data[2].name} unreadMessages={data[2].unreadCount} navigateTo='user3' uid={data[2].userId} message={data[2].chat[2].user2.message}/>

    </div>
}