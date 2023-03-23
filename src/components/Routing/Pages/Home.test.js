import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import Home from './Home';
import store from '../../../store/index';
import { router } from '../AppRoutingPage';

describe('Home component', () => {
  const component =<Provider store={store}><RouterProvider router={router} ><Home /></RouterProvider></Provider>;

  test('renders <h1>Home page</h1>', () => {
    render(component);

    const title = screen.getByText(/Home page/i);
    expect(title).toBeInTheDocument();
  });

  test('renders <Link to="/restaurant" />', () => {
    render(component);

    const title = screen.getByText(/Restaurant page/i);
    expect(title).toBeInTheDocument();
  });

  test('click on "Basic page" link is rendering <Basic />', async () => {
    render(component);

    const user = userEvent.setup();
    const basicLink = screen.getByText(/Basic page/i);

    expect(basicLink).toBeInTheDocument();
  
    await user.click(basicLink);
    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
  });
});
