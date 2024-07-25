import { useQuery } from '@tanstack/react-query'
import { Button } from "@/components/ui/button"
import WellnessCard, { RetreatCard } from './components/WellnessCard';
import { useState } from 'react';

const getRetreats = async (page: number, limit: number) => {
  const response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json();
}


function App() {
  // https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/
  // https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=Wellness
  // https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?location=Pune
  // https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=1&limit=5

  const [page, setPage] = useState(1);

  const { isPending, isError, data, error } = useQuery({ 
    queryKey: ['todos'], 
    queryFn: async () => await getRetreats(page, 6) 
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
      <div className='flex justify-center flex-wrap gap-10 w-full items-center py-2 lg:px-1 my-10'>
        {data.map((card: RetreatCard) => <WellnessCard key={card.id} card={card} />)}
      </div>
      <Button>Previous</Button>
      <Button onClick={() => setPage(prev => prev + 1)}>Next</Button>
    </div>
  )
}

export default App
