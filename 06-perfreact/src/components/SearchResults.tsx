import { ProductItem } from "./ProductItem"
import { useMemo } from "react";

type Product ={
  id: number;
  price: number;
  title: string;
  priceFormatted: string;
}

type SearchResultsProps = {
  totalPrice: number;
  results: Product[];
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ totalPrice, results, onAddToWishList }: SearchResultsProps ) {
  return(
    <div>
      <h2>{totalPrice}</h2>
      {results.map(product => {
        return(
          <ProductItem 
            product={product}
            onAddToWishList={onAddToWishList}
            key={product.id} 
          />
        )
      })}
    </div>
  )
}