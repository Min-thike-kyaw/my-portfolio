
import Title from "./Title";
import mail from '../assets/mail.gif';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
export default function Contact() {
    return (
        <>
            <Title title="Contacts" />
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <p className="text-lg leading-loose mb-3 tracking-wider">​​​​​​​If you want to get in touch regarding any of my work or even just to say 'hey there'. I'm always up for a chat.​​​​​​​</p>
                    <div className="mb-4">
                        <input type="text" id="first_name" className="bg-primary opacity-50 border-4 border-b-secondary text-blue-100 font-bold text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
                    </div>
                    <div className="mb-4">
                        <input type="email" id="last_name" className="bg-primary opacity-50 border-4 border-b-secondary text-blue-100 font-bold text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@gmail.com" required />
                    </div>
                    <div className="mb-4">
                        <textarea id="message" className="block p-2.5 w-full text-sm text-blue-100 font-bold bg-primary opacity-50 border-4 border-b-secondary focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-40" placeholder="Write your thoughts here..."></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={mail} alt="" className="h-96"/>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <div>
                    <a href="https://github.com/Min-thike-kyaw" target="_blank"><GitHubIcon sx={{ fontSize: 40 }} className="duration-700 ease-in-out hover:text-orange-500 cursor-pointer"/></a> 
                </div>
                <div className="mx-4">
                    <a target="_blank" href="https://www.linkedin.com/in/min-thike-kyaw-346656226/"><LinkedInIcon sx={{ fontSize: 40 }} className="duration-700 ease-in-out hover:text-orange-500 cursor-pointer" /></a> 
                </div>
                <div>
                    <a href="https://t.me/min_thike_kyaw" target="_blank"><TelegramIcon sx={{ fontSize: 40 }} className="duration-700 ease-in-out hover:text-orange-500 cursor-pointer"/></a>
                </div>
            </div>
        </>
    );
}