import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import { AppThunk } from '../store';


export interface UserState {
    loading: boolean,
    list: []
}

const initialState: UserState = {
    loading: false,
    list: []
}

export const getUsersListAsync = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        try {
            const response = await axios.get('https://reqres.in/api/users?per_page=12');
            const { data } = response.data;
            return data;
        } catch (error) {
            return [];
        }
    }
);


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        startGetUsersList: (state) => {
            state.loading = true;
        },
        setUsersList: (state, action) => {
            state.loading = false;
            state.list = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersListAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUsersListAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            });
    }
});

export const { setUsersList, startGetUsersList } = userSlice.actions;

export default userSlice.reducer;

// export const fetchAllUsers = (): AppThunk => {
//     return async (dispatch) => {
//         dispatch(startGetUsersList());
//         try {
//             const response = await axios.get('https://reqres.in/api/users?per_page=12');
//             const { data } = response.data;
//             dispatch(setUsersList(data));
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }