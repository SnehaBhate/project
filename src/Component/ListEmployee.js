import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import EmployeeService from "../Services/EmployeeServices";
//import AssignServices from "../Services/AssignServices";

const ListEmployee = ({ item_id, name }) => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    getAllEmployees();
  });

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h2 className="text-center"> List Employees </h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>

      <Link to="/List-Item" className="btn btn-primary mb-2">
        List Item
      </Link>

      <table className="table table-bordered table-striped">
        <thead>
          <th> Employee Id </th>
          <th> Employee Name </th>
          <th> Item Assigned</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.emp_id}>
              <td> {employee.emp_id} </td>
              <td> {employee.name} </td>
              <td>{employee.item_assigned}</td>

              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-employee/${employee.emp_id}`}
                >
                  Update
                </Link>
                <Link
                  className="btn btn-info"
                  to={`/edit-employee/${employee.emp_id}`}
                
                >
                  Assign
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(employee.emp_id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
