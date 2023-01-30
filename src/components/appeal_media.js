import Dashboard_header_mobile from './dashboard/dashboard_header_mobile';
import Fixed_navigator from './fixed_navigator';

function Appeal_media() {
  return (
    <div className="flex flex-col bg-[#f5f6f7] min-h-screen mb-40">
      < Dashboard_header_mobile />
      <div className='px-6'>
        <p className='text-[2.6rem] font-bold tracking-[-0.65px] text-primary my-20'>Media</p>
        <div className='flex flex-col bg-white rounded-3xl'>
          <div className='p-12 border-bottom-medium'>
            <p className='text-[1.6rem] font-bold tracking-[-0.4px] text-headings'>Page Cover</p>
          </div>
          <div className='p-12'>
            <p className='text-[1.6rem] font-normal tracking-[-0.4px] text-body'>Upload a photo, select a photo from your gallery, or add a live stream video.</p>
          </div>
          <div className='bg-[#bdbdbd] h-96 w-full flex justify-center items-center'>
            <img src="./Icons/image.svg"></img>
          </div>
          <div className='m-12'>
            <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-headings bg-green rounded-xl">
              Donate
            </button>
          </div>
        </div>

        <div className='flex flex-col bg-white rounded-3xl mt-8'>
          <div className='p-12'>
            <p className='text-[1.6rem] font-bold tracking-[-0.4px] text-headings mb-12'>Gallery</p>
            <button className="w-full py-6 uppercase text-[1.4rem] font-semibold text-headings bg-green rounded-xl">
              Select From Gallery
            </button>
            <div className='bg-[#bdbdbd] h-96 w-full flex justify-center items-center rounded-3xl mt-8 relative'>
              <img src="./Icons/black-cross-circle.svg" className='absolute top-6 right-6'></img>
              <img src="./Icons/image.svg"></img>
            </div>

            <div className='bg-[#bdbdbd] h-96 w-full flex justify-center items-center rounded-3xl mt-6 relative'>
              <img src="./Icons/black-cross-circle.svg" className='absolute top-6 right-6'></img>
              <button className="px-6 py-6 uppercase text-[1.4rem] font-semibold text-headings bg-green rounded-xl">
                Set As Cover
              </button>
            </div>

            <div className='bg-[#bdbdbd] h-96 w-full flex justify-center items-center rounded-3xl mt-6 relative'>
              <img src="./Icons/black-cross-circle.svg" className='absolute top-6 right-6'></img>
              <img src="./Icons/image.svg"></img>
            </div>

            <button class="w-full py-6 uppercase text-[1.4rem] font-semibold text-[#102558] bg-transparent outline
              outline-[#999999] rounded-xl mt-8">Load More</button>

          </div>
          
          
        </div>
      </div>
      < Fixed_navigator />
    </div>
  )
}
export default Appeal_media;