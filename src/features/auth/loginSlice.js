import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const url = 'http://localhost:3000/api/auth/login'

const initialState = {
  authorizedUser: {
    email: '',
    token: '',
  },
  status: '',
  error: null,
}

// login thunk
export const loginThunk = createAsyncThunk(
  'login/loginThunk',
  async (data, { rejectWithValue }) => {
    console.log('Thunk received Data : ', data)

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      console.log('API Response: ', response)

      if (!response.ok) {
        throw new Error('Server error')
      }
      const { email, token } = await response.json()
      console.log('Email:', email)
      console.log('Token:', token)
      localStorage.setItem('user', JSON.stringify({ email, token }))

      return { email, token }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.authorizedUser = { email: '', token: '' }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        console.log('Fulfilled case action payload: ', action.payload)

        state.status = 'success'
        state.authorizedUser = action.payload
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const { logout } = loginSlice.actions

export default loginSlice.reducer
