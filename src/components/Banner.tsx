import { TypeAnimation } from 'react-type-animation';
import coder from '../assets/animation_500_lh0buoql.gif';
// import GitHubIcon from '@mui/icons-material/GitHub';
import { Phone } from '@mui/icons-material';
import { Mail } from '@mui/icons-material';
export default function App() {
    //   const [open, toggle] = useState(false);

    return (
        <>
            <div className='grid grid:cols-1 md:grid-cols-2'>
                <div className='grid content-center'>
                    <TypeAnimation
                        sequence={[
                            '',
                            500,
                            'Min',
                            700,
                            'Min Thike',
                            700,
                            'Min Thike Kyaw',
                            () => {
                                console.log('Sequence completed');
                            }
                        ]}
                        wrapper="h1"
                        cursor={true}
                        // repeat={Infinity}
                        // style={{ fontSize: '2em', display: 'inline-block' }}
                        className='font-medium md:text-7xl text-center md:text-left text-3xl mb-4'
                    />
                    <TypeAnimation
                        sequence={[
                            '',
                            3000,
                            'Web Developer who has always a thirst for Budget, sorry',
                            200,
                            'Web Developer who has always a thirst for Bugs',
                            () => {
                                console.log('Sequence completed');
                            }
                        ]}
                        wrapper="span"
                        cursor={true}
                        className='text-sm md:text-2xl tracking-wider mb-2 text-center md:text-left'

                    />
                    <div>
                        <ul>
                            <li>
                                <span className='text-sm'><Phone /> +959768564008</span>
                            </li>
                            <li>
                            <span className='text-sm'><Mail /> minthike.mtk.710@gmail.com</span>
                            </li>
                        </ul>

                    </div>
                </div>
                <div>
                    <img src={coder} alt="" />
                </div>
            </div>
        </>

    );
}