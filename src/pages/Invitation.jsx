import React from 'react';
import { background } from "../assets/export_image.js";

const Invitation = () => {
  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
          <div className='w-[70%] h-[60%] flex flex-col items-center justify-around rounded-xl font-poppins drop-shadow-md text-white gap-5'>
            <div
              className=' bg-white text-black font-poppins font-bold rounded-lg bg-opacity-50 backdrop-blur-md drop-shadow-md p-5 text-justify text-[12px] md:text-[20px]'
            >
              <h1>Hallo !</h1>
              <br />
              <p>Kami dengan senang hati ingin mengundang Anda untuk bergabung kedalam momen bahagia kami pada pesta pernikahan yang akan diselenggarakan pada tanggal 28 Febuari 2023 di Wisma Haji Metro. </p>
              <br />
              <p>Kami merencanakan sebuah acara yang indah dengan suasana yang romantis dan elegan. Kami yakin bahwa Anda akan menikmati pengalaman ini dengan semua orang yang Anda kenal dan cintai.</p>
              <br />
              <p>Kami nantikan kehadiran anda serta rekan-rekan sekalian! </p>
              <br />

              <p>Salam Hangat, </p>
              <p>Jamal & Safitri</p>
            </div>

            <div>
              <h1 className='text-center text-md md:text-2xl my-5 font-bold'>Write Small Message for Us🫶🏻</h1>
              <form action="">
                <div
                  className='flex flex-col gap-2 w-[300px] md:w-[600px] h'
                >
                  <input 
                    type="text" 
                    placeholder='Masukan Nama Anda!'
                    className='text-black rounded-lg bg-white bg-opacity-50 backdrop-blur-md drop-shadow-md placeholder:text-black placeholder:px-1 p-1'
                  />
                  <textarea 
                    name="message" 
                    id="" 
                    className='rounded-lg text-black ring-white bg-white bg-opacity-50 backdrop-blur-md drop-shadow-md placeholder:text-black placeholder:px-1 p-1'
                    placeholder='Tulis Pesan'
                  ></textarea>

                  <button 
                    type='submit'
                    className=' bg-white text-black font-poppins font-bold rounded-lg bg-opacity-50 backdrop-blur-md drop-shadow-md text-center hover:bg-opacity-100 transition duration-75 ease-in-out'  
                  >
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
    </div>
  )
}

export default Invitation
