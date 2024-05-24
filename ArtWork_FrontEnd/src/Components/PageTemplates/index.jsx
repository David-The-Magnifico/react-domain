import style from "./style.module.css";
import FilledButton from "../FilledButtons";
import PlaceHolder from "../PlaceHolders";

const PageTemplates = ({image, headerName, message, buttonMessage, holder1, holder2, holder3, holder4}) =>{
    return (
        <div className={style.container}>
            <img src={image} alt = "page image"/>
            <div className={style.heroText}>
                <h3>{headerName}</h3>
                <p>{message}</p>
                {holder1 && <PlaceHolder text={holder1} />}
                {holder2 && <PlaceHolder text={holder2} />}
                {holder3 && <PlaceHolder text={holder3} />}
                {holder4 && <PlaceHolder text={holder4} />}
                <FilledButton text={buttonMessage}/>
            </div>
        </div>
    )
}
export default PageTemplates;