import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testUtils';
import ExpandableLink from './ExpandableLink';

it('expands and collapses event list on click', () => {
  render(
    <ExpandableLink label="label" height={100}>
      <h1>head</h1>
    </ExpandableLink>
  );
  userEvent.click(screen.getByRole('button'));
  expect(screen.getByRole('heading')).toBeInTheDocument();
  userEvent.click(screen.getByRole('button'));
  expect(screen.queryByRole('heading')).not.toBeInTheDocument();
});
