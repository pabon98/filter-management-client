import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateFilter.css";

const UpdateFilter = () => {
  const [filter, setFilter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/filtermanagement/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFilter(data));
  }, []);
  //update title
  const handleTitle = (e) => {
    const updateTitle = e.target.value;
    const updatedTitleName = {
      title: updateTitle,
      request: filter.request,
      transport: filter.transportation,
      cities: filter.cities,
    };
    setFilter(updatedTitleName);
  };
  const handleRequest = (e) => {
    const updateRequest = e.target.value;
    const updatedRequestName = {
      request: updateRequest,
      title: filter.title,
      transportation: filter.transportation,
      cities: filter.cities,
    };
    setFilter(updatedRequestName);
  };
  const handleTransportation = (e) => {
    const updateTransport = e.target.value;
    const updatedTransportName = {
      transportation: updateTransport,
      title: filter.title,
      request: filter.request,
      cities: filter.cities,
    };
    setFilter(updatedTransportName);
  };
  const handleCities = (e) => {
    const updateCity = e.target.value;
    const updatedCityName = {
      cities: updateCity,
      title: filter.title,
      request: filter.request,
      transportation: filter.transportation,
    };
    setFilter(updatedCityName);
  };
  const handleUpdateFilter = (e) => {
    const url = `http://localhost:5000/filtermanagement/${id}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(filter),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated Successfully");
          setFilter({});
        }
      });

    e.preventDefault();
  };
  return (
    <div className="my-4 w-50 m-auto shadow-sm p-2 mb-5 bg-body rounded">
      <h1>Update {filter.title}</h1>
      <form onSubmit={handleUpdateFilter}>
        <h4 className="text-start">Create Favourite Filter</h4>
        <div className="my-2">
          <h6 className="text-start">Give a title</h6>
          <input
            onChange={handleTitle}
            className="titleField1"
            type="text"
            value={filter.title || ""}
          />
          {/* Request type */}
          <div className="">
            <label htmlFor="select-request-type"></label>
            <h6 className="text-start">Request Type</h6>
            <select onChange={handleRequest} value={filter.request || ""}>
              <option>Select Request Type</option>
              <option value="Simple Delivery">Simple Delivery</option>
              <option value="Advanced Delivery">Advanced Delivery</option>
            </select>
          </div>
          {/* transportation type */}
          <div className="">
            <label htmlFor="select-transportation-type"></label>
            <h6 className="text-start">Transportation Type</h6>
            <select
              onChange={handleTransportation}
              value={filter.transportation || ""}
            >
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
            <select onChange={handleCities} value={filter.cities || ""}>
              <option>Select Cities</option>
              <option value="Copenhegen">Copenhegen</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Delhi">Delhi</option>
            </select>
            <br />
            <br />
          </div>
        </div>
        <button className="btn btn-success updatebtn">Update</button>
      </form>
    </div>
  );
};

export default UpdateFilter;
