import React from "react";
import WidgetEntry from "./WidgetEntry";
import { FiChevronRight } from "react-icons/fi";

export default function WidgetCard({ title, data }) {
  return (
    <div className="relative w-1/4 h-[74%] bg-gradient-to-r from-[#283A58] to-transparent p-4 rounded-2xl transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer">
      <p className="text-lg font-bold text-[#c4d0e3]">{title}</p>

      {data?.map((item, index) => (
        <WidgetEntry
          key={index}
          title={item?.name}
          subtitle={
            item?.followers?.total
              ? `${item.followers.total} Followers`
              : item?.tracks?.total
              ? `${item.tracks.total} Songs`
              : item?.artists?.[0]?.name
          }
          image={
            item?.images?.[2]?.url || item?.images?.[0]?.url || "/placeholder.jpg"
          }
        />
      ))}

      <div className="absolute bottom-0 right-0 w-[84%] h-[34%] bg-gradient-to-b from-transparent to-[#364562] opacity-0 transition-opacity duration-500 flex items-end justify-end p-3 rounded-2xl group-hover:opacity-100">
        <FiChevronRight size={24} color="#c4d0e3" />
      </div>
    </div>
  );
}
