import { useState, useEffect } from 'react';
import CardGame from './cardGame';

const GameList = () => {
	const [loading, setLoading] = useState(true);
	const [listGame, setListGame] = useState([]);

	function getData({ category }) {
		const url = `https://free-to-play-games-database.p.rapidapi.com/api/games${
			category === 'all' ? '' : `?category=` + category
		}`;
		fetch(url, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key':
					'6ca948ceb7msh426f11ced47c1b7p13741cjsnf6f65942f5df',
				'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setListGame(data);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
			});
	}

	useEffect(() => {
		getData({ category: 'all' });
		console.log('test');
	}, []);

	function handleGenre(event) {
		getData({ category: event.target.value });
	}

	return (
		<div className='container mx-auto py-10'>
			<div className='flex items-center justify-between'>
				<div className='text-2xl'>Game Terbaru</div>
				<select
					className='px-4 py-3 border rounded bg-white'
					onChange={handleGenre}
				>
					<option value='all'>Semua Genre</option>
					<option value='shooter'>Shooter</option>
					<option value='strategy'>Strategy</option>
				</select>
			</div>
			<div className='grid grid-cols-3 gap-[34px] mt-10'>
				{!loading &&
					listGame.slice(0, 6).map((item, index) => {
						return <CardGame item={item} key={index} />;
					})}
			</div>
		</div>
	);
};

export default GameList;
