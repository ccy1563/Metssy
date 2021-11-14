# [Yeetsy](https://yeetzylol.herokuapp.com/#/)

## Overview
Yeetsy is Etsy clone, an E-commerce website with a concentration hand-crafted artisan goods.

<img align="center" width="500" height="300" src="https://github.com/ccy1563/Yeetsy/blob/main/yeetzy.gif">

## Technology
* Ruby on Rails
* PostgreSQL
* Rails Active Storage with Amazon's S3
* React.js
* Redux

## Core Features
### Product Listing
* Displays an assortment of products which the user can view and select.
* The products are listed in sections of rows which display the products by category or row style.

![product_listing](product_listing.png)

### Cart Item
* Yeetsy is an E-commerce website, users can buy products.
* Users can add products to the cart, delete products from the cart, and update from the cart.
* Users can checkout to proceed to the checkout page.

![cart_item](cart_item.png)

## Code Snippet
* I wanted to be able to display multiple products displayed in different grouping formats on the homepage.
* Rather than making several different components, I decided to implement this as a single component.
* In order to do this, I had to allow each grouping to be able to dynamically take HTML tags.

```Javascript
    render() {
        const { product, classDiv, classTop, classImage, classPrice} = this.props;
        return (
            <div className={classDiv}>
                <div className={classTop}>
                    <Link to={`/products/${product.id}`}>
                        <img className={classImage} src={product.photoUrl} alt="" />
                    </Link>
                </div>
                <div className={classTop}>
                    <Link to={`/products/${product.id}`}>
                        <button className={classPrice}>
                            ${product.price}
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
```
