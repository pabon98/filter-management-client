import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { TopHeading } from "../TopHeading/TopHeading";
import {Link} from 'react-router-dom'
import "./FilterManagement.css";

const FilterManagement = () => {
  return (
    <div className="filtermanage">
      <TopHeading>Filter Management </TopHeading>
      <div>
        <Link to='/'><button className="btn btn-outline-primary back px-3">Back</button></Link>
      </div>
      <div className="row">
        <div className="col-md-4">
          <input className="w-75 p-2" type="text" placeholder="Search" />
          <AiOutlineSearch
            color="black"
            size={30}
            style={{ position: "relative", right: "30px" }}
          />
        </div>
        <div className="col-md-7 d-flex flex-column justify-content-center align-items-center shadow-sm p-2 mb-5 bg-body rounded">
          <h4 className=" me-auto">Create Favourite Filter</h4>
          <div className="me-auto">
            <h6 className="text-start">Give a title</h6>
            <input className="titleField" type="text" name="" id="" />
            {/* Request type */}
            <div className="">
              <label htmlFor="select-request-type"></label>
              <h6 className="text-start">Request Type</h6>
              <select name="" id="">
                <option>Select Request Type</option>
                <option value="1">Simple Delivery</option>
                <option value="1">Advanced Delivery</option>
              </select>
            </div>
            {/* transportation type */}
            <div className="">
              <label htmlFor="select-transportation-type"></label>
              <h6 className="text-start">Transportation Type</h6>
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
              <h6 className="text-start">Select Cities</h6>
              <select name="" id="">
                <option>Select Cities</option>
                <option value="1">Copenhegen</option>
                <option value="2">Dhaka</option>
                <option value="3">Delhi</option>
              </select>
              <br /><br /><br />
            </div>
            
          </div>
          
        </div>
        
      </div>
      <button className='btn btn-primary filterbtn'>Add Filter</button>
      <button className="btn btn-danger cancelbtn ">Cancel</button>
    </div>
  );
};

export default FilterManagement;
