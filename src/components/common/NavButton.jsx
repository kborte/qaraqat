import {useNavigate} from 'react-router-dom'
import arrow from "../../res/arrow.svg"
import FeatherIcons from "feather-icons-react"

const NavButton = ({item}) =>{
    const title = item.label
    const level = item.level
    const buttonicon = item.icon
    const link = item.href

    console.log(link);

    const navigate = useNavigate();

    return(
        <div className="space-between navbutton" onClick={() => navigate(link)}>
            <div className='align-center'>
                <FeatherIcons icon={buttonicon} size='40'/>
                <div className='margin-left'>
                    <h3>{title}</h3>
                    <h5>Level {level} out of 25</h5>
                </div>
            </div>
            
            <img src={arrow} alt="arrow"></img>
        </div>
    )
}

export default NavButton;