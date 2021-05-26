import { ProductItem } from "./ProductItem"
import { useMemo } from "react";

type Product ={
  id: number;
  price: number;
  title: string;
}

type SearchResultsProps = {
  results: Product[];
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0)
  }, [])
  return(
    <div>
      <h2>{totalPrice}</h2>
      {results.map(product => {
        return(
          <ProductItem product={product} key={product.id} />
        )
      })}
    </div>
  )
}