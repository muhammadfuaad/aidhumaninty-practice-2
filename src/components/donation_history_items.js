import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Donor_details from './dashboard/donor_details';

export default function Donation_history_items(props) {
  const {data} = props;   
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage  = 1;
  
  useEffect (()=> {
  const endOffset = itemOffset + itemsPerPage;
  setCurrentItems(data.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex gap-12'>
        {currentItems.map(image => {
          return (
            <div className='flex flex-col gap-4 w-full mb-8'>
              <div className='flex'>
                <Donor_details donor_name = {image.donor_name}
                location = {image.location}
                date = {image.date}
                appeal = {image.appeal}
                category = {image.category}
                amount = {image.amount}
                />
              </div>
              <div className='flex'>
                <Donor_details donor_name = {image.donor_name}
                location = {image.location}
                date = {image.date}
                appeal = {image.appeal}
                category = {image.category}
                amount = {image.amount}
                />
              </div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="NEXT"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="PREVIOUS"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName=""
        previousLinkClassName='px-8 py-2 uppercase text-[1.4rem] font-semibold text-bd bg-platinum outline
        outline-bd rounded-xl'
        nextLinkClassName='px-16 py-6 uppercase text-[1.4rem] font-semibold text-bd bg-transparent outline
        outline-bd rounded-xl'
        activeLinkClassName='p-4 rounded-full bg-platinum'
      />
    </>
  );
}