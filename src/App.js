import './App.css';
import logo from './assets/brand_logo.svg';
import youtube from './assets/logo-youtube.svg';
import whatsapp from './assets/logo-whatsapp.svg';
import twitter from './assets/logo-twitter.svg';
import instagram from './assets/logo-instagram.svg';
import GameList from './components/gameList';

function App() {
	return (
		<div className='App bg-[#EDF1F3]'>
			<div className='bg-white'>
				<div className='container mx-auto'>
					<div className='flex items-center justify-between p-4'>
						<img src={logo} alt='logo' />
						<div className='flex'>
							<img src={youtube} alt='youtube' className='mr-3'/>
							<img src={whatsapp} alt='whatsapp' className='mr-3'/>
							<img src={twitter} alt='twitter' className='mr-3'/>
							<img src={instagram} alt='instagram' />
						</div>
					</div>
				</div>
			</div>
			<div className='h-screen bg-hero-banner bg-no-repeat bg-cover bg-center'>
				<div className='flex flex-col items-center justify-center h-full w-[400px] mx-auto'>
					<h2 className='text-[32px] font-bold text-white'>
						Pilih Game Favorite Kalian
					</h2>
					<h5 className='text-center text-[16px] font-normal text-white py-6 px-4'>
						Shortbread cookie tootsie roll sugar plum cheesecake
						pudding croissant apple pie. Lollipop macaroon lollipop
						croissant chocolate cake croissant fruitcake brownie
						jelly-o.
					</h5>
					<button className='bg-blue-500 text-white p-4 rounded'>
						Sign Up For Free Account
					</button>
				</div>
			</div>
			<GameList />
		</div>
	);
}

export default App;
