import axios from "axios";

const ASSIGN_BASE_REST_API_URL = "http://localhost:8080/assign";

class AssignService {
  getItemById(ItemId) {
    return axios.get(ASSIGN_BASE_REST_API_URL + "/" + ItemId);
  }
  getEmployeeById(employeeId) {
    return axios.get(ASSIGN_BASE_REST_API_URL + "/" + employeeId);
  }
  updateEmployee(employeeId, employee) {
    return axios.put(ASSIGN_BASE_REST_API_URL + "/" + employeeId, employee);
  }
  createEmployee(employee) {
    return axios.post(ASSIGN_BASE_REST_API_URL, employee);
  }

  AssignItemEmployee(employeeId, employee, Item, ItemId) {
    return axios.put(
      ASSIGN_BASE_REST_API_URL + "/" + employeeId,
      employee,
      Item,
      ItemId
    );
  }
}

export default new AssignService();
