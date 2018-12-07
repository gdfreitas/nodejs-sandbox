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
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFile(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(
                    prod => prod.id === this.id
                );
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(productsFilePath, JSON.stringify(updatedProducts), err => {
                    console.log(err);
                });
            } else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(productsFilePath, JSON.stringify(products), err => {
                    console.log(err);
                });
            }
        })
    }

    static deleteById(id) {
        getProductsFromFile(products => {
            const product = products.find(prod => prod.id === id);
            const updatedProducts = products.filter(prod => prod.id !== id);
            fs.writeFile(productsFilePath, JSON.stringify(updatedProducts), err => {
                if (!err) {
                    Cart.deleteProduct(id, product.price);
                }
            });
        });
    }

    static fetchAll(callback) {
        getProductsFromFile(callback)
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
}