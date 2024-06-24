export default function UserMessage({messageU, timeU}){
    return <div className='max-w-5xl w-fit min-w-60'>
        <div className='bg-user rounded-2xl mr-24 py-2 pl-4 ml-4 mt-7'>
            <div className='text-xl pr-7'>{messageU}</div>
            <div className='text-md font-light text-end mr-1 mt-2 pr-2'>{timeU}</div>

        </div>
    </div>
}