let config = {
    'name': {
        required: true,
        minLength: 5,
        maxLength: 50
    },
    'userName': {
        required: true,
        minLength: 5,
        maxLength: 50
    },
    'email': {
        required: true,
        email: true,
        minLength: 5,
        maxLength: 50
    },
    'password': {
        required: true,
        minLength: 7,
        maxLength: 25,
        matching: 'confirmPaswd'
    },
    'confirmPaswd': {
        required: true,
        minLength: 7,
        maxLength: 25,
        matching: 'password'
    }
};

let valodatior = new Validator(config);