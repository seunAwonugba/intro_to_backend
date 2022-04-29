class DBService{
    save(email,price,timeStamp){
        console.log(
            `Running query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timeStamp})`
            );
    }
}

module.exports = DBService