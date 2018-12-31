const { validationResult } = require('express-validator/check')

const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false,
        hasError: false,
        errorMessage: null,
        validationErrors: []
    });
};

exports.postAddProduct = (req, res, next) => {
    const { title, price, description, imageUrl } = req.body;
    const product = new Product({ title, price, description, imageUrl, userId: req.user });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array())
        return res.status(422).render('admin/edit-product', {
            pageTitle: 'Add Product',
            path: '/admin/edit-product',
            editing: false,
            hasError: true,
            product: { title, imageUrl, price, description },
            errorMessage: errors.array()[0].msg,
            validationErrors: errors.array()
        });
    }

    product
        .save()
        .then(result => {
            res.redirect('/admin/products');
        })
        .catch(console.error);
};

exports.getEditProduct = (req, res, next) => {
    if (!req.query.edit) {
        return res.redirect('/');
    }

    Product.findById(req.params.productId)
        .then(product => {
            if (!product || product.userId.toString() !== req.user._id.toString()) {
                return res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTitle: 'Edit Product',
                path: '/admin/edit-product',
                editing: req.query.edit,
                product: product,
                hasError: false,
                errorMessage: null,
                validationErrors: []
            });
        })
        .catch(console.error);
};

exports.postEditProduct = (req, res, next) => {
    const { productId, title, price, imageUrl, description } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array())
        return res.status(422).render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: true,
            hasError: true,
            product: {
                _id: productId,
                title,
                imageUrl,
                price,
                description
            },
            errorMessage: errors.array()[0].msg,
            validationErrors: errors.array()
        });
    }

    Product.findById(productId)
        .then(product => {
            if (product.userId.toString() !== req.user._id.toString()) {
                return res.redirect('/');
            }

            product.title = title;
            product.price = price;
            product.imageUrl = imageUrl;
            product.description = description
            return product.save().then(result => {
                res.redirect('/admin/products');
            })
        })
        .catch(console.error);
};

exports.getProducts = (req, res, next) => {
    Product.find({ userId: req.user._id })
        // .select('title price -_id')
        // .populate('userId', 'name')
        .then(products => {
            res.render('admin/products', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products'
            });
        })
        .catch(console.error);
};

exports.postDeleteProduct = (req, res, next) => {
    Product.deleteOne({ _id: req.body.productId, userId: req.user._id })
        .then(() => {
            res.redirect('/admin/products');
        })
        .catch(console.error);
};
