import style from "./circle.module.css";
export default function Circle ({setCount}) {
    function reset () {
        setCount(0)
    }
    return <div className={style.circle} onClick = {reset}></div>
}