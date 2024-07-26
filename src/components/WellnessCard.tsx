import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// const getRetreatById = async (id: string) => {
//   const response = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/${id}`);
//   console.log(id, 'getting ')

//   if (!response.ok) {
//     throw new Error('Network response was not ok')
//   }
//   return response.json();
// }

// const tag = ["relaxation","meditation","weekend"];

export interface RetreatCard {
  title: string;
  description: string;
  date: Date;
  image: string;
  condition: string;
  type: string;
  price: number;
  location: string;
  duration: number;
  id: string;
  tag: string[]
}

const WellnessCard = ({ card } : { card: RetreatCard }) => {

  return (
    <Card className="drop-shadow-md border w-[30%] rounded-lg overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-[300px]">
          <img src={card.image} alt="card" className="object-cover	w-full h-full" />
        </div>
        <CardTitle className="px-[5%]">
          {card.title}
        </CardTitle>
        <CardDescription className="px-[5%] py-2 h-10">
          {card.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-[5%]">
        <p>Location: {card.location}</p>
        <p>Date: {new Date(card.date).toDateString()}</p>
        <p>Price: {card.price}</p>
        <div className="px-6 pt-4 pb-2">
          {card.tag.map(t => (
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 shadow-md">#{t}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default WellnessCard;