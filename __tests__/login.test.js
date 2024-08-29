// __tests__/login.test.js
import { render, fireEvent } from '@testing-library/react';
import LoginPage from '@/app/login/page';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

jest.mock('js-cookie');
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('LoginPage', () => {
  it('logs in and redirects to dashboard on successful login', () => {
    const push = jest.fn();
    useRouter.mockReturnValue({ push });

    const { getByPlaceholderText, getByText } = render(<LoginPage />);

    fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'user' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
    fireEvent.click(getByText('Login'));

    expect(Cookies.set).toHaveBeenCalledWith('auth', 'true', { expires: 1 });
    expect(push).toHaveBeenCalledWith('/dashboard');
  });

  it('shows an alert on unsuccessful login', () => {
    window.alert = jest.fn();

    const { getByPlaceholderText, getByText } = render(<LoginPage />);

    fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'wronguser' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'wrongpassword' } });
    fireEvent.click(getByText('Login'));

    expect(window.alert).toHaveBeenCalledWith('Invalid username or password');
    expect(Cookies.set).not.toHaveBeenCalled();
  });
});
