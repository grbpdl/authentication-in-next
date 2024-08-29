
import { render, screen, waitFor } from '@testing-library/react';
import DashboardPage from '../src/app/dashboard/page';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import '@testing-library/jest-dom';


jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('js-cookie', () => ({
  get: jest.fn(),
  remove: jest.fn(),
}));

global.alert = jest.fn();


//test case 1
//if user tries to access the dashboard without logged in
describe('DashboardPage', () => {
  it('redirect unauthenteciated user to login page', async () => {
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    Cookies.get.mockReturnValue(null); // cookie is null indicating user is not logged in

    render(<DashboardPage />);

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith('You need to log in to access the dashboard.');
      expect(mockPush).toHaveBeenCalledWith('/login');
    });
  });


  //test case 2
  //goto dashboard for authenticated user
  it('navigate to user if user is logged in and authenticated', async () => {
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    Cookies.get.mockReturnValue('true'); // setting cookie

    render(<DashboardPage />);

    expect(screen.getByText('Welcome to the dashboard! This is a protected page.')).toBeInTheDocument();
  });
});
