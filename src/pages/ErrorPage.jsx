import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="bg-[#ffd83b] flex justify-center pt-10">
            <div className='absolute border-2 border-black p-2 rounded-lg'>
                <Link to='/'>
                    <div className='flex gap-2 items-center'>
                        <p><FaArrowLeftLong /></p>
                        <p className='font-semibold'>Back Home</p>
                    </div>
                </Link>
            </div>
            <img src="https://i.ibb.co/VTGVznW/404.jpg" alt="404 error" className="h-screen mx-auto" />
        </div>
    );
};

export default ErrorPage;