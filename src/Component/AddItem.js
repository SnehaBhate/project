import React, { useEffect, useState } from "react";
import ItemService from "../Services/ItemServices";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//import AssignServices from "../Services/AssignServices";

const AddItem = () => {
  const [name, setItemName] = useState("");
  const [item_id, setId] = useState("");
  // const [emailId, setEmailId] = useState("");
  // const [salary, setsalary] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const saveOrUpdateItem = (e) => {
    e.preventDefault();

    const Item = { name };
    if (id) {
      ItemService.updateItem(id, Item)
        .then((response) => {
          history.push("/List-Item");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      ItemService.createItem(Item)
        .then((response) => {
          console.log(response.data);

          history.push("/List-Item");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    ItemService.getItemById(id)
      .then((response) => {
        // setItemName(response.data.name);
        // setId(response.data.item_id);
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
      return <h2 className="text-center">Add Item</h2>;
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
                  <label className="form-label">Item ID :</label>

                  <input
                    required
                    type="text"
                    placeholder="Enter Item ID"
                    name="Item ID"
                    className="form-control"
                    value={item_id}
                    onChange={(e) => setId(e.target.value)}
                  ></input>
                </div>

                {
                  <div className="form-group mb-2">
                    <label className="form-label"> Item Name : </label>

                    <input
                      required
                      type="text"
                      placeholder="Enter Item name"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setItemName(e.target.value)}
                    ></input>
                  </div> /*
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
                }

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateItem(e)}
                >
                  Submit
                </button>

                <Link
                  to="/List-Item"
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

export default AddItem;
