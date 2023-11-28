import { useState } from "react";
import Button from "../Button";
import Circle from "../Circle";
import Title from "../Title";
import style from "./card.module.css";
export default function Card () {
    const [count, setCount] = useState(0);
return <div className={style.card}>
    <Circle setCount = {setCount}></Circle>
    <Title>Title</Title>
    <div className={style.count_div}>
        <Button setCount = {setCount} count = {count}>-</Button>
        <p>{count}</p>
        <Button setCount = {setCount} count = {count}>+</Button>
    </div>
</div>
}