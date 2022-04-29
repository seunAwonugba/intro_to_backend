const EventEmitter = require("events")

//pass a initialy variable to the, call it supply

//u use constructor when you want to create a new object of a class
class TicketManager extends EventEmitter{
    constructor(supply){
        super()
        this.supply = supply
    }
    //super calls the constructor of the parent function which is in EventEmitter
    //super is used to get access to properties of a parent class


    //when a ticket is purchased call buy function, and then emit a message

    //if an event emitter cannot perform its function, you can make the method handle the error
    //but the error event must have its name set to "error" and accompanied by an error message

    buy(email, price){
        if(this.supply > 0){
            this.supply--
            this.emit("buy", email, price, Date.now())
            return
        }else{
            this.emit("error", new Error("There is no more tickets available for purchase"))
        }
    }
}

module.exports = TicketManager