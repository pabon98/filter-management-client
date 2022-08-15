import React from "react";
import { TopHeading } from "../TopHeading/TopHeading";
import { BsFilter } from "react-icons/bs";
import FilterForm from "../FilterForm/FilterForm";

const CloudRequest = () => {
  return (
    <div>
      <TopHeading>Cloud Request</TopHeading>
      <div className="row">
        <div className="col-md-4 ">
          <input className="w-75 p-2" type="text" placeholder="Search"  />
          <BsFilter color="black" size={30} />
        </div>
        <div className="col-md-7 d-flex flex-column justify-content-center align-items-center shadow-sm p-2 mb-5 bg-body rounded">
          <h6 className="my-5">
            You don't have any favourite filter. Please create a filter first
          </h6>
          {/* Modal */}
          {/* <!-- Button trigger modal --> */}
         <FilterForm/>
          <br />
        </div>
      </div>
    </div>
  );
};

export default CloudRequest;
