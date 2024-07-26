import { getRetreats } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import WellnessCard, { RetreatCard } from "./WellnessCard";
import { setSearched } from "@/redux/stateSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";



const CardsFilter = () => {
  const page = useAppSelector((state) => state.filter.page);
  const location = useAppSelector((state) => state.filter.location);
  const tag = useAppSelector((state) => state.filter.tag);
  const search = useAppSelector((state) => state.filter.search);
  const type = useAppSelector((state) => state.filter.type);
  const searched = useAppSelector((state) => state.filter.searched);
  const dispatch = useAppDispatch();



  const { isPending, isError, data: data1, error } = useQuery({ 
    queryKey: ['retreat', {page, location, tag, type}], 
    queryFn: async () => { 
      const res = await getRetreats({page, limit: 6, search, location, tag, type });
      dispatch(setSearched(false));
      return res;
    },
    enabled: !searched
  })
  const { isPending: isPending2, isError: isError2, data: data2, error: error2 } = useQuery({ 
    queryKey: ['retreat2', { searched }], 
    queryFn: async () => { 
      const res = await getRetreats({page, limit: 6, search, location, tag, type });
      dispatch(setSearched(false));
      return res;
    },
    enabled: searched
  })

  const data = data2 || data1;



  if (isPending && isPending2) {
    return <span>Loading...</span>
  }

  if (isError || isError2) {
    return <span>Error: {(error || error2)?.message}</span>
  }


  return (<div className='flex justify-center flex-wrap gap-10 w-full items-center py-2 lg:px-1 my-10'>
    {data.map((card: RetreatCard) => <WellnessCard key={card.id} card={card} />)}
  </div>)
}

export default CardsFilter;