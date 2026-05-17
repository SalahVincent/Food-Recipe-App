import React from 'react'

const Messages = () => {
  return (
    <>
    <div className='bg-[#00000013] flex flex-col h-screen'>
      <section className='text-center py'>
        <span>Messages</span>
      </section>
      <section className='flex h-full gap-3'>
        <div className='icon'>
          <ol className='flex flex-col gap-3'>
            <li className='ml-3 border-b-2 pb-3 border-[#00000013]'>
              <img className="w-12 h-12 rounded-lg" 
              src="" alt="" />
            </li>
            <li className='pl-3 border-l-2 border-grey'>
              <img className="w-12 h-12 rounded-lg" 
              src="./pp.jpeg" alt="" />
            </li>
            <li className='pl-3 border-l-2 border-[#00000013]'>
              <img className="w-12 h-12 rounded-lg" 
              src="" alt="" />
            </li>
            <li className='pl-3 border-l-2 border-[#00000013]'>
              <img className="w-12 h-12 rounded-lg" 
              src="./download-dark.svg" alt="" />
            </li>
          </ol>
        </div>

        <div className='chatdetail bg-white w-full h-full rounded-l-[20px]'>
        <div>Add new friend</div>
        <div>
          <section className='chats'></section>
          <section></section>
        </div>
        </div>
      </section>

      <div className='gap-2 absolute bottom-4 left-4 rounded-[8px] border border-[#00000013] bg-white flex p-3'>
        <img
        className='h-13 w-13'
        src="./pp.jpeg" alt="" />
        <div className="flex flex-col">
        <span>Vincent Salah</span>
        <span className='text-[#00000093]'>Online</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Messages