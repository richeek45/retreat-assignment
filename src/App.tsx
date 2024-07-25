import { useQuery } from '@tanstack/react-query'
import { Button } from "@/components/ui/button"
import WellnessCard, { RetreatCard } from './components/WellnessCard';
import { useState } from 'react';
import SelectFilter from './components/SelectFilter';

const getRetreats = async ({
    page, limit, search, location, filter, tag
  } 
  : {
    page: number, limit: number, search: string, location: string, filter: string, tag: string
  }) => {
  let searchParameters = ``;

  if (search) {
    searchParameters += `&search=${search}`;
  }
  if (location) {
    searchParameters += `&location=${location}`;
  }
  if (filter) {
    searchParameters += `&filter=${filter}`;
  }
  if (tag) {
    searchParameters += `&filter=${tag}`;
  }
  if (page && limit) {
    searchParameters += `&page=${page}&limit=${limit}`;
  }

  const response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?${searchParameters}`);

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json();
}

const types = ["Signature", "Standalone"];
const locations = ["Pune", "Goa", "Rishikesh", "Kerala", "Mumbai", "Delhi", "Chennai", "Hyderabad", "Varanasi", "Kolkata", "Agra"];
const tags = [
  "relaxation",
  "meditation",
  "weekend",
  "flexibility",
  "yoga",
  "workshop",
  "weight loss",
  "diet",
  "fitness",
  "camp",
  "pain management",
  "mental wellness",
  "pre-natal",
  "post-natal",
  "detox",
  "cleanse",
  "spiritual growth"
]

function App() {
  // https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/
  // https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=Wellness

  const [page, setPage] = useState(1);
  const [type, setType] = useState('');
  const [tag, setTag] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [location, setLocation] = useState('');


  const { isPending, isError, data, error } = useQuery({ 
    queryKey: ['retreat', {page, location, filter, search, tag}], 
    queryFn: async () => await getRetreats({page, limit: 6, search, filter, location, tag }) 
  })
  console.log(data);

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }


  return (
    <div className="card">
      <nav className='bg-cyan-950	p-2 px-10 text-white rounded'>Wellness Retreat</nav> 
      <div className='flex gap-10 py-10 px-5 w-[50%]'>
        <SelectFilter type='type' selectData={types} value={type}  setSelectData={setType}/>
        <SelectFilter type='tags' selectData={tags} value={tag}  setSelectData={setTag}/>
        <SelectFilter type='location' selectData={locations} value={location} setSelectData={setLocation}/>
      </div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className='flex justify-center flex-wrap gap-10 w-full items-center py-2 lg:px-1 my-10'>
        {data.map((card: RetreatCard) => <WellnessCard key={card.id} card={card} />)}
      </div>
      <div className='flex gap-2 justify-center py-10'>
        <Button disabled={page === 1} onClick={() => setPage(prev => prev - 1)}>Previous</Button>
        <Button disabled={!data.length} onClick={() => setPage(prev => prev + 1)}>Next</Button>
      </div>
    </div>
  )
}

export default App
