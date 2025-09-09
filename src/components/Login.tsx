import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Provider = GoogleOAuthProvider as unknown as React.FC<any>;
const GLogin = GoogleLogin as unknown as React.FC<any>;

const LoginPage = () => {
  return (
    <Provider clientId="133105456056-nqojmq808oq0tneb24dqptsqqr448clc.apps.googleusercontent.com">
      <div>
        <GLogin
          onSuccess={(res: any) => console.log(res)}
          onError={() => console.log("Login failed")}
        />
      </div>
    </Provider>
  );
};
export default LoginPage;
