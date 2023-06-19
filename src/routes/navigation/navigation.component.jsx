import { Fragment,useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context';

import '../navigation/navgation.styles.scss'




const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
    return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
         <CrwnLogo />
        </Link>
        <div className='nav-links-container'>
         <Link className='nav-link' to='/Shop'>
           SHOP
         </Link>  
         <Link className='nav-link' to='/auth'>
           SIGN IN
         </Link>  
        </div> 
      </div>
      <Outlet />
    </Fragment>
    );
  };




  export default Navigation;