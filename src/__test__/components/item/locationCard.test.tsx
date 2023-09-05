import { fireEvent, render, screen } from '@testing-library/react';
import LocationCard from '../../../components/item/locationCard';
import locations from '../../features/locations.json';
import { formatNumber } from '../../../utils';

describe('test location card', () => {
  test('renders the location card', () => {
    const item = locations[0];
    const viewCnt = 1;
    render(<LocationCard item={item} view={viewCnt} onClick={() => {}} />);

    const titleElement = screen.getByText(item.name);
    const userCount = screen.getByText(
      new RegExp(`${formatNumber(item.userCount)}[\\s]+Users`)
    );
    const viewCount = screen.getByText(
      new RegExp(`${formatNumber(viewCnt)}[\\s]+Views`)
    );

    // then
    expect(titleElement).toBeInTheDocument();
    expect(userCount).toBeInTheDocument();
    expect(viewCount).toBeInTheDocument();
  });

  test('test the location card mouse hover event', () => {
    const item = locations[0];
    const viewCnt = 1;
    render(<LocationCard item={item} view={viewCnt} onClick={() => {}} />);

    const body = screen.getByTestId('location_card_body');

    expect(body).toBeInTheDocument();

    fireEvent.mouseEnter(body);
    expect(screen.getByTestId('location_card_edit_icon')).toBeVisible();

    fireEvent.mouseLeave(body);
    expect(screen.getByTestId('location_card_edit_icon')).not.toBeVisible();
  });
});
