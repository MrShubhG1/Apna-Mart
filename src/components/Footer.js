import React from 'react'

export default function Footer() {
  return (
    <div>
      <hr className='hr hr-blurry w-60'/>
      <footer className="d-flex flex-wrap justify-content-between align-items-center  my-4 ">
        <p className="col-md-4 mb-0 text-white fs-5">© Apna Mart</p>

        <ul className="nav list-group justify-content-end">
          <li className="nav-item fs-5">Apna Mart Sai Nagar, Pune</li>
          <li className="nav-item fs-5">Open: 05:00 PM - 12:00 AM</li>
        </ul>
      </footer>

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-white fs-5">Developed By CodeWith@PalakSatija</p>

        <ul className="nav list-group justify-content-end">
          <li className="nav-item fs-5">All Rights Reserved By Palak Satija</li>
        </ul>
      </footer>
    </div>
  )
}
