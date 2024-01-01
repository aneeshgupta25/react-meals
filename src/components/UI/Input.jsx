export default function Input({ label, id, ...props }) {
    return <p className='my-2 mx-0 flex flex-col'>
        <label className='font-bold mb-2' htmlFor={id}>{label}</label>
        <input className='w-[100%] max-w-[20rem] font-[inherit] p-2 rounded-[4px] border-solid border-[1px] border-[#ccc]' id={id} name={id} required {...props}/>
    </p>
}