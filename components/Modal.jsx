import { AiOutlineCloseSquare } from "react-icons/ai";
import "./index.scss"

export default function Modal({ isOpen, isClose, titulo, description }) {
    if (isOpen){
        return (
            <>
                <div className="modal">
                    <div className="modal__content">
                        <div className="modal__content--btnfechar"><AiOutlineCloseSquare onClick={() => isClose(!isOpen)} size={24}/></div>
                        <h1 className="modal__content--titulo">{titulo}</h1>
                        <p className="modal__content--paragrafo">{description}</p>
                    </div>
                </div>
            </>
        )
    } else {
        return <></>
    }
}