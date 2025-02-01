import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function LoginForm() {
  const userFormAction = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    let user = Object.fromEntries(formData.entries())
    console.log('Form Submitted', 'Data: ', user)

    // console.log('Email:', user.get('email'))
    // console.log('Password:', user.get('password'))
  }

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
