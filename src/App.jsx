import './App.css'
import logo from './assets/logo.svg'
import eye from './assets/eye.svg'
import edit from './assets/edit.svg'
import trash from './assets/trash.svg'
import apple from './assets/apple.svg'
import realme from './assets/realme.svg'
import samsung from './assets/samsung.svg'
import nokia from './assets/nokia.svg'
import blackberry from './assets/blackberry.svg'

document.body.style.backgroundColor = '#141B2D'

function App() {

  return (
    <>
      <div className='container mx-auto'>
          <div className='flex items-center justify-between mt-2'>
            <span></span>
            <img src={logo} alt="" />
          </div>

        <div className='mt-5 text-white'>
              <div className='bg-[#1A2038] w-[1250px] rounded-xl'> 
                  <div className='flex justify-between py-2 px-3'>
                      <span className='w-[280px]'>Brand</span>
                      <span>Category</span>
                      <span>Price</span>
                      <span>Status</span>
                      <span className='mr-52'>Action</span>
                  </div>
              </div>
          </div>

          <div className='flex flex-wrap'>

          <div className='bg-[#1F2A40] w-[1250px] rounded-xl mt-4 mb-4'>
            <div className='flex items-center justify-between py-2 px-3 text-white'>
                <span className='w-[280px] flex gap-5'><img src={apple} alt="" /><div><span className='opacity-60 font-bold'>Apple</span><p className='opacity-35'>mail@gmail.com!</p></div></span>
                <span className='ml-6 opacity-80'>Technology</span>
                <span className='ml-3 opacity-80'>200.00$</span>
                <button className='rounded-2xl bg-[#04D58D] text-center py-1 px-2'>Available</button>
                <span className='mr-32 items-center flex gap-7'>
                    <img className='cursor-pointer' src={eye} alt="" />
                    <img className='cursor-pointer' src={edit} alt="" />
                    <img className='cursor-pointer' src={trash} alt="" />
                </span>
            </div>
        </div>

        <div className='bg-[#1F2A40] w-[1250px] rounded-xl mt-4 mb-4'>
            <div className='flex items-center justify-between py-2 px-3 text-white'>
                <span className='w-[280px] flex gap-5'><img src={realme} alt="" /><div><span className='opacity-60 font-bold'>Realme</span><p className='opacity-35'>mail@gmail.com!</p></div></span>
                <span className='ml-6 opacity-80'>Technology</span>
                <span className='ml-3 opacity-80'>200.00$</span>
                <button className='rounded-2xl bg-[#eb5757] text-center py-1 px-2'>No Stock</button>
                <span className='mr-32 items-center flex gap-7'>
                    <img className='cursor-pointer' src={eye} alt="" />
                    <img className='cursor-pointer' src={edit} alt="" />
                    <img className='cursor-pointer' src={trash} alt="" />
                </span>
            </div>
        </div>

        <div className='bg-[#1F2A40] w-[1250px] rounded-xl mt-4 mb-4'>
            <div className='flex items-center justify-between py-2 px-3 text-white'>
                <span className='w-[280px] flex gap-5'><img src={samsung} alt="" /><div><span className='opacity-60 font-bold'>Samsung</span><p className='opacity-35'>mail@gmail.com!</p></div></span>
                <span className='ml-6 opacity-80'>Technology</span>
                <span className='ml-3 opacity-80'>200.00$</span>
                <button className='rounded-2xl bg-[#f2c94c] text-center py-1 px-2'>Flash Sale</button>
                <span className='mr-32 items-center flex gap-7'>
                    <img className='cursor-pointer' src={eye} alt="" />
                    <img className='cursor-pointer' src={edit} alt="" />
                    <img className='cursor-pointer' src={trash} alt="" />
                </span>
            </div>
        </div>

        <div className='bg-[#1F2A40] w-[1250px] rounded-xl mt-4 mb-4'>
            <div className='flex items-center justify-between py-2 px-3 text-white'>
                <span className='w-[280px] flex gap-5'><img src={nokia} alt="" /><div><span className='opacity-60 font-bold'>Nokia</span><p className='opacity-35'>mail@gmail.com!</p></div></span>
                <span className='ml-6 opacity-80'>Technology</span>
                <span className='ml-3 opacity-80'>200.00$</span>
                <button className='rounded-2xl bg-[#04D58D] text-center py-1 px-2'>Available</button>
                <span className='mr-32 items-center flex gap-7'>
                    <img className='cursor-pointer' src={eye} alt="" />
                    <img className='cursor-pointer' src={edit} alt="" />
                    <img className='cursor-pointer' src={trash} alt="" />
                </span>
            </div>
        </div>

        <div className='bg-[#1F2A40] w-[1250px] rounded-xl mt-4 mb-4'>
            <div className='flex items-center justify-between py-2 px-3 text-white'>
                <span className='w-[280px] flex gap-5'><img src={blackberry} alt="" /><div><span className='opacity-60 font-bold'>Blackberry</span><p className='opacity-35'>mail@gmail.com!</p></div></span>
                <span className='ml-6 opacity-80'>Technology</span>
                <span className='ml-3 opacity-80'>200.00$</span>
                <button className='rounded-2xl bg-[#eb5757] text-center py-1 px-2'>No Stock</button>
                <span className='mr-32 items-center flex gap-7'>
                    <img className='cursor-pointer' src={eye} alt="" />
                    <img className='cursor-pointer' src={edit} alt="" />
                    <img className='cursor-pointer' src={trash} alt="" />
                </span>
            </div>
        </div>

        </div>

      </div>
    </>
  )
}

export default App
