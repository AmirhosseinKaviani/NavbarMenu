
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar/>

    <div className='w-full min-h-screen text-center bg-slate-400 bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 flex flex-col gap-10 items-center justify-center text-white p-52'>
      <h1 className='text-5xl lg:text-7xl'>section 1</h1>
      <p className='text-xl lg:text-3xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem recusandae sapiente eius cupiditate hic laborum suscipit, nihil accusantium porro nobis odit impedit quasi eum autem repellendus fugit possimus! Velit, animi.</p>
    </div>
    <div className='w-full min-h-screen bg-slate-400 bg-gradient-to-r from-orange-500 to-yellow-300 flex flex-col gap-10 items-center justify-center text-center text-white p-52'>
      <h1 className='text-7xl'>section 2</h1>
      <p className='text-3xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem recusandae sapiente eius cupiditate hic laborum suscipit, nihil accusantium porro nobis odit impedit quasi eum autem repellendus fugit possimus! Velit, animi.</p>
    </div>
    <div className='w-full min-h-screen bg-slate-400 bg-gradient-to-r from-sky-500 to-blue-300 flex flex-col gap-10 items-center justify-center text-center text-white p-52'>
      <h1 className='text-7xl'>section 2</h1>
      <p className='text-3xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem recusandae sapiente eius cupiditate hic laborum suscipit, nihil accusantium porro nobis odit impedit quasi eum autem repellendus fugit possimus! Velit, animi.</p>
    </div>
    </>
  );
}

export default App;
