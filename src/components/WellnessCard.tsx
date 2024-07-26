import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
    <Card className="drop-shadow-md border w-[80%] xl:w-[30%] rounded-lg overflow-hidden">
      <CardHeader className="p-0">
        <div className="h-[300px] overflow-hidden">
          <img src={card.image} alt="card" className="object-cover transition-all duration-500 hover:scale-125 cursor-pointer w-full h-full" />
        </div>
        <CardTitle className="px-[5%] xl:h-20 py-2 xl:py-5">
          {card.title}
        </CardTitle>
        <CardDescription className="px-[5%] py-2 h-10">
          {card.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-2 px-[5%] xl:py-[2%]">
        <p>Location: {card.location}</p>
        <p>Date: {new Date(card.date).toDateString()}</p>
        <p className="font-semibold">Price: ${card.price}</p>
        <div className="pt-4 pb-2 xl:h-24">
          {card.tag.map(t => (
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 shadow-md">#{t}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default WellnessCard;