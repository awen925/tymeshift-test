import { render } from '@testing-library/react';
import { LocationDialog } from '../../../components/dialog/location';
import locations from '../../features/locations.json';

test('renders the location dialog', () => {
  render(
    <LocationDialog
      open={true}
      onClose={() => {}}
      item={locations[0]}
      view={0}
    />
  );
});
