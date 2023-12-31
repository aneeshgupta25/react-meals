import logo from '../assets/logo.jpg'

export default function Header() {
  return (
    <header className='flex justify-between items-center py-12 px-[10%]'>
      <div className='flex gap-4 items-center'>
        <img className='w-16 h-16 object-contain rounded-[50%] border-[2px] border-solid border-[#ffc404]' alt="A restaraunt" src={logo}/>
        <h1 className='font-latoFont font-[700] text-[2rem] m-0 text-[#ffc404] tracking-[0.2rem] uppercase'>ReactMeals</h1>
      </div>
      <nav>
        <button className='text-[1.5rem] font-latoFont'>Cart (0)</button>
      </nav>
    </header>
  );
}
