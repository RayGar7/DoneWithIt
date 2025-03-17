import { Formik } from 'formik';
import React from 'react';

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <Formik 
            initlalValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    );
}

export default AppForm;