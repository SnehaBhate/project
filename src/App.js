import "./App.css";
import AddEmployee from "./Component/AddEmployee";
import ListEmployee from "./Component/ListEmployee";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
import ListItem from "./Component/ListItem";
import AddItem from "./Component/AddItem";
import AssignComponent from "./Component/AssignComponent";
import NewAssign from "./Component/NewAssign";

function App() {
  // const [item_assigned, setAssigned] = useState("");
  // const [item_id, setItemId] = useState("");
  return (
    <div>
      <Router>
        {/* <HeaderComponent /> */}
        <div className="container"></div>
        <Switch>
          {/* localhost:3000 */} 

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route path="/home" component={ListEmployee}></Route>
          <Route path="/employees" component={ListEmployee}></Route>
          <Route path="/add-employee" component={AddEmployee}></Route>
          <Route path="/edit-employee/:id" component={AddEmployee}></Route>
          <Route path="/List-Item" component={ListItem}></Route>
          <Route path="/add-item" component={AddItem}></Route>
          <Route path="/edit-item/:id" component={AddItem}></Route>
          <Route path="/edit-employee/:id" component={AssignComponent}></Route>
          {/* <Route path="aasignItem" component={NewAssign}></Route> */}
        </Switch>

        {/* <FooterComponent /> */}
      </Router>
    </div>
  );
}
export default App;
