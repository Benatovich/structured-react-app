import { useState } from 'react'

import { Redirect, useHistory } from 'react-router-dom'
import { useUser } from '../hooks/user'
import { signInUser, signUpUser } from '../services/users'

const Login = () => {
    const history = useHistory()
    const { user, setUser } = useUser()
    const [isSigningUp, setIsSigningUp] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const toggleIsSigningUp = () => {
        setEmail('')
        setPassword('')
        setIsSigningUp((oldState) => !oldState)
    }

    const handleSubmit = async (e) => {
        setError('')
        
        try {
            e.preventDefault()
            const res = isSigningUp
                ? await signUpUser({ email, password })
                : await signInUser({ email, password })

            setUser({ id: res.id, email: res.email })
            history.push('/')
        } catch (error) {
            setError(error.message)
        }
    }

    if (user.email) return <Redirect to='/' />

    return (
        <div>
            <div>
                <div>
                    <h2>
                        {isSigningUp ? 'Sign up' : 'Sign in'}
                    </h2>
                    <p>
                        Or 
                        <a
                            href='#'
                            className='signup toggle'
                            onClick={toggleIsSigningUp}
                        >
                            {''}
                            {isSigningUp ? 'sign into your account' : 'sign up for an account'}
                        </a>
                    </p>
                </div>

                <form className='auth form' onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor='email-address'>
                                Email
                            </label>
                            <input
                                id='email-address'
                                name='email'
                                type='email'
                                autoComplete='email'
                                required
                                className='email-input'
                                placeholder='Email address'
                                value={email}
                                onChange={({ target }) => setEmail(target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor='password'>
                                Password
                            </label>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                autoComplete='password'
                                required
                                className='password-input'
                                placeholder='Password'
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type='submit'
                        >
                            {isSigningUp ? 'Sign up' : 'Sign in'}
                        </button>
                        <p>
                            {error}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login