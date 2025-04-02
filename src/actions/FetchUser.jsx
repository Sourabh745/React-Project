import { createAsyncThunk } from '@reduxjs/toolkit';

const FetchUser = createAsyncThunk('actions/FetchUser', async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data =  await response.json();
        //console.log(data);
        return data;
   
})

export default FetchUser;