import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { updateUser } from "../../API/UserRequest";

const EditPage = ({setEdit}) => {
    const avaUrl = [
        "https://avatars.githubusercontent.com/u/10099999?v=4",
        "https://avatars.githubusercontent.com/u/10100000?v=4",
        "https://avatars.githubusercontent.com/u/10100001?v=4",
        "https://avatars.githubusercontent.com/u/10100002?v=4",
        "https://avatars.githubusercontent.com/u/10100004?v=4",
        "https://avatars.githubusercontent.com/u/10100005?v=4",
        "https://cdn.tuoitre.vn/thumb_w/640/471584752817336320/2023/2/10/2736796065095908771941249179080146527866732n-16760123424561767223067.jpg"
    ]
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [theme, setTheme] = useState(user.theme);
    const [url, setUrl] = useState(user.avaUrl);

    const HandleEdit = (e) => {
        e.preventDefault();
        setEdit(false);
        const newUser = {
            name : name,
            age : age,
            about : about,
            avaUrl : url,
            theme : theme
        };
        updateUser(newUser, dispatch);
    }

    return (
        <>
        <form>
            <section className="edit-container">
                <button className="close" onClick={HandleEdit}>
                    SAVE
                </button>
                <div className="edit-profile">
                    Edit Profile
                </div>
                <div className="input-container">
                    <label>
                        Display Name
                    </label>
                    <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
                    <label>
                        Age
                    </label>
                    <input type="text" placeholder="Enter your age" onChange={(e) => setAge(e.target.value)}/>
                    <label>
                        About
                    </label>
                    <textarea className="input-about" onChange={(e) => setAbout(e.target.value)}/>
                    <label>Profile Picture</label>
                    <div className="input-image-container" >
                    {avaUrl?.map((url, index) => (
                        <img
                            key={index}
                            onClick={(e) => setUrl(e.target.src)}
                            src={url}
                            alt="avatar"
                            className="input-image"
                        />
                        ))}

                    </div>
                    <div className="theme-container">
                        <label>Theme</label>
                        <input type="color" className="theme-color" onChange={(e) => setTheme(e.target.value)}/>
                    </div>
                </div>
            </section>
        </form>
        </>
      );
}
 
export default EditPage;