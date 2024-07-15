"use client";

import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSearchParams } from "next/navigation";
import { useRouter , usePathname} from "next/navigation";
import Router from "next/router";

const SearchResultCard = ({
  item,
  latitude_key,
  longitude_key,
  setActiveField,
  area_key,
}) => {
    const pickup_lattitude=19.0785451
    const pickup_longitude=72.878176
    const pickup_area="Kolakata, Dakshineswar, DumDum, Shyambazar, Bihar, Mumbai"
    const destination_latitude=42.2781401
    const destination_longitude=-74.9159946
    const destination_area="Delhi, Kolkata, Jharkhand, Kochi, Jaipur, Hydrabad"
    
    const searchParams=useSearchParams();
    const router=useRouter();
    const pathname=usePathname();

    const handleSelect=()=>{
        const params=new URLSearchParams(searchParams)
        params.set([latitude_key, pickup_lattitude])
        params.set([longitude_key], pickup_longitude)
        params.set([area_key], pickup_area)

        router.replace(pathname+"?"+params.toString());
        console.log("pathname -", pathname, "searchParams -",searchParams)
    }
  return (
    <div
      onClick={handleSelect}
      className="flex items-center py-2 z-10 bg-white cursor-pointer"
    >
      <div className="pr-5">
        <LocationOnIcon />
      </div>
      <div>
        <p className="font-semibold">Kolkata</p>
        <p className="front-semibold opacity-60">Kolkata is here</p>
      </div>
    </div>
  );
};

export default SearchResultCard;
