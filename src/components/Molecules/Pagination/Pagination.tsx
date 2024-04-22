import "./Pagination.scss";

type PaginationProps = {
  className?: string;
};

export const Pagination = ({ className }: PaginationProps) => {
  const itemsLength = 10;
  const items = Array(itemsLength)
    .fill(0)
    .map((_, index) => index + 1);

  console.log({ items });

  return (
    <div className={`pagination ${className}`}>
      {items.map((val) => (
        <button className="pagination__button" key={val}>
          {val}
        </button>
      ))}
    </div>
  );
};
