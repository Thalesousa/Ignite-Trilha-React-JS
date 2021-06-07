import { ProductItem } from "./ProductItem"
import { List, ListRowRenderer } from 'react-virtualized';

type Product = {
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

export function SearchResults({ totalPrice, results, onAddToWishList }: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    )
  }
  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  )
}