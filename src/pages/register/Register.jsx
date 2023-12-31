import RegisterForm from "../../components/registerForm/RegisterForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Register = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm />
        </HelmetProvider>
    )
};

export default Register