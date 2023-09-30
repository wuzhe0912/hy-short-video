import { Link } from 'react-router-dom';
import { NavigationLinkProps } from '@/interfaces/NavigationTypes';

function NavigationLink({ to, label }: NavigationLinkProps) {
  return (
    <Link
      to={to}
      className='text-white font-semibold flex items-center justify-center'>
      {label}
    </Link>
  );
}

export default NavigationLink;
