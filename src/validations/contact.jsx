import * as Yup from 'yup';

const ContactValidations = Yup.object().shape({
    name: Yup.string()
        .required('Zəhmət olmasa boş buraxmayın'),
    surname: Yup.string()
        .required('Zəhmət olmasa boş buraxmayın'),
    phone: Yup.number()
        .typeError('Zehemt olmasa duzgun telegon nomresi yazin')
        .positive('Zehemt olmasa duzgun telegon nomresi yazin')
        .integer('Zehemt olmasa duzgun telegon nomresi yazin')
        .test('len', 'En az 10 simvoldan ibaret olmalidir', val => val.toString().length >= 9)
        .required('Zəhmət olmasa boş buraxmayın'),
    email: Yup.string()
        .email('Zəhmət olmasa email formatını düz yazın')
        .required('Zəhmət olmasa boş buraxmayın'),
    message: Yup.string()
        .required('Zəhmət olmasa boş buraxmayın'),
});

export default ContactValidations;