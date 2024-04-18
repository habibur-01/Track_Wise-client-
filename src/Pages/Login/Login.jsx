import loginbg from "../../assets/4957136.jpg"
import "./login.css"
const Login = () => {
    return (
        <div className="flex justify-center w-full h-[800px] items-center">
            <div className="w-[50%]">
                <img src={loginbg} className="w-[80%] h-[80%]" alt="" />
            </div>
            <div className="w-[50%] p-8">
                <div>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold uppercase">Login</h1>
                        <p>Please login to access your account.</p>
                    </div>
                    <form className="space-y-4 my-8">
                        <div className="space-y-3">
                            <label>Email</label>
                            <div>
                                <input name="email" placeholder="type email"></input>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label>Password</label>
                            <div>
                                <input name="password" placeholder="type password"></input>
                            </div>
                        </div>
                        <div>
                            <button className="uppercase btn w-[70%] rounded-lg">login</button>
                        </div>
                        
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;