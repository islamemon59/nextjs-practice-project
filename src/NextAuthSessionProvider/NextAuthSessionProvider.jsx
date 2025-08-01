"use client"
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const NextAuthSessionProvider = ({children}) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    );
};

export default NextAuthSessionProvider;