import { memo, useState } from "react"
import {AddProductToWishlistProps} from './AddProductToWishList'
import dynamic from 'next/dynamic'
import lodash from 'lodash'

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import('./AddProductToWishList').then(mod => mod.AddProductToWishlist)
}, {
  loading: () => <span>Carregando...</span>
})

type ProductItemProps  = {
  product: {
    id: number,
    price: number,
    priceFormatted: string,
    title: string,
  }
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product , onAddToWishList}: ProductItemProps){
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  return(
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

      { isAddingToWishlist && (
        <AddProductToWishlist 
          onAddToWishlist={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.product, nextProps.product)
});