import React from 'react'
import arr from './data'
import Cards from './Cards';
export default function MyAllGames() {
  return (
    <>
    <div className="flex gap-[40px] flex-wrap p-[40px] pt-[90px]">
      {arr.map((detail) => {
        return (
          <Cards
            imageUrl={detail.imageUrl}
            type={detail.type}
            smallDetail={detail.smallDetail}
            name={detail.name}
          />
        );
      })}
      </div>
    </>
  )
}
