'use client'

import { Button } from 'flowbite-react';
import { signIn } from 'next-auth/react';
import React from 'react'

function LoginButton() {
  return (
    <Button outline onClick={() => signIn('id-server', {callbackUrl: '/'}, {prompt: 'login'})}>
        Sign In
    </Button>
  )
}

export default LoginButton;