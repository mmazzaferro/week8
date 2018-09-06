const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const create = require('./create');
const add = require('./add');
const remove = require('./remove');
const update = require('./update');
const read = require('./read');

//Connection URL
const url = 'mongodb://localhost:27017';

//Database Name
const dbName = 'week8';

//Use connect method to connect to the server
MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();
});