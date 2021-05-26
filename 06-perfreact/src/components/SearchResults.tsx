import { ProductItem } from "./ProductItem"
import { useMemo } from "react";

type Product ={
  id: number;
  price: number;
  title: string;
}

type SearchResultsProps = {
  results: Product[];
  onAddToWishList: (id: number) => void;
}

export function SearchResults({ results, onAddToWishList }: SearchResultsProps ) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0)
  }, [results])
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