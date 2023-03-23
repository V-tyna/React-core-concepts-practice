import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExpenseItem from './ExpenseItem';

const mockProps = {
  date: new Date('August 17, 2022 03:24:00'),
  title: 'Car insurance',
  price: 294.67,
};

describe('ExpenseItem component', () => {

  test('renders button "Change title"', () => {
    render(<ExpenseItem expense={mockProps}/>);

    expect(screen.getByText(/Change title/i)).toBeInTheDocument();
  });
 
  test('click button "Change title" changes current title to "Updated!"', async () => {
    render(<ExpenseItem expense={mockProps}/>);

    expect(screen.getByText(/Car insurance/i)).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(screen.getByText(/Change title/i));

    expect(screen.getByText(/Updated!/i)).toBeInTheDocument();
  });

  test('does not render title "Car insurance" if button "Change title" was clicked', async () => {
    render(<ExpenseItem expense={mockProps}/>);

    expect(screen.getByText(/Car insurance/i)).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(screen.getByText(/Change title/i));

    expect(screen.queryByText(/Car insurance/i)).toBeNull();
  });
});
