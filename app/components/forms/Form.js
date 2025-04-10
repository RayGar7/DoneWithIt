import { Formik } from 'formik';
import React from 'react';

// AppForm not in use: apparently you need <Formik> and its children in the same file
function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}
        </Formik>
    );
}

export default AppForm;