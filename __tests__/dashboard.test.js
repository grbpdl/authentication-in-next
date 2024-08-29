// __tests__/dashboard.test.js
import { render } from '@testing-library/react';
import DashboardPage from '@/app/dashboard/page';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

jest.mock('js-cookie');
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('DashboardPage', () => {
  it('redirects to login if not authenticated', () => {
    Cookies.get.mockReturnValue(null);
    const push = jest.fn();
    useRouter.mockReturnValue({ push });

    render(<DashboardPage />);

    expect(push).toHaveBeenCalledWith('/login');
  });

  it('renders dashboard if authenticated', () => {
    Cookies.get.mockReturnValue('true');
    const push = jest.fn();
    useRouter.mockReturnValue({ push });

    const { getByText } = render(<DashboardPage />);

    expect(getByText('Welcome to the protected dashboard!')).toBeInTheDocument();
    expect(push).not.toHaveBeenCalled();
  });
});
