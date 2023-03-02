import React, {useState, useEffect} from "react";
import Donation_history_items from "./donation_history_items";

function Donation_history_pagination() {
 const [images, setImages] = useState([]); 
 const data = [
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50"
  },
  
]
 useEffect (()=> {
    
        setImages(data);
 })
  return (
    <div>
      <Donation_history_items data = { images } />
    </div>
  );
}
export default Donation_history_pagination;