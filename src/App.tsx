import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';


const App = () => {
  return (
    <div>
      <h1>React Login System</h1>
      <h2>Register</h2>
      <RegisterForm />
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default App;
