import Dashboard_header_mobile from '../dashboard/dashboard_header_mobile';
import Fixed_navigator from '../fixed_navigator';

function Appeal_media() {
  return (
    <div className="flex flex-col bg-[#f5f6f7] min-h-screen pb-40">
      < Dashboard_header_mobile />
      <div className='px-6'>
        <p className='text-[2.6rem] font-bold tracking-[-0.65px] text-primary my-20'>Donations</p>
        <div className='flex flex-col bg-white rounded-3xl'>
          <div className='p-12 border-bottom-medium'>
            <p className='text-[1.6rem] font-bold tracking-[-0.4px] text-headings'>Donations total</p>
          </div>
          <div className='p-12 pr-32 border-bottom-medium'>
            <div className='flex flex-col text-[1.6rem] font-semibold tracking-[-0.4px] text-headings'>
              <div className='flex flex-col border-b-[1px] border-dashed border-[#7c7c7c] pb-4'>
                <p>Number of donations:</p>
                <p>2</p>
              </div>
              
              <div className='flex flex-col border-b-[1px] border-dashed border-[#7c7c7c] py-4'>
                <p>Total raised:</p>
                <p>£365.00</p>
              </div>
              <div className='flex flex-col border-b-[1px] border-dashed border-[#7c7c7c] py-4'>
                <p>Total offline donations:</p>
                <p>£55.00</p>
              </div>
              <div className='flex flex-col pt-4 font-normal'>
                <p>Gift aid plus supplement:</p>
                <p>£0.00</p>
              </div>
            </div>
          </div>
          
          <div className='p-12 border-bottom-medium'>
            <p className='text-[1.6rem] font-bold tracking-[-0.4px] text-headings mb-6'>Offline donations</p>
            <p className='text-[1.6rem] font-normal tracking-[-0.4px] text-headings'>Have you received any offline donations? Add the total amount here.</p>
          </div>

          <div className='p-12'>
            <p className='text-[1.6rem] font-bold tracking-[-0.4px] text-headings mb-6'>Donations made to your page</p>
            <p className='text-[1.6rem] font-normal tracking-[-0.4px] text-headings mb-4'>You have 0 donations.</p>
            <p className='text-[1.2rem] font-semibold tracking-[-0.3px] text-primary mb-4'>See what happens to your donations</p>
            <table>
              <tr className='text-[0.9rem] font-medium tracking-[0px] text-[#bdbdbd]'>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
              <tr className='text-[1.1rem] font-semibold tracking-[-0.28px]'>
                <td className='flex space-x-2 items-center'>
                  <img src="./icons/user-circle.svg"></img>
                  <p className='text-primary-dark'>Ron Hill</p>
                </td>
                <td className='text-primary'>£231.50</td>
                <td className='flex space-x-2 items-center'>
                  <img src="./icons/calendar-clock.svg"></img>
                  <p className='font-medium text-headings'>Tue 12 Dec, 08:15</p>
                </td>
              </tr>
            </table>
          </div>
        </div>

        
      </div>
      < Fixed_navigator />
    </div>
  )
}
export default Appeal_media;