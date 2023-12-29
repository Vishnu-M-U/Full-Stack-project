import React, { useState, useEffect } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [manager, setManager] = useState("");
  const [ibu, setIbu] = useState("");
  const [quote, setQuote] = useState("");

  const { id } = useParams();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    homeTown: "",
    education: "",
    experience: "",
    manager: "",
    ibu: "",
    quote: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setHomeTown(response.data.homeTown);
          setEducation(response.data.education);
          setExperience(response.data.experience);
          setManager(response.data.manager);
          setIbu(response.data.ibu);
          setQuote(response.data.quote);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = {
        firstName,
        lastName,
        email,
        homeTown,
        education,
        experience,
        manager,
        ibu,
        quote,
      };
      console.log(employee);

      if (id) {
        updateEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }

    if (homeTown.trim()) {
      errorsCopy.homeTown = "";
    } else {
      errorsCopy.homeTown = "HomeTown is required";
      valid = false;
    }

    if (education.trim()) {
      errorsCopy.education = "";
    } else {
      errorsCopy.education = "education is required";
      valid = false;
    }

    if (education.trim()) {
      errorsCopy.experience = "";
    } else {
      errorsCopy.experience = "experience is required";
      valid = false;
    }

    if (education.trim()) {
      errorsCopy.manager = "";
    } else {
      errorsCopy.manager = "manager is required";
      valid = false;
    }

    if (education.trim()) {
      errorsCopy.ibu = "";
    } else {
      errorsCopy.ibu = "ibu is required";
      valid = false;
    }

    if (education.trim()) {
      errorsCopy.quote = "";
    } else {
      errorsCopy.quote = "quote is required";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }
  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-8 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter Employee First Name"
                  name="firstName"
                  value={firstName}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                {errors.firstName && (
                  <div className="invalid-feedback"> {errors.firstName} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter Employee Last Name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                {errors.lastName && (
                  <div className="invalid-feedback"> {errors.lastName} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="text"
                  placeholder="Enter Employee Email"
                  name="email"
                  value={email}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {errors.email && (
                  <div className="invalid-feedback"> {errors.email} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">HomeTown:</label>
                <input
                  type="text"
                  placeholder="Enter Employee HomeTown"
                  name="homeTown"
                  value={homeTown}
                  className={`form-control ${
                    errors.homeTown ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setHomeTown(e.target.value)}
                ></input>
                {errors.homeTown && (
                  <div className="invalid-feedback"> {errors.homeTown} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Education:</label>
                <input
                  type="text"
                  placeholder="Enter Employee Education"
                  name="education"
                  value={education}
                  className={`form-control ${
                    errors.education ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setEducation(e.target.value)}
                ></input>
                {errors.education && (
                  <div className="invalid-feedback"> {errors.education} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Experience:</label>
                <input
                  type="text"
                  placeholder="Enter Employee Experience"
                  name="experience"
                  value={experience}
                  className={`form-control ${
                    errors.experience ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setExperience(e.target.value)}
                ></input>
                {errors.experience && (
                  <div className="invalid-feedback"> {errors.experience} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Manager:</label>
                <input
                  type="text"
                  placeholder="Enter manager"
                  name="experience"
                  value={manager}
                  className={`form-control ${
                    errors.manager ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setManager(e.target.value)}
                ></input>
                {errors.manager && (
                  <div className="invalid-feedback"> {errors.manager} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Ibu:</label>
                <input
                  type="text"
                  placeholder="Enter ibu"
                  name="ibu"
                  value={ibu}
                  className={`form-control ${errors.ibu ? "is-invalid" : ""}`}
                  onChange={(e) => setIbu(e.target.value)}
                ></input>
                {errors.ibu && (
                  <div className="invalid-feedback"> {errors.ibu} </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">The quote that fuels me:</label>
                <input
                  type="text"
                  placeholder="Enter quote"
                  name="quote"
                  value={quote}
                  className={`form-control ${errors.quote ? "is-invalid" : ""}`}
                  onChange={(e) => setQuote(e.target.value)}
                ></input>
                {errors.quote && (
                  <div className="invalid-feedback"> {errors.quote} </div>
                )}
              </div>

              <button
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
