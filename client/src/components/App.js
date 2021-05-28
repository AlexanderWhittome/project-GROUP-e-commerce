import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path={["/", "/:pageNum"]}>
        I'm a placeholder for 24-product-view. Page number: {useParams.pageNum}
      </Route>
      {/*useParams.pageNum may be undefined if path is "/" */}
      <Route exact path="/product/:productId">
        I'm a placeholder for 1-product-view
      </Route>
      <Route exact path="/cart">
        I'm a placeholder for the cart
      </Route>
      <Route exact path="/test1">
        Use me as a sandbox
      </Route>
      <Route exact path="/test1">
        Use me as a sandboxcd
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
  );
}

export default App;
