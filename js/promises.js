const orderShoesOnline = () => {
  const shoesInStock = document.querySelector('#shoes-in-stock').checked;
  // The two arguments sent to a promise function are
  // resolve and reject. They've been renamed here to help with
  // the analogy.
  // When you order shoes online, the store PROMISES to send you the shoes.
  // After you place the order, you do other things like eat, sleep and go to class.
  // You don't have to even think about the order until it's delivered.
  // (or if it's not in stock, they'll tell you immediately)
  return new Promise((fulfillOrder, rejectOrder) => {
    if (shoesInStock) {
      // It takes the store 3000 milliseconds to deliver your order. Not bad.
      setTimeout(() => {
        // They were able to fulfill your order and send a message
        // telling you where to pick it up.
        fulfillOrder('Package on your front porch');
      }, 3000);
    } else {
      // They sent a message telling you why they couldn't fulfill the order.
      rejectOrder('Not in stock');
    }
  })
}

const clickBuyShoesCallback = (e) => {
  // We already placed our order.
  const placedOrder = orderShoesOnline();
  // @todo First, try sending the order to the Jumbotron and see what you get
  // by uncommenting the line below.
  // console.log(placedOrder)
  // sendToJumbotron(placedOrder);
  // console.log(placedOrder)

  // Take note of what is in the Jumbotron, then
  // make that line a comment again.

  // @todo placedOrder represents the fact that you placed the order.
  // Use .then() to react to when the order is delivered, and send the
  // delivery message to the Jumbotron
  // Use .catch() to send order rejection messages to the Jumbotron.

  // Uncomment below 👇 to place your order and send the results
  // to the Jumbotron.
  placedOrder
    .then((response) => {
      sendToJumbotron(response);
    })
    .catch((error) => {
      sendToJumbotron(error);
    });

    // @todo keep this sendToJumbotron at the bottom of the function.
    // Notice how it shows up in the Jumbotron before the delivery
    // message, even though the code appears later. That's because Promises
    // don't prevent other code from executing as they work.
    sendToJumbotron('I am waiting for my shoes');
}

//** fetch() grabs the contents of a remote resource.
//** fetch() returns a Promise!

const fetchFromItunesSendResponseCallback = () => {
  // @todo we are going to use fetch() to get data from itunes
  //  with this url:
  // 'https://itunes.apple.com/search?term=hoobastank'
  // Chain one .then() to fetch, and send the response to the
  // Jumbotron.
  // @see https://www.javascripttutorial.net/javascript-fetch-api/
  fetch('https://itunes.apple.com/search?term=hoobastank')
  .then((response) => {
    console.log(response)
    // @todo, send the response to the Jumbotron.
    sendToJumbotron(response);
  });
}

const fetchFromItunesSendJsonCallback = () => {
  // @todo, as seen in the prior function, fetch returns
  // a Response object. An additional step is needed to
  // get the data out of that response.
  // Fetch 'https://itunes.apple.com/search?term=hoobastank' again.
  // There should be *two* .then() uses
  // The first should return response.json
  // the second will receive the parsed json, and it should be sent
  // to the Jumbotron.
  //@see   // @see https://www.javascripttutorial.net/javascript-fetch-api/
  fetch('https://itunes.apple.com/search?term=hoobastank')
    .then((resp) => {
      return resp.json()
    })
    .then((jsonz) => {
      sendToJumbotron(jsonz)
      console.log('THE JSON', jsonz)
    });
}