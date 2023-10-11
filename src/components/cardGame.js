const CardGame = ({ item }) => {
	return (
		<div className='border rounded bg-white p-3 text-left'>
			<div className='relative'>
				<img src={item.thumbnail} alt={item.title} className='w-full' />
				<div className='absolute left-2 bottom-[6px] py-1 px-3 rounded-full bg-[#C1E1FF]'>
					{item.genre}
				</div>
			</div>
			<div className='mt-3'>{item.title}</div>
			<div className='mt-3'>{item.short_description}</div>
			<div className='flex mt-3 justify-between items-start'>
				<div>
					<label>Platform</label>
					<div>{item.platform}</div>
				</div>
				<div>
					<label>Release Date</label>
					<div>{item.release_date}</div>
				</div>
			</div>
		</div>
	);
};

export default CardGame;
