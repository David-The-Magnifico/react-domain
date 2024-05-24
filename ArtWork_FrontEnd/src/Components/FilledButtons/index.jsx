import style from "../../../src/Components/FilledButtons/style.css";


const FilledButtons = ({text}) => {
    return (
        <div>
            <button className={style.btn}> {text}</button>
        </div>
    )
}

export default FilledButtons;