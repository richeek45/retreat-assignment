
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectFilter = ({ type, value, selectData, setSelectData } : { type: string, value: string, selectData: string[], setSelectData: (val: string) => void}) => {

  return (
    <Select value={value} onValueChange={value => setSelectData(value)}>
      <SelectTrigger className="">
        <SelectValue placeholder={`Filter by ${type}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup >
          <SelectLabel>{type}</SelectLabel>
          {selectData.map(data => (
            <SelectItem value={data}>{data}</SelectItem>
          ))}          
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectFilter;