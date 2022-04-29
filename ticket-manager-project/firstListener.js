const TicketManager = require("./ticketManager")

//remember TicketManager carries a supply parameter

// since its a class create an instance of it asap

const ticketManager = new TicketManager(supply = 20)

// ticketManager.on("buy", () => {
//     console.log("A new ticket was just purchased");
// })


// //let me now buy ticket now self
// ticketManager.buy(
//     email = "seunawonugba@gmail.com", price = 20
//     )

// ticketManager.buy(
//     email = "seunawonugba@gmail.com", price = 20
//     )


ticketManager.once("buy", () => {
    console.log("This will be purchased once");
})


ticketManager.buy(
    email = "seunawonugba@gmail.com", price = 20
    )

ticketManager.buy(
    email = "seunawonugba@gmail.com", price = 20
    )