import style from "./style.module.css";

const PlaceHolders = ({text}) =>{
    return(
        <div>
            <input className={style.holder} placeholder={text}/>
        </div>
    )
}
export default PlaceHolders;