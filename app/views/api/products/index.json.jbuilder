@products.each do |product|
      json.set! product.id do 
            json.extract! product, :id, :name, :price, :description, :category
            json.photoUrl url_for(product.photo) if product.photo.attached? 
      end
end