import Product from "./Product";
const List = ({data}) => {

  return (<div className="flex justify-center w-50">
      <div className="m-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((product) => (<Product product={product} key={product.id}/>))}
      </div>
    </div>)
}

export default List;