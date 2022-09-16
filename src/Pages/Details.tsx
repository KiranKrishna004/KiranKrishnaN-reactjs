import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { Products } from "../interfaces/interfaces";
export const Details = () => {
  const { id } = useParams();
  const products = useAppSelector(({ products }) => products.products);
  const selectedProduct: Products[] | undefined = products.filter(
    (product) => product._id === id
  );
  console.log(selectedProduct);
  if (selectedProduct.length === 0) {
    return <></>;
  }
  return (
    <div className='h-screen sm:max-w-xl flex items-center justify-center xs:max-w-md md:max-w-3xl lg:max-w-7xl max-w-2xl mx-auto'>
      <div className='h-5/6 flex items-center'>
        <div className='grid grid-cols-2 gap-12'>
          <img
            src={selectedProduct[0]!.avatar}
            className='w-full h-96 object-cover'
          />
          <div className='flex flex-col'>
            <div className='text-3xl font-extrabold'>
              {selectedProduct[0]!.name}
            </div>
            <div className='text-sm font-light py-1'>
              {selectedProduct[0]!.category}
            </div>
            <div className='text-red-400 font-bold py-4'>
              ${selectedProduct[0]!.price}
            </div>
            <div className='text-lg font-bold '>Description</div>
            <div className='text-sm max-w-sm'>
              {selectedProduct[0]!.description}
            </div>
            <div className='text-xs font-light flex place-self-end self-center'>
              {selectedProduct[0]!.developerEmail}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
