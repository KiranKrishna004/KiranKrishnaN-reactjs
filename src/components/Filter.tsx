import { Categories } from "../interfaces/interfaces";
import { useAppSelector } from "../hooks/hooks";
export const Filter = ({
  filter,
  setFilter,
}: {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string | undefined;
}) => {
  const categories = useAppSelector(({ categories }) => categories.categories);
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='font-semibold pb-2'>Filter by Categories</div>
      <div className=' flex flex-row pb-7'>
        {categories.map((categories: Categories, index: number) => (
          <button
            key={index}
            onClick={() => setFilter(categories.name)}
            className={
              filter !== categories.name
                ? "bg-transparent text-blue-700 font-semibold py-1 px-2 border border-blue-500 rounded mx-2"
                : "bg-blue-500 text-white font-semibold py-1 px-2 border border-white rounded mx-2"
            }
          >
            {categories.name}
          </button>
        ))}
        <button
          onClick={() => setFilter("")}
          className='bg-red-400 text-white border border-white rounded mx-2 h-1/2 py-1 px-1 self-end text-xs'
        >
          Reset
        </button>
      </div>
    </div>
  );
};
