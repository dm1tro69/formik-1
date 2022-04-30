import React from 'react';
import {Formik, Form} from "formik";

const Signup = () => {
    return (
        <Formik>
            {formik => (
                <div>
                    <h1 className={'my-4 font-weight-bold-display-4'}>Sign Up</h1>
                </div>
            )}
        </Formik>
    );
};

export default Signup;
