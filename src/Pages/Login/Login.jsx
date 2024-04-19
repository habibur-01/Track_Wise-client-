import { FaArrowLeft } from "react-icons/fa";
import loginbg from "../../assets/4957136.jpg"
import useAuth from "../../hooks/useAuth"
import "./login.css"
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
    const { logInUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        logInUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate('/')
            }).catch(err => {
                // console.log(err.message)
                if (err.code == 'auth/invalid-credential') {
                    console.log('auth/invalid-credential')
                }
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
                            <p className="text-sm mt-2">Are you new here? Please <a href="/signup"  className="text-blue-500">Signup</a></p>
                        </div>

                    </form>
                </div>
            </div>
            <div className="lg:hidden block absolute top-12 left-10">
                <FaArrowLeft size={15} />
            </div>

        </div>
    );
};

export default Login;