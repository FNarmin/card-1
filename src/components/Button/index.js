import style from "./button.module.css";
export default function Button ({children, setCount, count}) {
    function deyish() {
        if(children==="-") {
            setCount(count-1)
        } else if (children === "+") {setCount(count+1)}
    }
    return <button className={style.button} onClick= {deyish}>{children}</button>
}