json.extract! @cart_item, :id, :user_id, :product_id, :quantity
@cart_item.product do
    json.id @cart_item.product.id
    json.name @cart_item.product.name
    json.price @cart_item.product.price
    json.description @cart_item.product.description
    json.photoUrl url_for(cart_item.product.photo) if cart_item.product.photo.attached? 
end