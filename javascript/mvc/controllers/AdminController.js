const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    });
};

exports.postAddProduct = (req, res, next) => {
    const { title, price, description, imageUrl } = req.body;
    const product = new Product({ title, price, description, imageUrl, userId: req.user._id });
    product
        .save()
        .then(result => {
            console.log('Created Product');
            res.redirect('/admin/products');
        })
        .catch(console.error);
};

exports.getEditProduct = (req, res, next) => {
    if (!req.query.edit) {
        return res.redirect('/');
    }

    const prodId = req.params.productId;
    Product.findById(prodId)
        .then(product => {
            if (!product) {
                return res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTitle: 'Edit Product',
                path: '/admin/edit-product',
                editing: req.query.edit,
                product: product
            });
        })
        .catch(console.error);
};

exports.postEditProduct = (req, res, next) => {
    Product.findById(req.body.productId)
        .then(product => {
            product.title = req.body.title;
            product.price = req.body.price;
            product.imageUrl = req.body.imageUrl;
            product.description = req.body.description
            return product.save()
        })
        .then(result => {
            res.redirect('/admin/products');
        })
        .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
    Product.find()
        // .select('title price -_id')
        // .populate('userId', 'name')
        .then(products => {
            console.log(products)
            res.render('admin/products', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products'
            });
        })
        .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
    Product.findByIdAndRemove(req.body.productId)
        .then(() => {
            res.redirect('/admin/products');
        })
        .catch(err => console.log(err));
};
