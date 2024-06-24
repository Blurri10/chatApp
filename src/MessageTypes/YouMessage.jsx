export default function YouMessage({youMessage, youTime}) {


    return (
        <div className='max-w-5xl w-fit min-w-60 ml-auto'>
            <div className='bg-you rounded-2xl ml-24 py-2 pl-6 mt-7 mr-2'>
                <div className='text-xl pr-7'>{youMessage}</div>
                <div className='text-md font-light text-end mr-1 mt-2 pr-2'>{youTime}</div>

            </div>
        </div>
    )
}