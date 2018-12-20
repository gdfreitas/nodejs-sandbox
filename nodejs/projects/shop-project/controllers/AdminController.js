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
    const product = new Product({ title, price, description, imageUrl, userId: req.user });
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
                product: product
            });
        })
        .catch(console.error);
};

exports.postEditProduct = (req, res, next) => {
    Product.findById(req.body.productId)
        .then(product => {
            if (product.userId.toString() !== req.user._id.toString()) {
                return res.redirect('/');
            }

            product.title = req.body.title;
            product.price = req.body.price;
            product.imageUrl = req.body.imageUrl;
            product.description = req.body.description
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
