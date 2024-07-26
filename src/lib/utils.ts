import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getRetreats = async ({
    page, limit, search, location, tag, type
  } 
  : {
    page: number, limit: number, search: string, location: string, tag: string, type: string
  }) => {
  let searchParameters = ``;

  if (search) {
    searchParameters += `&search=${search}`;
  }
  if (location) {
    searchParameters += `&location=${location}`;
  }
  if (type) {
    searchParameters += `&type=${type}`;
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