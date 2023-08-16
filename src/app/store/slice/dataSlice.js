import { createSlice, current } from "@reduxjs/toolkit"

const customerSlice = createSlice({
    name: "customer",
    initialState: [],
    reducers: {
        addCustomer(state, action) {
            // console.log(action.payload)
            state.push(action.payload);

        },
        deleteCustomer(state, action) {
            state.splice(action.payload, 1);
        },
        updateCustomer(state, action) {
            state.splice(action.payload.id, 1, action.payload.data);

        }
    }
})
export const { addCustomer, deleteCustomer, updateCustomer } = customerSlice.actions;
export default customerSlice.reducer;