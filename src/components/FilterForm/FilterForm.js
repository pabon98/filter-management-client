import React from "react";
import "./FilterForm.css";

const FilterForm = () => {
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
                <select id="filters" name="filterlist" form="filterform">
                  <option>Select Saved Filter</option>
                  <option value="1">Sinemates Pro 2.0</option>
                  <option value="2">Filter 5</option>
                  <option value="3">Multi Express</option>
                  <option value="4">Best One</option>
                  <option value="5">Multi Express</option>
                  <option value="6">Best One</option>
                </select>
              </div>
              <p>OR</p>
              {/* Request type */}
              <div>
                <label htmlFor="select-request-type"></label>
                <select name="" id="">
                  <option>Select Request Type</option>
                  <option value="1">Simple Delivery</option>
                  <option value="1">Advanced Delivery</option>
                </select>
              </div>
              {/* transportation type */}
              <div className="my-3">
                <label htmlFor="select-transportation-type"></label>
                <select name="" id="">
                  <option>Select Transportation Type</option>
                  <option value="1">Furniture 2 moving</option>
                  <option value="2">Furniture 2 moving</option>
                  <option value="3">Furniture 2 moving</option>
                  <option value="4">Furniture 2 moving</option>
                  <option value="5">Furniture 2 moving</option>
                  <option value="6">Furniture 2 moving</option>
                </select>
              </div>
              <div>
                {/* Cities type */}
                <label htmlFor="select-cities"></label>
                <select name="" id="">
                  <option>Select Cities</option>
                  <option value="1">Copenhegen</option>
                  <option value="2">Dhaka</option>
                  <option value="3">Delhi</option>
                </select>
              </div>
              {/* Date */}
              <div className="row my-3">
                <div className="col-md-6">
                  <label htmlFor="inputDate"></label>
                  <input type="date" id="date" placeholder="Start Date" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputDate"></label>
                  <input type="date" id="date" placeholder="End Date" />
                </div>
                <div className="col-md-6 my-2">
                  <label htmlFor="inputDate"></label>
                  <input type="date" id="date" placeholder="Start Time" />
                </div>
                <div className="col-md-6 my-2">
                  <label htmlFor="inputDate"></label>
                  <input type="date" id="date" placeholder="End Time" />
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
              <button type="button" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
