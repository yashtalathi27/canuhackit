import React, { useEffect, useState } from "react";
import Headline from "./Headline";
import Cards from "./Cards";
import image from "../images/cardImage.jpeg";
export default function Trending() {
    const [trends, Settrends] = useState([]);
    useEffect(() => {
        fetch("http://localhost:6005/games")
            .then((res) => res.json())
            .then((data) => {
                Settrends(data);
            });
    }, []);
    return (
        <>
            <Headline />
            <div className="flex item-center justify-start p-[30px]">
                {trends
                    .filter((detail) => Number(detail.id) <= 5)
                    .map((mydetail) => {
                        return (
                            <>
                                <span className="text-white writing-mode-vertical text-orientation-upright pl-[30px] tracking-[2px]">
                  TRENDING #
                  <span className="text-yellow-400 writing-mode-vertical text-orientation-upright pl-[30px]">
                    {`0${mydetail.id}`}
                  </span>
                </span>
                                <Cards
                                    imageUrl={mydetail.image}
                                    type={mydetail.type}
                                    smallDetail={mydetail.description}
                                    name={mydetail.name}
                                    className="m-[5px] mb-5"
                                />
                            </>
                        );
                    })}
            </div>
        </>
    );
}