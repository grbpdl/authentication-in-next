import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import LoginPage from '@/app/login/page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('js-cookie', () => ({
  set: jest.fn(),
}));

describe('LoginPage', () => {
  it('authenticates users and redirects to the dashboard upon successful login', () => {
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    render(<LoginPage />);

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: 'gaurab' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'gaurab' },
    });

    fireEvent.click(screen.getByText(/login/i));

    expect(Cookies.set).toHaveBeenCalledWith('auth', 'true', { expires: 1 });
    expect(pushMock).toHaveBeenCalledWith('/dashboard');
  });

  it('shows an alert on invalid login', () => {
    global.alert = jest.fn();

    render(<LoginPage />);

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: 'wronguser' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'wrongpass' },
    });

    fireEvent.click(screen.getByText(/login/i));

    expect(global.alert).toHaveBeenCalledWith('Invalid username or password');
  });
});
