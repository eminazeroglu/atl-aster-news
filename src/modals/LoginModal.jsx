import { Col, Row } from "antd";
import Modal from ".";
import FormGroup from "../components/ui/form/FormGroup";
import FormText from "../components/ui/form/FormText";
import useForm from "../hooks/useForm";
import Button from "../components/ui/button";
import { serviceAuthLogin } from "../services/auth.service";
import { useContextAuth } from "../context/AuthContext";
import { useContextModal } from "../context/ModalContext";

function LoginModal() {

    const {handleToken, handleUser} = useContextAuth();
    const {handleModal} = useContextModal();
    const { values, setField, handleSubmit, loading } = useForm({
        initialValue: {
            email: '',
            password: ''
        },
        onSubmit: async () => {
            const res = await serviceAuthLogin(values);
            if (res?.token || res?.user) {
                handleToken(res.token);
                handleUser(res.user);
                handleModal('login');
            }
            
        }
    });


    return (
        <Modal name={'login'} className="!w-[300px]">
            <form onSubmit={handleSubmit}>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <FormGroup label="Email" name="email">
                            <FormText
                                onChnage={e => setField('email', e)}
                                value={values.email}
                            />
                        </FormGroup>
                    </Col>

                    <Col span={24}>
                        <FormGroup label="Password" name="password">
                            <FormText
                                type="password"
                                onChnage={e => setField('password', e)}
                                value={values.password}
                            />
                        </FormGroup>
                    </Col>

                    <Col span={24}>
                        <Button loading={loading} type="submit" block={true}>
                            Save
                        </Button>
                    </Col>
                </Row>
            </form>
        </Modal>
    );
}

export default LoginModal;