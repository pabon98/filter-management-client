import React, { useRef } from "react";
import "./FilterForm.css";

const FilterForm = () => {
    const savedfilterRef = useRef()
    const requestRef = useRef()
    const transportationRef = useRef()
    const citiesRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()
    const startTimeRef = useRef()
    const endTimeRef = useRef()

    const handleAddFilter = (e)=>{
        const savedFilter = savedfilterRef.current.value;
        const requestDelivery = requestRef.current.value;
        const transportation = transportationRef.current.value;
        const cities = citiesRef.current.value;
        const startDate = startDateRef.current.value;
        const endDate = endDateRef.current.value;
        const startTime = startTimeRef.current.value;
        const endTime = endTimeRef.current.value;

        const newFilter = {savedFilter,requestDelivery,transportation,cities,startDate,endDate,startTime,endTime}
        fetch('http://localhost:5000/filters',{
           method: 'POST',
           headers:{
            'content-type': 'application/json'
           },
           body: JSON.stringify(newFilter)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                // console.log(data)
                alert('Filter added sucessfully')
                e.target.reset()
            }
        })

        e.preventDefault()
    }
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Favourite Filter
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
       <form onSubmit={handleAddFilter} >
       <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Select Filter
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* Form */}
              <div>
                <label htmlFor="saved-filter"></label>
                <select  ref={savedfilterRef}>
                  <option>Select Saved Filter</option>
                  <option value="Sinemates Pro 2.0">Sinemates Pro 2.0</option>
                  <option value="Filter 5">Filter 5</option>
                  <option value="Multi Express">Multi Express</option>
                  <option value="Best One">Best One</option>
                  <option value="Multi Express">Multi Express</option>
                  <option value="Best One">Best One</option>
                </select>
              </div>
              <p>OR</p>
              {/* Request type */}
              <div>
                <label htmlFor="select-request-type"></label>
                <select  ref={requestRef}>
                  <option>Select Request Type</option>
                  <option value="Simple Delivery">Simple Delivery</option>
                  <option value="Advanced Delivery">Advanced Delivery</option>
                </select>
              </div>
              {/* transportation type */}
              <div className="my-3">
                <label htmlFor="select-transportation-type"></label>
                <select name="" id="" ref={transportationRef}>
                  <option>Select Transportation Type</option>
                  <option value="Sundarban Courier">Sundarban Courier</option>
                  <option value="Es Alam Paribahan">Es Alam Paribahan</option>
                  <option value="Shamoli Travels">Shamoli Travels</option>
                  <option value="Paperfly">Paperfly</option>
                  <option value="Desh Travels">Desh Travels</option>
                  <option value="Furniture 2 moving">Furniture 2 moving</option>
                </select>
              </div>
              <div>
                {/* Cities type */}
                <label htmlFor="select-cities"></label>
                <select name="" id="" ref={citiesRef}>
                  <option>Select Cities</option>
                  <option value="Copenhegen">Copenhegen</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>
              {/* Date */}
              <div className="row my-3">
                <div className="col-md-6">
                  <label htmlFor="inputDate"></label>
                  <input type="date" id="date" placeholder="Start Date" ref={startDateRef} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputDate"></label>
                  <input type="date" id="date" placeholder="End Date" ref={endDateRef} />
                </div>
                <div className="col-md-6 my-2">
                  <label htmlFor="inputDate"></label>
                  <input type="date" id="date" placeholder="Start Time" ref={startTimeRef} />
                </div>
                <div className="col-md-6 my-2">
                  <label htmlFor="inputDate"></label>
                  <input type="date" id="date" placeholder="End Time" ref={endTimeRef} />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit"  class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
       </form>
      </div>
    </div>
  );
};

export default FilterForm;
