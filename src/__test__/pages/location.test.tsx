import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import locations from '../features/locations.json';
import LocationPage from '../../pages/location';
import { ViewCountContext } from '../../contexts/viewCountContext';
import { useLocations } from '../../queries/useLocations';

const mockUseLocations = useLocations as jest.Mock<
  ReturnType<typeof useLocations>
>;

jest.mock('../../queries/useLocations');

const incrementViewCount = jest.fn();
const viewCounts: Record<string, number> = {};

describe('test location page', () => {
  beforeEach(() => {
    mockUseLocations.mockImplementation(
      jest.fn().mockReturnValue({
        data: locations,
        isLoading: false,
        error: null,
      })
    );
    render(
      <ViewCountContext.Provider value={{ viewCounts, incrementViewCount }}>
        <LocationPage />
      </ViewCountContext.Provider>
    );
  });

  it('renders all of the items', () => {
    const cardContainer = screen.getByTestId('card-container');
    expect(cardContainer).toBeInTheDocument();
    expect(cardContainer.children).toHaveLength(locations.length);
  });

  it('open dialog when click on a item', async () => {
    fireEvent.click(screen.getByTestId('card-container').children[0]);
    expect(incrementViewCount).toBeCalled();

    await waitFor(() => {
      expect(screen.getByTestId('location-dialog')).toBeInTheDocument();
      expect(screen.getByTestId('dialog-name').innerHTML).toBe(
        locations[0].name
      );
    });
  });
});
