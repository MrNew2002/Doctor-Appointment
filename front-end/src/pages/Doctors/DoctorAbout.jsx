

import React from 'react'
import { formateDate } from '../../utils/formatdate'
const DoctorAbout = () => {
  return <div>
    <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semiblod flex items-center gap-2'>
            About of
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                Muhibus Rahman
            </span>
        </h3>
        <p className='text__para'>...</p>
    </div>

    <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semiblod'>Education</h3>
        <ul className='pt-4 md:gap-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5
            mb-[30px]'>
                <div>
                <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formateDate("03-03-2024")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>PHd in Surgeon</p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>Thu Duc, TpHCM</p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5
            mb-[30px]'>
                <div>
                <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                   {formateDate("24-03-2024")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>PHd in Surgeon</p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>Thu Duc, TpHCM</p>
            </li>
        </ul>
   
    </div>

    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semiblod'>Experience</h3>

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formateDate("07-04-2010")} - {formateDate("08-13-2014")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                    Sr. Surgeon
                </p>

                <p className='text-[14px] leading-5 font-medium text-textColor'>
                    Thu Duc, TpHCM
                </p>
            </li>

            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formateDate("07-04-2010")} - {formateDate("08-13-2014")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                    Sr. Surgeon
                </p>

                <p className='text-[14px] leading-5 font-medium text-textColor'>
                    Thu Duc, TpHCM
                </p>
            </li>
        </ul>
    </div>
  </div>
}

export default DoctorAbout