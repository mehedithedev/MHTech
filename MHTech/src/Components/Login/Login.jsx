import React from 'react'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Login = () => {

    const loginData= yup.object().shape({
        fullName: yup.string().required("Enter your name !"),
        email: yup.string().email().required("Entery your email !"),
        age: yup.number().integer().positive().min(12).max(140).required("Enter your age !"),
        password: yup.string().min(4).max(100).required("Enter your password !"),
        confirmPassword: yup
        .string()
        .oneOf([
            yup.ref('password'),
            null
        ],"Password is not matching")
    })

    const {register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(loginData)})

  return (
    <div className='login'>
        <h1>Login</h1>

        <form onSubmit={handleSubmit((data)=>console.log(data))}>
            <input 
                type='text'
                placeholder='Enter your full name: '
                className='fullName'
                {...register('fullName')}
            />
            <p>{errors.fullName?.message}</p>
            <input
                type='email'
                placeholder='Enter you email: '
                className='email'
                {...register('email')}
            />
            <p>{errors.email?.message}</p>
            <input
                type='number'
                placeholder='Enter your age: '
                className='age'
                {...register('age')}
            />
            <p>{errors.age?.message}</p>
            <input
                type='password'
                placeholder='Enter your password: '
                className='password'
                {...register('password')}
            />
            <p>{errors.password?.message}</p>
            <input
                type='password'
                placeholder='Confirm your password: '
                className='confirmPassword'
                {...register('confirmPassword')}
            />
            <p>{errors.confirmPassword?.message}</p>
            {/* <input
                type=''
                className='submit'
            /> */}
           <button type='submit' className='submit'>Login</button>
        </form>

    </div>
  )
}

export default Login