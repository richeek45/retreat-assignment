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
    dispatch(setSearched(false));
  }

  return (
    <div>
      <nav className='bg-cyan-950	p-2 px-10 text-white rounded'>Wellness Retreat</nav> 
      <Card className="drop-shadow-md border rounded-lg overflow-hidden m-5 hidden xl:block">
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

      <div className='flex flex-col xl:flex-row justify-between gap-10 py-10 px-10 xl:px-5'>
        <div className='flex flex-col xl:flex-row gap-10 flex-grow'>
          <SelectFilter type='type' selectData={types} value={type}  setSelectData={setType}/>
          <SelectFilter type='tags' selectData={tags} value={tag}  setSelectData={setTag}/>
          <SelectFilter type='location' selectData={locations} value={location} setSelectData={setLocation}/>
          <Button onClick={handleClearFilters}>Clear Button</Button>
        </div>
        <div className="flex gap-5 h-full basis-1/3">
          <Input className='w-full xl:w-full' type="text" placeholder="Search retreats by title..." value={search} onChange={(e) => dispatch(setSearch(e.target.value))} />
          <Button onClick={() => dispatch(setSearched(true))}>
            <Search />
          </Button>
        </div>
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
