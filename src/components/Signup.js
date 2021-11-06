import React, { useRef} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
<<<<<<< HEAD
import NavSignup from '../views/NavSignup'
=======
>>>>>>> 2c33890 (Made the pages for the notes)

function Signup() {

const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmRef = useRef()

    return (
        <>
<<<<<<< HEAD
        <NavSignup/>
=======
>>>>>>> 2c33890 (Made the pages for the notes)
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
<<<<<<< HEAD
                            <Form.Control type = "email" placeholder = "user@gmail.com" style={{textAlign: 'center'}} ref={emailRef} required />
=======
                            <Form.Control type = "email" ref={emailRef} required />
>>>>>>> 2c33890 (Made the pages for the notes)
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type = "password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type = "password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button className = "w-100" type = "submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log In

            </div>
        </>
    )
}

export default Signup
