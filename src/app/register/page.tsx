import { Metadata } from 'next';
import RegisterPage from './RegisterForm';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RegisterPage />
    </div>
  );
}



export const metadata: Metadata = {
  title: 'Register',
};
