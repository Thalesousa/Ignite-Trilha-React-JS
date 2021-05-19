import { ProductItem } from "./ProductItem"

type Product ={
  id: number;
  price: number;
  title: string;
}

type SearchResultsProps = {
  results: Product[];
}

export function SearchResults({ results }: SearchResultsProps) {
  return(
    <div>
      {results.map(product => {
        return(
          <ProductItem product={product} key={product.id} />
        )
      })}
    </div>
  )
}