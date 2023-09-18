import axios from 'axios';
import { updateFailed, updateStart, updateSuccess } from '../Redux/UserSlide';

const baseURL = 'http://localhost:8080'

export const updateUser = async(user, dispatch) => {
    dispatch(updateStart());
    try{
        const res = await axios.post(`${baseURL}/api/update`, user);
        dispatch(updateSuccess(res.data));
    }
    catch (err){
        console.log(err);
        dispatch(updateFailed());
    }
}