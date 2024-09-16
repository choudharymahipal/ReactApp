import React, { useEffect, useState } from "react";

function Login() {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);

  useEffect(() => {
    //On init
  }, []);

  // useEffect(()=>{
  //   //On email change

  // },[email])

  return <div>Login</div>;
}

export default Login;
