import "./Pagination.scss";

export const Pagination = () => {
  const itemsLength = 10;
  const items = Array(itemsLength)
    .fill(0)
    .map((_, index) => index + 1);

  console.log({ items });

  return (
    <div className="pagination">
      {items.map((val) => (
        <button className="pagination__button" key={val}>
          {val}
        </button>
      ))}
    </div>
  );
};
