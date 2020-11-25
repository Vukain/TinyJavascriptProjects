import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <label htmlFor="">Podaj Login: <input type="text" /></label> <br/>
            <label htmlFor="">Podaj Hasło: <input type="password" /></label> <br/>
            <button>Zaloguj</button>
        </div>
        
    );
}

export default LoginPage;