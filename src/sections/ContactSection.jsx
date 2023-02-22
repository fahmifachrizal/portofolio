import { Element } from 'react-scroll'
import * as Tabler from 'react-icons/tb';

const ContactSection = function() {

  return (
    <Element id='contact' name='contact'>
      <div className="my-20 w-full px-56">
        <h1 className='text-white text-4xl font-bold mb-10'>Contact Me</h1>
        <div className='w-full grid grid-cols-2'>
          {/* Message Box */}
          <form action="">
            <div className='w-full flex flex-col gap-4'>
              <div className=''>
                <input placeholder='Name' type="text" name="name" id="name" autoComplete='off'
                className='px-2 py-1 bg-[#181818] border border-gray-400 rounded-lg w-full text-white'/>
              </div>
              <div>
                <input placeholder='Email' type="email" name="email" id="email" autoComplete='off' 
                className='px-2 py-1 bg-[#181818] border border-gray-400 rounded-lg w-full text-white'/>
              </div>
              <div>
                <textarea placeholder='Message' id="message" autoComplete='off' rows="5"
                className='px-2 py-1 bg-[#181818] border border-gray-400 rounded-lg w-full text-white'/>
              </div>
              <div className='flex flex-row-reverse'>
                <button type="submit" className='bg-[#2a9d90] text-white py-1 px-4 flex items-center gap-x-2 font-semibold rounded-lg'><Tabler.TbSend className='shadow'/><span className='shadow'> Send</span></button>
              </div>
            </div>
          </form>

          {/* Contact Text */}
          <div className='p-12 w-full items-center justify-center'>
            <span className='text-white font-bold text-2xl'>Whether you're looking to start a new project or just want to chat about your ideas, Let's connect and see where our journey takes us!</span>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default ContactSection