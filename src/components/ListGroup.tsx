function ListGroup() {
  let items = ["Rice", "Water", "salad", "curry"];
  items = [];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item Found</p> : null}
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
