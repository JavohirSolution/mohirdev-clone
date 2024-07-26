import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { auth } from '../database/firebase';
import Input from '../ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth.slice';



function Login() {
    const [emails, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const { isloading, isLogged, error } = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(signUserStart())
        try {
            const response = await signInWithEmailAndPassword(auth, emails, password)
            const { email, uid, accessToken } = response.user
            dispatch(signUserSuccess({ email, uid, token: accessToken }))
            navigate("/")
        } catch (error) {
            dispatch(signUserFailure(error.message))
            console.log(error.message)
        }
    }

    useEffect(() => {
        if (isLogged) {
            navigate("/")
        }
    }, [isLogged])
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <Input value={emails} type="email" placeholder="name@company.com" setState={setEmail}>Your email</Input>
                                <Input value={password} type="password" placeholder="••••••••" setState={setPassword}>Password</Input>

                                <button onClick={handleSubmit} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-slate-400 border">
                                    {isloading ? "Loading..." : "Login"}
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Haven't yet had account <Link to={"/register"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
