import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function LoginForm() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 ">
      <Form className="w-50 h-50  px-5 py-4 rounded-3 shadow-lg">
        <h5 className="text-center p-1">Login to continue</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm
