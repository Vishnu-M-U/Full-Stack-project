import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";
import { listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import "./ListEmployeeComponent.css";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();
  const [template, setTemplate] = useState(1);

  useEffect(() => {
    getAllEmployees();
  }, []);

  async function getAllEmployees() {
    try {
      const response = await listEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    } finally {
      setLoading(false);
    }
  }
  function handleTemplate() {
    if (template === 2) {
      setTemplate(1);
      return;
    }
    let currentTemplate = template;
    setTemplate(++currentTemplate);
  }
  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateSelectedEmployee(employee) {
    setSelectedEmployee(employee);
  }

  const handleDownload = async () => {
    const canvas = await html2canvas(document.getElementById("template"));
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, `${selectedEmployee.firstName}.png`, "image/png");
  };

  return (
    <div className="background m-5 p-5">
      <div style={{ paddingLeft: "100px" }}>
        <h2 className="text-center">Welcome To Tarento</h2>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h4>Select an Employee</h4>
          <div className="list-group">
            {employees.map((employee) => (
              <button
                key={employee.id}
                className={`list-group-item list-group-item-action ${
                  selectedEmployee && selectedEmployee.id === employee.id
                    ? "active"
                    : ""
                }`}
                onClick={() => updateSelectedEmployee(employee)}
              >
                {employee.id} {employee.firstName} {employee.lastName}
              </button>
            ))}
          </div>
        </div>
        <div id="template" className="col-md-9">
          {template === 1 &&
            (selectedEmployee ? (
              <Template1 employeeObject={selectedEmployee} />
            ) : (
              <p>No Employee selected</p>
            ))}

          {template === 2 &&
            (selectedEmployee ? (
              <Template2 employeeObject={selectedEmployee} />
            ) : (
              <p>No Employee selected</p>
            ))}
        </div>
        <div style={{ paddingLeft: "285px" }}>
          <button
            className="btn btn-primary mt-2 mx-5"
            onClick={handleTemplate}
          >
            Next Template
          </button>
          <button
            className="btn btn-primary mt-2 mx-5"
            onClick={addNewEmployee}
          >
            Add Employee
          </button>
          <button
            className="btn btn-primary mt-2 mx-5"
            onClick={handleDownload}
          >
            Download Screenshot
          </button>
        </div>
      </div>
    </div>
  );
};
export default ListEmployeeComponent;
