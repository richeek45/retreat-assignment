import { Button } from "@/components/ui/button"
import SelectFilter from './components/SelectFilter';
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CardsFilter from './components/CardsFilter';
import { setLocation, setPage, setSearch, setSearched, setTag, setType } from './redux/stateSlice';
import { useAppDispatch, useAppSelector } from './redux/store';

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
  const page = useAppSelector((state) => state.filter.page);
  const location = useAppSelector((state) => state.filter.location);
  const tag = useAppSelector((state) => state.filter.tag);
  const search = useAppSelector((state) => state.filter.search);
  const type = useAppSelector((state) => state.filter.type);

  const dispatch = useAppDispatch();

  const handleClearFilters = () => {
    dispatch(setType(''));
    dispatch(setTag(''));
    dispatch(setSearch(''));
    dispatch(setLocation(''));
  }

  return (
    <div className="card">
      <nav className='bg-cyan-950	p-2 px-10 text-white rounded'>Wellness Retreat</nav> 
      <Card className="drop-shadow-md border rounded-lg overflow-hidden m-5">
        <CardHeader className="p-0">
          <div className='w-full h-80 p-5'>
            <img className='object-cover h-full w-full' src="wellness.jpg" alt="" />
          </div>
          <CardTitle className="px-[5%]">
            Discover your inner peace
          </CardTitle>
          <CardDescription className="px-[5%] py-2 h-10">
            Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className='flex justify-between gap-10 py-10 px-5'>
        <div className='flex gap-10 flex-grow'>
          <SelectFilter type='type' selectData={types} value={type}  setSelectData={setType}/>
          <SelectFilter type='tags' selectData={tags} value={tag}  setSelectData={setTag}/>
          <SelectFilter type='location' selectData={locations} value={location} setSelectData={setLocation}/>
          <Button onClick={handleClearFilters}>Clear Button</Button>
        </div>
        <Input className='w-[40%]' type="text" placeholder="Search ..." value={search} onChange={(e) => dispatch(setSearch(e.target.value))} />
        <Button onClick={() => dispatch(setSearched(true))}>
          <Search />
        </Button>
      </div>
      <CardsFilter />
      <div className='flex gap-2 justify-center py-10'>
        <Button disabled={page === 1} onClick={() => dispatch(setPage(page - 1))}>Previous</Button>
        <Button disabled={page === 4} onClick={() => dispatch(setPage(page + 1))}>Next</Button>
      </div>
      <footer className='flex items-center justify-center mb-10'>&copy; 2024 Wellness Retreats. Made by Richeek. All Rights Reserved.</footer>
    </div>
  )
}

export default App
