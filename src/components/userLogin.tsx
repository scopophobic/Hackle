'use client'
import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react'


const userLogin = () => {
const {user,error, isLoading} = useUser();
  return (
    <div>
      <a href="/api/auth/login">Login</a>
    </div>
  )
}

export default userLogin
