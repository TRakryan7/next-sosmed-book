'use client'
import React, { useState } from 'react'

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const AuthComponent = () => {
    const [changePage, setChangePage] = useState('login');
    return (
        <div>
            {changePage == 'login' && (
                <LoginPage changePage={(status: boolean) => {
                    if (status) {
                        setChangePage('register') 
                   }
                }}/>
            )}
            {changePage == 'register' && (
                <RegisterPage changePage={(status: boolean) => {
                    if (status) {
                        setChangePage('login') 
                   }
                }}/>
            )}
            
        </div>
    );
}
 
export default AuthComponent;