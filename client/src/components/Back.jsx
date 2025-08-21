
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Back = () => {
    const navigate = useNavigate()
  return (
    <button id="back" onClick={()=>{
        navigate(-1)
    }}><IoMdArrowBack/> Back </button>
  )
}

export default Back