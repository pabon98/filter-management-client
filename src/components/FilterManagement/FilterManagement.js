import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { TopHeading } from "../TopHeading/TopHeading";
import { Link } from "react-router-dom";
import "./FilterManagement.css";

const FilterManagement = () => {
  const [filters, setFilter] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch("https://secret-brushlands-81082.herokuapp.com/favouritefilters")
      .then((res) => res.json())
      .then((data) => setFilter(data));
  }, []);

  const titleRef = useRef();
  const requestRef = useRef();
  const transportationRef = useRef();
  const citiesRef = useRef();

  
  const addFavouriteFilter = (e) => {
    const title = titleRef.current.value;
    const request = requestRef.current.value;
    const transportation = transportationRef.current.value;
    const cities = citiesRef.current.value;

    const newFavouriteFilter = { title, request, transportation, cities };
    fetch("https://secret-brushlands-81082.herokuapp.com/favouritefilters", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFavouriteFilter),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Favourite Filter added Successfully");
          e.target.reset();
        }
        window.location.reload()
      });
    e.preventDefault();

  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://secret-brushlands-81082.herokuapp.com/favouritefilters/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted filter successfully");
            const remainingfilters = filters.filter(
              (filter) => filter._id !== id
            );
            setFilter(remainingfilters);
          }
        });
    }
  };
  const handleSearch = (text) => {
    if (text.length > 0) {
      const searchFilter = filters.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilter(searchFilter);
    } else {
      fetch("https://secret-brushlands-81082.herokuapp.com/favouritefilters")
        .then((res) => res.json())
        .then((data) => setFilter(data));
    }
  };

  return (
    <div className="filtermanage">
      <TopHeading>Filter Management </TopHeading>
      <div>
        <Link to="/">
          <button className="btn btn-outline-primary back px-3">Back</button>
        </Link>
      </div>
      <div className="row">
        <div className="col-md-4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={() => handleSearch(search)}
            className="w-75 p-2"
            type="text"
            placeholder="Search"
          />
          <AiOutlineSearch
            color="black"
            size={30}
            style={{ position: "relative", right: "30px" }}
          />
          <div className=" mt-5 w-75 m-auto shadow-sm p-3 mb-5 bg-body rounded">
            {filters.map((filter) => (
              <div
                key={filter._id}
                class="card "
                style={{
                  width: "18rem",
                  padding: "10px",
                  margin: "10px",
                  backgroundColor: "lightcyan",
                }}
              >
                <div class="card-body">
                  <h5 class="card-title text-start">{filter.title}</h5>
                  <h6 class="card-subtitle mb-2 text-start">
                    {filter.request}
                  </h6>
                  <p class="card-text text-start">
                    {filter.transportation}, {filter.cities}
                  </p>
                  <button
                    onClick={() => handleDelete(filter._id)}
                    className="btn btn-danger px-3 "
                  >
                    Delete
                  </button>
                  <Link to={`/filtermanagement/update/${filter._id}`}>
                    <button className="btn btn-warning m-4">Update</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-7 d-flex flex-column  shadow-sm p-2 mb-5 bg-body rounded">
          <form onSubmit={addFavouriteFilter}>
            <h4 className="text-start">Create Favourite Filter</h4>
            <div className="me-auto my-2">
              <h6 className="text-start">Give a title</h6>
              <input className="titleField" type="text" ref={titleRef} />
              {/* Request type */}
              <div className="">
                <label htmlFor="select-request-type"></label>
                <h6 className="text-start">Request Type</h6>
                <select ref={requestRef}>
                  <option>Select Request Type</option>
                  <option value="Simple Delivery">Simple Delivery</option>
                  <option value="Advanced Delivery">Advanced Delivery</option>
                </select>
              </div>
              {/* transportation type */}
              <div className="">
                <label htmlFor="select-transportation-type"></label>
                <h6 className="text-start">Transportation Type</h6>
                <select ref={transportationRef}>
                  <option>Select Transportation Type</option>
                  <option value="Parcel Moving">Parcel Moving</option>
                  <option value="Travels Guru">Travels</option>
                  <option value="Sundarban Courier">Sundarban</option>
                  <option value="Es Alam">Es ALAM</option>
                  <option value="Paharika Express">Paharika Express</option>
                  <option value="Paperfly Poribahan">Paperfly Poribahan</option>
                </select>
              </div>
              <div>
                {/* Cities type */}
                <label htmlFor="select-cities"></label>
                <h6 className="text-start">Select Cities</h6>
                <select ref={citiesRef}>
                  <option>Select Cities</option>
                  <option value="Copenhegen">Copenhegen</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Delhi">Delhi</option>
                </select>
                <br />
                <br />
                <br />
              </div>
            </div>
            <button type="submit" className="btn btn-primary px-3 filterbtn">
              Add Filter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterManagement;
