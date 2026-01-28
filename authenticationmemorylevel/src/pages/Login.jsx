function Login() {
  const login = () => {
    window.location.href = "http://localhost:8080/login";
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login with Spring</button>
    </div>
  );
}

export default Login;
