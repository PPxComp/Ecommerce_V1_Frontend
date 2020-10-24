import React from "react";
import Navbar from "./components/Navbar/navbar.jsx";
import Register from "./pages/register";
import Login from "./pages/login.jsx";
import Stock from "./pages/stock";
import StockById from "./pages/stockById";
import AddStock from "./pages/addStock";
import EditStockById from "./pages/editStockById.jsx";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import EditStock from "./pages/editStock";
import "dotenv";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/stock" />} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/stock" component={Stock} />
          <Route path="/stock/:id" component={StockById} />
          <Route path="/addstock" component={AddStock} />
          <Route path="/editstock" exact component={EditStock} />
          <Route path="/editstock/:id" component={EditStockById}/>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
