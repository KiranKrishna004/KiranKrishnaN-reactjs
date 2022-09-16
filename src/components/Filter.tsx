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
        <button
          onClick={() => setFilter("")}
          className={
            filter !== ""
              ? "bg-transparent text-blue-700 font-semibold py-1 px-2 border border-blue-500 rounded mx-2"
              : "bg-blue-500 text-white font-semibold py-1 px-2 border border-white rounded mx-2"
          }
        >
          All
        </button>
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
      </div>
    </div>
  );
};
