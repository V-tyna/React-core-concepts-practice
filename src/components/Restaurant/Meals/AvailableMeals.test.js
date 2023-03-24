import { render, screen } from '@testing-library/react';
import AvailableMeals from './AvailableMeals';

describe('AvailableMeals component', () => {
	test('should render meals if request succeeds', async () => {
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({
      ok: true,
			json: async () => {
				return {
					'-NPNINrn6gAjfLaewV2D': {
						description: 'Finest fish and veggies',
						name: 'Sushi',
						price: '22.99',
					},
					'-NPNIf5gXKIbWGSnCJGU': {
						description: 'A german specialty!',
						name: 'Schnitzel',
						price: '16.50',
					},
				};
			},
		});
    
		render(<AvailableMeals />);

		const listItemsElements = await screen.findAllByRole(
			'listitem',
			{},
			{ timeout: 2000 }
		);

		expect(listItemsElements).not.toHaveLength(0);
	});

  test('should render error message if request fails', async () => {
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({
      ok: false,
			json: async () => {},
		});

		render(<AvailableMeals />);

    const errorMessage = await screen.findByRole('errorMessage');

		expect(errorMessage).toBeInTheDocument();
	});
});
