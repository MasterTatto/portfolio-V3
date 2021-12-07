export const validate = (values, props /* only available when using withFormik */) => {
        const errors = {};

        if (!values.email) {
            errors.email = '';
            // } else if (!values.name) {
            //     errors.name = ''
            // } else if (!values.messages) {
            //     errors.messages = ''
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (values.name.split('').length < 3) {
            errors.name = 'Low charter'
        }
        if(!values.messages) {
            errors.messages = '';
        }
        else if (values.messages.split('').length < 3) {
            errors.messages = 'Low charter'
        }

        //...

        return errors;
    }
;