import { Metadata } from 'next';
import LoginForm from './Login';

export default function LoginPage() {
  return <LoginForm />;
}

export const metadata: Metadata = {
  title: 'Login',
};
