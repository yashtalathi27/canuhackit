import React from 'react'
import arr from './data'
import Cards from './Cards';
export default function MyAllGames() {
  return (
    <>
    <div className="flex justify-between gap-3 flex-wrap p-[40px] pt-[90px] m-18 ">
      {arr.map((detail) => {
        return (
          <Cards
            imageUrl={detail.imageUrl}
            type={detail.type}
            smallDetail={detail.smallDetail}
            name={detail.name}
            className="m-[5px] mb-5"
          />
        );
      })}
      </div>
    </>
  )
}
