import { matchPath } from 'react-router';
import { selectDevMode } from 'containers/DevMode/selectors';
import { useSelector } from 'react-redux';
import { selectLocation } from 'containers/App/selectors';

export function useShowDevVaults() {
  const devMode = useSelector(selectDevMode());
  const location = useSelector(selectLocation());
  const { pathname } = location;
  const routeIsDevelop = matchPath(pathname, {
    path: '/vaults/develop',
    exact: true,
    strict: false,
  });
  const showDevVaults = routeIsDevelop && devMode;
  return showDevVaults;
}
