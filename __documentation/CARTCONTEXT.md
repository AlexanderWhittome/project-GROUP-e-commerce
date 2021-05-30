CartContext will be wrapped around the whole app. To use it in your component, first import it:

`import {CartContext} from "(relative path to CartContext*)"`

(*It will be located directly in the components folder, so adjust the path based on that)

You can access the values in the context with:
`const {cartContents, cartDispatch} = React.useContext(CartContext)`

You can expect the context to hold the following object (id 6543 will actually be included in the context by default in cartContents for testing purposes)

```js
{cartContents:{ //notice that cartContents is not an array, unlike items.json
  6543: {
  name: "Barska GB12166 Fitness Watch with Heart Rate Monitor",
  price: "$49.99",
  body_location: "Wrist",
  category: "Fitness",
  imageSrc: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHB...<REST_OF_IMAGE_ENCODING>",
  companyId: 19962,
  numInStock: 9,
  numInCart: 5
}
  1234: {/*Some other object with the same properties*/}
}
cartDispatch: //a function
}
```

cartDispatch is used to change cartContents.
---

Here are the properties expected when calling cartDispatch with `{type:"add"}`

```js
React.useContext(CartContext).cartDispatch({
  type: "add",
  itemObject: itemObject,
  numberAddedToCart: numberAddedToCart
});
```

There is no reason that I can think of for this function to be called outside the `localhost:3000/product/:id` route.

`numberAddedtoCart` is just an int representing the number of items added to the cart. **Don't allow it to be more than what's in stock. The context functions won't stop you if you put more into the cart than is in stock.**

`itemObject` should be of the exact same shape as the item objects you get as the body of the response from the `GET: "/api/product/:id"` endpoint, except as JS not JSON:

```js
  itemObject = {
    name: "Barska GB12166 Fitness Watch with Heart Rate Monitor",
    price: "$49.99",
    body_location: "Wrist",
    category: "Fitness",
    id: 6543,
    imageSrc: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHB...<REST_OF_IMAGE_ENCODING>",
    numInStock: 9,
    companyId: 19962
  },
```

This means if you're at the product page route, you should have that object in state. All you have to do is pass that state as itemObject.

---

Here are the properties expected when you call cartDispatch with `type: update`:

```js
React.useContext(CartContext).cartDispatch({
  type: update,
  itemId: itemId,
  newNumInCart: newNumInCart,
});
```

This sets cartContents.itemId to newNumInCart (it doesn't do the math for you).

Notice that you don't need the whole item object, just the ID. You also need the new number of items to be held in cart.

If newNumInCart is set to 0, the product going by `itemID` will be removed from the cart.

**There is no validation to ensure the cart doesn't hold more of an item than is in stock.**
