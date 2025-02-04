import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/auth/loginSlice'

const store = configureStore({
  reducer: { user: loginReducer },
})

export default store
