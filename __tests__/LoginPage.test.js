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


//test case 1
//after sucessful login navigate to dashboard
describe('LoginPage', () => {
  it('authentication and navigating to dashboard upon sucessful login', () => {
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


  //test case 2
  //if username and password doesnot match

  it('shows an alert on invalid login', () => {
    global.alert = jest.fn();

    render(<LoginPage />);

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: 'notgaurab' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'wrongpassword' },
    });

    fireEvent.click(screen.getByText(/login/i));

    expect(global.alert).toHaveBeenCalledWith('Invalid username or password');
  });
});
