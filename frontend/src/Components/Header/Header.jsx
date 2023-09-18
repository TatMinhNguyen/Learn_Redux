import { useSelector } from "react-redux";

const Header = ({setEdit}) => {
    const HandleEdit = () => {
        setEdit(true);
    }
    const user = useSelector((state => state.user));

    return (  
        <>
        <header 
            style={{
                backgroundColor:'#ff9051',
                backgroundImage: 
                    "linear-gradient(180deg, #ff9051 2%, #ff9051, 65%, #181818 100%)"
            }}>
            <div className="info-container">
                <div className="info-edit" onClick={HandleEdit}>
                    Edit
                </div>
                <img src={user.avaUrl} 
                    alt="" className="info-ava" 
                />
                <div className="info-username"> {user.name} </div>
                <div className="info-age"> {user.age} years old </div>
                <div className="info-about"> {user.about} </div>
            </div>
        </header>
        </>
    );
}
 
export default Header;