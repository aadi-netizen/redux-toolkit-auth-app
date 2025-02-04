import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../features/auth/loginSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { authorizedUser, status, error } = useSelector((state) => state.user)
  console.log('User redux state: ', { authorizedUser, status, error })

  const userFormAction = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    let user = Object.fromEntries(formData.entries())
    console.log('Form Submitted', 'Data: ', user)
    dispatch(loginThunk(user))
    // console.log('Email:', user.get('email'))
    // console.log('Password:', user.get('password'))
  }

  useEffect(() => {
    console.log('User:', authorizedUser)
    console.log(authorizedUser?.token)

    authorizedUser?.token
      ? navigate('/')
      : console.log('Please login to continue')
  }, [authorizedUser])

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 ">
      <Form
        className="w-50 h-50  px-5 py-4 rounded-3 shadow-lg"
        onSubmit={(e) => userFormAction(e)}
      >
        <h5 className="text-center p-1">Login to continue</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm
