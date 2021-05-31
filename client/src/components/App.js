import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart/Cart";
import CartItemSummary from "./Cart/CartItemSummary";
import CartContextProvider from "./CartContext";
import GlobalStyles from "./GenericComponents/GlobalStyles";
import Home from "./Home/Home";
import SiteHeader from "./SiteHeader";
import ItemDetails from "./Item/ItemDetails";
function App() {

  return (
    <>
      <CartContextProvider>
        <GlobalStyles/>
        <Wrapper>
          <SiteHeader/>
          <Switch>
            <Route exact path={["/", "/page/:pageNum"]}>
              <Home/>
            </Route>
            {/*useParams.pageNum may be undefined if path is "/" */}
            <Route exact path="/product/:productId">
              I'm a placeholder for 1-product-view
            </Route>
            <Route exact path="/cart">
              <Cart></Cart>
            </Route>
            <Route exact path="/test1">
              
            </Route>
            <Route exact path="/test1">
              Use me as a sandbox
            </Route>
            <Route exact path="/test2">
              Use me as a sandbox
            </Route>
            <Route exact path="/test3">
              Use me as a sandbox
            </Route>
            <Route exact path="/test4">
              Use me as a sandbox
            </Route>
          </Switch>
        </Wrapper>
      </CartContextProvider>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 1000px;
  width: 80%;
  margin: 0px auto 20px;
`;

export default App;
