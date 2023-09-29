import Image from "next/image";
import {useState} from "react";

const Product = ({product}) => {
  const [productData, setProductData] = useState(product);

  const toggleCount = (type = 'add') => {
    setProductData((prevValue) => ({
      ...prevValue, count: type === 'add' ? prevValue.count + 1 : prevValue.count - 1 || 1
    }))
  }

  return (<div
      className={`max-w-225 bg-white shadow-grey rounded-md px-3 ${productData.isFeatured ? 'border border-1 ' + 'border-green' : ''}`}>
      <div className="relative">
        <div>
          <Image src={productData.imgPath} alt="NO IMAGE" width={223} height={190}/>
        </div>
        {productData.isFeatured && (<div className="absolute top-3.5 left-0">
            <Image src={'/assets/images/leaf.png'} alt="NO IMAGE" width={40} height={40}/>
          </div>)}
      </div>

      <div className="flex justify-between leading-4 border-t border-grey pt-2 mb-2">
        <p className="text-dark-green font-bold uppercase text-xs mr-1">Black Leather Stool Chair with wheel</p>
        <div className="text-green text-xxs bg-light-green px-0.5 py-1 rounded-md h-fit">Furniture</div>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex justify-start">
          <span
            className="flex items-center justify-center w-5 h-5 bg-light-grey text-dark-green rounded-md p-1 cursor-pointer"
            onClick={() => {
              toggleCount('add')
            }}
          >
            +
          </span>
          <span className="text-dark-green text-xs font-bold mx-2.5">{productData.count}</span>
          <span
            className="flex items-center justify-center bg-light-grey text-dark-green rounded-md p-1 w-5 h-5 cursor-pointer"
            onClick={() => {
              toggleCount('subtract')
            }}
          >
            -
          </span>
        </div>
        <div>
          <div className="bg-light-green flex items-center p-1 rounded-md">
            <div className="w-4 h-4 bg-orange rounded-full mr-2"></div>
            <Image src={'/assets/images/arrow_top.png'} alt="NO IMAGE" width={16} height={16}/>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-green rounded-md my-2 px-2">
        <div className="text-white text-base uppercase font-bold">
          SAR {productData.price}
        </div>
        <div className="mx-1">
          <Image src={'/assets/images/copy_icon.png'} alt="NO IMAGE" width={24} height={24}/>
        </div>
      </div>
    </div>)
}

export default Product;