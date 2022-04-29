const TicketManager  = require("../ticketManager")
const EmailService = require("./emailService")
const DBService = require("./dbService")

const ticketManager = new TicketManager(2)
const emailService = new EmailService()
const dbService = new DBService()

//subscribe on data emitted in ticket manager

ticketManager.on("error", (err) => {
    // console.error(`An error occured ${err}`);
    console.log(`An error occured ${err}`);
})

ticketManager.on("buy", (email, price, created) => {
    emailService.send(email)
    dbService.save(email,price, created )

})

ticketManager.buy("seunawonugba@gmail.com", 5000)

ticketManager.buy("seunawonugba@gmail.com", 5000)

ticketManager.buy("seunawonugba@gmail.com", 5000)
