import { useFormik } from 'formik';
import Section from '@/components/ui/section'
import { env, notification, sendEmail } from '../../utils/helper';
import { Col, Row } from 'antd';
import FormGroup from '../../components/ui/form/FormGroup';
import FormText from '../../components/ui/form/FormText';
import FormTextarea from '../../components/ui/form/FormTextarea';
import Button from '../../components/ui/button';
import ContactValidations from '../../validations/contact';

function ContactPage() {

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            phone: '',
            email: '',
            message: '',
        },
        validationSchema: ContactValidations,
        onSubmit: async values => {
            const res = await sendEmail(values);

            if (res.status === 200) {
                formik.resetForm();
                notification('Mesajınız göndərildi. Tezliklə sizinlə əlaqə saxlanılacaq.')
                
            }
        },
    });

    return (
        <Section title="Əlaqə">
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 gap-10">
                <div className='shadow flex bg-white dark:bg-gray-800 p-3'>
                    <iframe
                        src={env('GOOGLE_MAP')}
                        className="w-full h-full min-h-[300px]"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className='shadow bg-white dark:bg-gray-800 p-3'>
                    <form onSubmit={formik.handleSubmit}>
                        <Row gutter={[20, 20]}>
                            <Col lg={12} xs={24}>
                                <FormGroup
                                    label="Ad"
                                    name="name"
                                    errors={formik.errors}
                                    touched={formik.touched}
                                >
                                    <FormText
                                        value={formik.values.name}
                                        onChnage={e => formik.setFieldValue('name', e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12} xs={24}>
                                <FormGroup
                                    label="Soyad"
                                    name="surname"
                                    errors={formik.errors}
                                    touched={formik.touched}
                                >
                                    <FormText
                                        value={formik.values.surname}
                                        onChnage={e => formik.setFieldValue('surname', e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12} xs={24}>
                                <FormGroup
                                    label="Email"
                                    name="email"
                                    errors={formik.errors}
                                    touched={formik.touched}
                                >
                                    <FormText
                                        value={formik.values.email}
                                        onChnage={e => formik.setFieldValue('email', e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12} xs={24}>
                                <FormGroup
                                    label="Telefon"
                                    name="phone"
                                    errors={formik.errors}
                                    touched={formik.touched}
                                >
                                    <FormText
                                        maxLength={10}
                                        value={formik.values.phone}
                                        onChnage={e => formik.setFieldValue('phone', e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col span={24}>
                                <FormGroup
                                    label="Mesaj"
                                    name="message"
                                    errors={formik.errors}
                                    touched={formik.touched}
                                >
                                    <FormTextarea
                                        rows={6}
                                        value={formik.values.message}
                                        onChnage={e => formik.setFieldValue('message', e)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col span={24} className="flex justify-end">
                                <Button
                                    rounded={true}
                                    type='submit'
                                    loading={formik.isSubmitting}
                                >
                                    Göndər
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </div>
            </div>
        </Section>
    );
}

export default ContactPage;