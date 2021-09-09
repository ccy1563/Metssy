json.set! @product.id do 
    json.extract! @product, :id, :name, :price, :description
end