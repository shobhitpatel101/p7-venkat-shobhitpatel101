// Create a order management api's with 3 schema - Customer, Product and Order. 
 
// CRUD to Manage Customer, Product and Order
// Customer can Place Order for multiple Products with different quantity per Product 
// An API for Reporting where Admin can see their day to day orders filtered by list of customers or by list of products

const express =require('express');
const mysql = require('mysql');
const app = express();

const pool = mysql.createPool({
    connectionLimit: 1,
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'mydb'
});

//Read customer
app.get('/api/customers/Getdetails', function(res, req) {
    pool.query('select * from customer', (err, result)=>{
        if(err) throw err;
        res.send(result);
    });
});

//Read Order
app.get('/api/orders/Getdetails', function(res, req) {
    pool.query('select * from order', (err, result)=>{
        if(err) throw err;
        res.send(result);
    });
});

//Read product
app.get('/api/products/Getdetails', function(res, req) {
    pool.query('select * from products', (err, result)=>{
        if(err) throw err;
        res.send(result);
    });
});

//----------- Create operation
//Create customer
app.post('/api/customers/create', (res, req) => {
    const {CName, CAge, CContact} = res.body;
    pool.query(`insert into customer values('${CName}', '${CAge}','${CContact}')`, (err, result) => {
        if(err) throw err;
        res.send(result);
    })
})

//Create product
app.post('/api/product/create', (res, req) => {
    const {PName, PDetails} = res.body;
    pool.query(`insert into product values('${PName}', '${PDetails}')`, (err, result) => {
        if(err) throw err;
        res.send(result);
    })
})

//Create order
app.post('/api/order/create', (res, req) => {
    const {Cid, Pid, OTimestamp, Odetails} = res.body;
    pool.query(`insert into order values('${Cid}', '${Pid}','${OTimestamp}','${Odetails}')`, (err, result) => {
        if(err) throw err;
        res.send(result);
    })
})

//-------- update operation
//update customer
app.put('/api/customers/update', (req, res) => {
    const {CName, CAge, CContact, Cid} = res.body;
    pool.query('UPDATE customers SET CName = ?, CAge = ?, CContact= ? WHERE Cid = ?', [CName, CAge, CContact,Cid], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });

//update product 
app.put('/api/products/update', (req, res) => {
    const {PName, PDetails, Pid} = res.body;
    pool.query('UPDATE customers SET PName = ?, PDetails = ? WHERE Pid = ?', [PName, PDetails, Pid], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });

//update order 
app.put('/api/orders/update', (req, res) => {
    const {Cid, Pid, OTimestamp,Odetails , Oid} = res.body;
    pool.query('UPDATE customers SET Cid = ?, Pid = ?, OTimestamp = ?, Odetails = ? WHERE Oid = ?', [Cid,Pid,OTimestamp,Odetails,Oid], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });

//delete api
// DELETE dynamic query api
app.delete('/api/deleteRecord/', (req, res) => {
    const {Id, tableName} = res.body;
    pool.query('DELETE FROM ? WHERE id = ?', [tableName, Id], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
  });


//---- Customer can Place Order for multiple Products with different quantity per Product 

app.post('/api/placeOrder/create', (res, req) => {
    const {Cid, Pid, OTimestamp, Odetails} = res.body;
    //for multiple products
    for(el in pid){
        pool.query(`insert into order values('${Cid}', '${el}','${OTimestamp}','${Odetails}')`, (err, result) => {
            if(err) throw err;
            res.send(result);
        })
    }
})

// An API for Reporting where Admin can see their day to day orders filtered by list of customers or by list of products
//Read customer
app.get('/api/orders/reports', function(res, req) {
    const {groupBy} = res.body; //can be Cid, Pid
    pool.query('select * from orders group by ?', [groupBy] , (err, result)=>{
        if(err) throw err;
        res.send(result);
    });
});

