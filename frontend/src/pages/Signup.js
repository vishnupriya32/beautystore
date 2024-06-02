import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginUserStatus, error } = useSelector(state => state.user);

  const onSubmit = data => {
    dispatch(loginUser(data));
  };

  React.useEffect(() => {
    if (loginUserStatus === 'success') {
      navigate('/');
    }
  }, [loginUserStatus, navigate]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input {...register('username', { required: true })} />
        {errors.username && <p>Username is required</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <p>Password is required</p>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <p>Email is required</p>}
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default Signin;
