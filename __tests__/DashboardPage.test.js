
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

// Mock window.alert
global.alert = jest.fn();

describe('DashboardPage', () => {
  it('should redirect unauthenticated users to the login page', async () => {
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    Cookies.get.mockReturnValue(null); // Simulate no auth cookie

    render(<DashboardPage />);

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith('You need to log in to access the dashboard.');
      expect(mockPush).toHaveBeenCalledWith('/login');
    });
  });

  it('should render the dashboard for authenticated users', async () => {
    const mockPush = jest.fn();
    useRouter.mockReturnValue({ push: mockPush });

    Cookies.get.mockReturnValue('true'); // Simulate auth cookie

    render(<DashboardPage />);

    expect(screen.getByText('Welcome to the dashboard! This is a protected page.')).toBeInTheDocument();
  });
});
