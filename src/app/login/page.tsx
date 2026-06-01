import { Metadata } from 'next';
import LoginForm from './Login';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Login',
};
