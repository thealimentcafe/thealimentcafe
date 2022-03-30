import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users/list";
import UserAdd from "./pages/users/add";
import UserEdit from "./pages/users/edit";
import UserView from "./pages/users/view";
import OrdersView from "./pages/orders/view";
import OrdersList from "./pages/orders/list";
import OrdersAdd from "./pages/orders/add-order";
import OrdersLive from "./pages/orders/live";
import Stocks from "./pages/stocks/list";
import StockAdd from "./pages/stocks/add-item";
import StockUpdate from "./pages/stocks/stock-update";
import MenuList from "./pages/menus/list";
import MenuAdd from "./pages/menus/add";
import Sales from "./pages/sales/index";


function App() {
   return (
    
    <Router>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/users/list">
          <Users />
        </Route>
        <Route path="/users/add">
          <UserAdd />
        </Route>
        <Route path="/users/edit/:id">
          <UserEdit />
        </Route>
        <Route path="/users/view/:id">
          <UserView />
        </Route>
        <Route path="/orders/view">
          <OrdersView />
        </Route>
        <Route path="/orders/list">
          <OrdersList />
        </Route>
        <Route path="/orders/add-order">
          <OrdersAdd />
        </Route>
        <Route path="/orders/live">
          <OrdersLive />
        </Route>
        <Route path="/stocks/list">
          <Stocks />
        </Route>
        <Route path="/stocks/add-item">
          <StockAdd />
        </Route>
        <Route path="/stocks/stock-update">
          <StockUpdate />
        </Route>
        <Route path="/menus/list">
          <MenuList />
        </Route>
        <Route path="/menus/add">
          <MenuAdd />
        </Route>
        <Route path="/sales">
          <Sales />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
