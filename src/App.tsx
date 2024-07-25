import { useQuery } from '@tanstack/react-query'
import { Button } from "@/components/ui/button"
import './App.css'

const getRetreats = async () => {
  const response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/`);
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}


function App() {
  // https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/
  // https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search=Wellness
  // https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?location=Pune
  // https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=1&limit=5

  const { isPending, isError, data, error } = useQuery({ 
    queryKey: ['todos'], 
    queryFn: async () => await getRetreats() 
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
      <nav className='bg-cyan-950	'>Wellness Retreat</nav> 
      <Button>Working</Button> 
    </div>
  )
}

export default App
