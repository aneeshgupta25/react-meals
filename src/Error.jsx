export default function Error({ title, message }) { 
    return <div className='flex flex-col p-4 max-w-[18rem] bg-[#ffc0c0] rounded-[5px] mx-auto mt-8'>
        <h2 className='text-[#a12e2e] font-extrabold font-[inherit] text-[1.2rem]'>{title}</h2>
        <p className='text-[#a12e2e]'>{message}</p>
    </div>
}