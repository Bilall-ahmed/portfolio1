import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Nav from '../component/Nav';
import Sidebar from '../component/Sidebar';
import Footer from '../component/Footer';
import AboutData from '../component/AboutData';
import Wave from '../component/wave';

const Login = () => {
    return (
        <Authenticator>
            {({ signOut }) => (
                <div>
                    <Nav />

                    <div className='row'>
                        <div className='col-md-1'>
                            <Sidebar />
                        </div>
                        <div className='col-md-11'>
                            <div className='p_left'>

                                <AboutData />
                            </div>

                        </div>
                    </div>
                    <Wave/>
                    <Footer />

                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
    );
};

export default Login;
