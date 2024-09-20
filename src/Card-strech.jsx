import React, {useEffect, useRef} from "react";
import Card from "./Card";
import profileData from "./profileData";

// let Numbers = [1, 2, 3, 4]
// const timesTwo = Numbers.map(num => {
//     return num * 2
// })
// console.log(timesTwo)

// let britishKnights = ["Benedict", "Colin", "Bassett", "Sir Wimbledon"]
// const properKnights = britishKnights.map(name => {
//     return "Sir "+ name;
// })
// console.log(properKnights)

export default function CardStrech(){
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current
        const scrollSpeed = 1
        let animationFrameId

        const scroll = () => {
            container.scrollLeft += scrollSpeed
            if (container.scrollLeft >= container.scrollWidth / 2){
                container.scrollLeft = 0
            }
            animationFrameId = requestAnimationFrame(scroll)
        }

        animationFrameId = requestAnimationFrame(scroll)

        return () => cancelAnimationFrame(animationFrameId)
    }, [])

    return(
        <div className="Card-container" ref={containerRef}>
            { //To write javascript in html
                [...profileData, ...profileData].map((data, index) => (
                <Card
                    key = {index}
                    image = {data.image}
                    id = {data.id}
                    name = {data.name}
                    job = {data.job}
                    role = {data.role}
                />  
                ))
            }
        </div>
    )
}