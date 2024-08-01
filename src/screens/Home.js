
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import React, { useEffect, useState } from 'react';


export default function Home() {
  const [search, setSearch] = useState('')
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })

    response = await response.json()

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }
  useEffect(() => {
    loadData()
  }, [])


  return (
    <div>
      <div><Navbar></Navbar></div>
      <div> <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" >
        <div className="carousel-inner" id="carousel">
          <div className='carousel-caption' style={{ zIndex: 10 }}>
            <div className="d-flex justify-content-center">
              <input className="form-control me-2 text-white"  type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.blinkco.io/wp-content/uploads/2022/02/grocery-shopping-5987164_1280.jpg" style={{filter:"brightness(30%)"}} alt="..." />
          </div>
          <div className="carousel-item active">
            <img src="https://food-ubc.b-cdn.net/wp-content/uploads/2020/02/Save-Money-On-Groceries_UBC-Food-Services.jpg" className="d-block w-100 img-fluid" style={{filter:"brightness(30%)"}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/saving-money-on-groceries-phpf0594m" className="d-block w-100 img-fluid" style={{filter:"brightness(30%)"}} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className='container'>
        {
          foodCat !== [] ? foodCat.map((data) => {
            return (
              <div className='row mb-3'>
                <div key={data._id} className='fs-3 m-2'>
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem !== [] ?
                  foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search)))
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3 m-4'>
                          <Card foodItem={filterItems}
                            options={filterItems.options[0]}>


                          </Card>
                        </div>
                      )
                    })
                  : <div>No such data found</div>}
              </div>
            )
          })
            : <div>======</div>
        }
      </div>
      <div><Footer /></div>
    </div>
  )
}
