import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

//Redux
import { useDispatch, useSelector } from "react-redux";
import { setEmail, selectEmail } from "../features/noteDataSlice";

function Login() {

    //Redux
    const dispatch = useDispatch();

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            dispatch(setEmail(emailRef.current.value));
            history("/home")
        } catch {
            setError('Failed to sign in')
        }

        setLoading(false)
    }


    return (
        <>
            <Card className="m-auto align-self-center" style={{ maxWidth: 500 }}>
                <Card.Body className="m-auto align-self-center" style={{ width: 370 }}>
                    <h2 className="text-center mb-4"> Log In</h2>
                    {error && <Alert variant="danger"> {error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="john.smith@gmail.com" style={{textAlign: 'center'}} ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/signup">Signup</Link>

            </div>
        </>
    )
}


export default Login
