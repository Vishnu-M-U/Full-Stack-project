import React from "react";
import "./Template1.css";
function Template1({ employeeObject }) {
  return (
    <div>
      <div className="row">
        <div className="col custom-bg-color rounded m-1  p-2 ">
          <p>Employee Name:</p>
          <p>
            {employeeObject.firstName} {employeeObject.lastName}
          </p>
        </div>
        <div className="col custom-bg-color rounded m-1 py-2  ">
          <p>Email:</p>
          <p>{employeeObject.email}</p>
        </div>
      </div>

      <div className="row">
        <div className="col custom-bg-color rounded m-1 py-2 ">
          <p>Home Town:</p>
          <p>{employeeObject.homeTown}</p>
        </div>
        <div className="col custom-bg-color rounded m-1 py-2 ">
          <p>Education:</p>
          <p>{employeeObject.education}</p>
        </div>
        <div className="col custom-bg-color rounded m-1 py-2 ">
          <p>Experience:</p>
          <p>{employeeObject.experience}</p>
        </div>
      </div>

      <div className="row">
        <div className="col custom-bg-color rounded m-1 py-2 ">
          <p>Manager:</p>
          <p>{employeeObject.manager}</p>
        </div>
        <div className="col custom-bg-color rounded m-1 py-2 ">
          <p>IBU:</p>
          <p>{employeeObject.ibu}</p>
        </div>
      </div>

      <div className="row">
        <div className="col custom-bg-color rounded m-1 py-2">
          <p>The Quote that fuels me:</p>
          <p>{employeeObject.quote}</p>
        </div>
      </div>
    </div>
  );
}

export default Template1;
