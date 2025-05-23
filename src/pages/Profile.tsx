import ProfileDesktop from '../components/profile/ProfileDesktop';
import ProfileMobile from '../components/profile/ProfileMobile';
import useScreenSize from '../hooks/useScreenSize';

export default function Profile() {
  const screenSize = useScreenSize();

  if (screenSize !== 'sm') {
    return <ProfileDesktop />;
  }

  return <ProfileMobile />;
}
