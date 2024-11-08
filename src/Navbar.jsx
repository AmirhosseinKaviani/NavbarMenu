import React from 'react'

const Navbar = () => {
    const listItems =['work','Services','Pricing','Blog','Templates','About']
  return (
    <div className='fixed flex items-center justify-between py-3 px-10 left-1/2 translate-x-[-50%] top-[20px] bg-black bg-opacity-60 backdrop-blur-md  rounded-full text-white shadow-lg z-10'>
        <ul className='flex gap-8 text-xl mr-10'>
            {listItems.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
        <button type="button" className='bg-gradient-to-r from-blue-500 to-green-400 py-1 px-6 rounded-3xl shadow-2xl text-white text-lg font-semibold hover:from-blue-600 hover:to-green-500 hover:shadow-green-500 shadow-blue-500'>contact</button>
    </div>
  )
}

export default Navbar
