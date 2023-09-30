import NavigationLink from './NavigationLink';

function Navigation() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/discover', label: 'Discover' },
  ];

  return (
    <footer className='grid grid-cols-2 h-[49px] bg-black'>
      {links.map((item, index) => (
        <NavigationLink key={index} to={item.to} label={item.label} />
      ))}
    </footer>
  );
}

export default Navigation;
