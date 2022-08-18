import React, { useEffect, useState } from "react";
import { TopHeading } from "../TopHeading/TopHeading";
import { BsFilter } from "react-icons/bs";
import FilterForm from "../FilterForm/FilterForm";

const CloudRequest = () => {
  const [filters, setFilter] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    fetch("https://secret-brushlands-81082.herokuapp.com/filters")
      .then((res) => res.json())
      .then((data) => setFilter(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://secret-brushlands-81082.herokuapp.com/filters/${id}`;
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
   if(text.length>0){
    const searchText = filters.filter((dt) =>
    dt.savedFilter.toLowerCase().includes(text.toLowerCase())
  );
  setFilter(searchText);
   }
   else{
    fetch("https://secret-brushlands-81082.herokuapp.com/filters")
      .then((res) => res.json())
      .then((data) => setFilter(data));

   }
  
  };
  return (
    <div>
      <TopHeading>Cloud Request</TopHeading>
      <div className="row">
        <div className="col-md-4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={()=>handleSearch(search)}
            className="w-75 p-2"
            type="text"
            placeholder="Search"
          />
          <BsFilter color="black" size={30} />
          <div className=" mt-5 w-75 m-auto shadow-sm p-3 mb-5 bg-body rounded">
            {filters.map((filter) => (
              <div
                key={filter._id}
                class="card"
                style={{
                  width: "18rem",
                  padding: "10px",
                  margin: "10px",
                  backgroundColor: "lightcyan",
                }}
              >
                <div class="card-body">
                  <h5 class="card-title text-start">{filter.savedFilter}</h5>
                  <h6 class="card-subtitle mb-2 text-start">
                    {filter.requestDelivery}
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
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-7 d-flex flex-column justify-content-center align-items-center shadow-sm p-2 mb-5 bg-body rounded">
          <h6 className="my-5">
            You don't have any favourite filter. Please create a filter first
          </h6>
          {/* Modal */}
          {/* <!-- Button trigger modal --> */}
          <FilterForm />
          <br />
        </div>
      </div>
    </div>
  );
};

export default CloudRequest;
