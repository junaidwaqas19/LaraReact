  // Adjust the path as needed
import { useDispatch } from 'react-redux';
import { AuthApi } from '../../api/Auth/AuthApi';
import { setUser as login } from '../../store/auth/auth-slice';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from '../../utlis/sweet-alert';

const Login = () => {
  
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [otherError, setOtherError] = useState('');
  const navigate = useNavigate();
  const {usertype} = useParams();
  
  
  const onSubmit = async (ev) => {
    ev.preventDefault();
    setEmailError('');
    setPasswordError('');
    setOtherError('');
  
    try {
      const data = await AuthApi.signin(email, password, usertype);

      
      // Redirect to dashboard only if there's a token
      if (data.token) {
        // Dispatch the setUser action only on successful login
        dispatch(login(data));
        toast('success','Login Successfully!')        
        navigate('/dashboards');
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errors = error.response.data.errors;
        setEmailError(errors.email ? errors.email.join('<br>') : '');
        setPasswordError(errors.password ? errors.password.join('<br>') : '');
      } else {
        setOtherError('An error occurred.');
      }
    }
  };
  



  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>

        <div className="md:w-1/3 max-w-lg">
          <div className="text-center md:text-center">
            <label className="mr-1">Sign in with</label>
          </div>

          <form onSubmit={(ev) => onSubmit(ev)} action="#" method="POST" className="max-w-xl">
            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
            </div>
            <input
              className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded-lg"
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={(ev) => setEmail(ev.target.value)}
            />
            {emailError && <div className="text-red-500">{emailError}</div>}
            <input
              className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded-lg mt-4"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(ev) => setPassword(ev.target.value)}
            />
            {passwordError && <div className="text-red-500">{passwordError}</div>}

            {/* Display other error */}
            {otherError && <div className="text-red-500">{otherError}</div>}

            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
              <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="text-center md:text-left">
              <button  className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-sm tracking-wider" type="submit">
                Login
              </button>
              {/* <Notify /> */}
            </div>
          </form>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account?{' '}
            <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">
              Register
            </a>
          </div>
        </div>
      </section>
    </>
  )
  };

export default Login;
