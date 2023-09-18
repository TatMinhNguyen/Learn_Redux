import { createSlice } from "@reduxjs/toolkit";

const UserSlide = createSlice({
    name: "user",
    initialState:{
        name: "Minh",
        age: "20",
        about: "I'm a student",
        avaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQZhFOBOmv81zwdGiODlPNmxIXh9lNItczQ&usqp=CAU",
        theme: "#ff9051",
        pending: false,
        error: false
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.error = false;
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.theme = action.payload.theme;
        },
        updateFailed: (state) => {
            state.pending = false;
            state.error = true;
        }
    }
});

export const {
    updateStart,
    updateSuccess,
    updateFailed
    } = UserSlide.actions;
export default UserSlide.reducer;