
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch } from "@/redux/store";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const SelectFilter = ({ type, value, selectData, setSelectData } : { type: string, value: string, selectData: string[], setSelectData: ActionCreatorWithPayload<string, string>}) => {
  const dispatch = useAppDispatch();

  return (
    <Select value={value} onValueChange={value => dispatch(setSelectData(value))}>
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