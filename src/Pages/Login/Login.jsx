import { FaArrowLeft } from "react-icons/fa";
import loginbg from "../../assets/4957136.jpg"
import useAuth from "../../hooks/useAuth"
import "./login.css"
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAxiosSecure from "../../api/AxiosSecure/useAxiosSecure";
const Login = () => {
    const { logInUser, createUserWithGoogle } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const from = location?.state?.from?.pathname || "/main/allusers" || "/main/addTask"
    const today = new Date();

    console.log(location)
    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        logInUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            }).catch(err => {
                // console.log(err.message)
                if (err.code == 'auth/invalid-credential') {
                    console.log('auth/invalid-credential')
                }
            })
    }

    const handleGoogleLogin = () => {
        createUserWithGoogle()
            .then(result => {
                console.log(result.user)
                const userInfo = {name:result?.user.displayName, email:result.user.email, image:result.user.photoURL, date: today}
                axiosSecure.post('/users', userInfo)
                    .then(response => {
                        console.log(response)
                    }).catch(err => {
                        console.log(err)
                    })
                    navigate('/')

            })
            

    }

    return (
        <div className="flex justify-center w-full h-[800px] items-center relative">
            <div className="w-[50%]">
                <img src={loginbg} className="w-[80%] h-[80%]" alt="" />
            </div>
            <div className="w-[50%] p-8">
                <div>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold uppercase">Login</h1>
                        <p>Please login to access your account.</p>
                    </div>
                    <form className="space-y-4 my-8" onSubmit={handleLogIn}>
                        <div className="space-y-3">
                            <label>Email</label>
                            <div>
                                <input type="email" required name="email" placeholder="type email"></input>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label>Password</label>
                            <div>
                                <input type="password" required name="password" placeholder="type password"></input>
                                <div className="">
                                    <a href="" className="text-xs opacity-85 mt-2 pl-1">Forget Password?</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="uppercase btn w-[70%] rounded-lg">login</button>

                        </div>

                    </form>
                    <div className="flex w-[70%] justify-center items-center mb-6">
                        <div className="w-[33%]"><hr /> </div>
                        <p className="px-2 text-lg font-semibold">or</p>
                        <div className="w-[33%]"><hr /></div>
                    </div>
                    <div>
                        <button className="uppercase btn w-[70%] bg-[#5f89b6] text-white rounded-lg" onClick={handleGoogleLogin}><FcGoogle size={20} />Login with google</button>
                        <p className="text-sm mt-2">Are you new here? Please <a href="/signup" className="text-blue-500">Signup</a></p>
                    </div>
                </div>
            </div>
            <div className="lg:hidden block absolute top-12 left-10">
                <FaArrowLeft size={15} />
            </div>

        </div>
    );
};

export default Login;