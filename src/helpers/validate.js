export const validate = (values, props /* only available when using withFormik */) => {
    const errors = {};
    if (!values.email) errors.email = 'Required'
    if (!values.name) errors.name = 'Required'
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address'
    return errors;
};
