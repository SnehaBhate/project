import React, { useEffect, useState } from "react";
import AssignService from "../Services/AssignService";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AssignComponent = () => {
  const [name, setFirstName] = useState("");
  const [emp_id, setId] = useState("");
  const [item_assigned, setAssigned] = useState("");
  const [item_id, setItemId] = useState("");

  // const [emailId, setEmailId] = useState("");
  // const [salary, setsalary] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const SaveAssignedItem = (e) => {
    e.preventDefault();

    const assign = { name, emp_id, item_assigned, item_id };
    if (id) {
      AssignService.AssignItemEmployee(id, assign)
        .then((response) => {
          history.push("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      AssignService.createEmployee(assign)
        .then((response) => {
          console.log(response.data);

          history.push("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    AssignService.AssignItemEmployee(id)
      .then((response) => {
        setFirstName(response.data.name);
        setId(response.data.emp_id);
        setAssigned(response.data.item_assigned);
        setItemId(response.data.item_id);

        //  setEmailId(response.data.emailId);
        // setsalary(response.data.salary);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const title = () => {
    if (id) {
      return <h2 className="text-center">Assign Item</h2>;
    } else {
      return <h2 className="text-center">Register Employee</h2>;
    }
  };

  return (
    <div>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}

            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Employee ID :</label>

                  <input
                    required
                    type="text"
                    placeholder="Enter your ID"
                    name="Employee ID"
                    className="form-control"
                    value={emp_id}
                    onChange={(e) => setId(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Name : </label>

                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Item Assigned : </label>

                  <input
                    required
                    type="text"
                    placeholder=" "
                    name="item assigned"
                    className="form-control"
                    value={item_assigned}
                    onChange={(e) => setAssigned(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Item ID : </label>

                  <input
                    required
                    type="text"
                    placeholder=" "
                    name="item ID"
                    className="form-control"
                    value={item_id}
                    onChange={(e) => setItemId(e.target.value)}
                  ></input>
                </div>

                {/*
                <div className="form-group mb-2">
                  <label className="form-label">Email Id :</label>

                  <input
                    required
                    type="text"
                    placeholder="Enter email Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Salary:</label>

                  <input
                    required
                    type="text"
                    placeholder="Salary"
                    name="salary"
                    className="form-control"
                    value={salary}
                    onChange={(e) => setsalary(e.target.value)}
                  ></input>
                </div> */
                /* <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit
                </button>

                <Link
                  to="/employees"
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee; */}
                <button
                  className="btn btn-success"
                  onClick={(e) => SaveAssignedItem(e)}
                >
                  Submit
                </button>

                <Link
                  to="/employees"
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignComponent;
