
import Text from '../../atoms/Text'
import Img from '../../atoms/Image'
import profileJquery from './profile'
import { Link } from 'react-router-dom'
import imageProfiule from '../../images/profile.jpg'

const Profile = () => {
    const home = 'Home';
    const profile = 'profile';
    const account = 'account';
    const settings = 'settings';
    const typeInfo = 'p';

    const altInfo = 'profileImage'
    profileJquery()
    return (
        <div>
            <div className="profile-wrap">
                <Link to='/' className='link-home'>
                    <div role={'button'} className='home'>{home}  </div>
                </Link>
                <div className='profile-container'>
                    <Link to="/profile">
                        <div className='profile-image-info' id="profile-image-id">


                            <Img sourse={imageProfiule} alter={altInfo} />

                            <Text role={'button'} textInput={profile} type={typeInfo} />




                        </div>
                    </Link>
                </div>

            </div>
            
        </div>

    )
}

export default Profile