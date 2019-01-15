const fs = require('fs');
const dataFile = 'storage.json';


let data = {};

// The purpose of the module is to store key-value pairs where the key is always a string. 
function validateKey(key) {
    if (typeof key !== 'string') {
        throw new Error('Key must be a string');
    }
}

function validateKeyExists(key) {
    return data.hasOwnProperty(key);
}

const put = (key, value) => {
    validateKey(key);
    if (validateKeyExists(key)) {
        throw new Error('Key already exists');
    }
    data[key] = value;
}

const get = (key) => {
    validateKey(key);
    if (!validateKey(key)) {
        throw new Error('Key not found');
    }

    return data[key];
}

const getAll = () => {

}

const update = (key, value) => {
    validateKey(key);
    if (!validateKeyExists(key)) {
        throw new Error('Key not found');
    }
    // Otherwise you should update the key-value pair in memory
    data[key] = value
}

const deleteItem = (key) => {
    validateKey(key);
    if (!validateKeyExists(key)) {
        throw new Error('Key not found');
    }
    // Otherwise you should delete the key-value pair from the memory storage

    delete data[key];
}

const clear = () => {
    // The "clear" function should delete all saved key-value pairs in the storage.
    data = {};
}

const save = () => {
    return new Promise((resolve, reject) => {
        let dataAsString = JSON.stringify(data);

        fs.writeFile(dataFile, dataAsString, err => {
            if(err){
                reject(err);
                return;
            }
            resolve();
        })
    })
}


const load = () => {
    return new Promise((resolve, reject) => {
        fs.readFileSync
    }
}