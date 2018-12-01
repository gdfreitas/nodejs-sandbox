const fs = require('fs')
const path = require('path')

const rootDir = require('../util/path-utils')

const productsFilePath = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (callback) => {
    fs.readFile(productsFilePath, (err, content) => {
        if (err) {
            callback([]);
        } else {
            callback(JSON.parse(content))
        }
    })
}

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(productsFilePath, JSON.stringify(products), (err) => {
                if (err) console.err(err)
            })
        })
    }

    static fetchAll(callback) {
        getProductsFromFile(callback)
    }
}