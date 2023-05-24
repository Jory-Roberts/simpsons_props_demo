import Quote from './Quote';
function Character({ character, showQuotes = true }) {
	const { name, image: picture, quotes } = character;
	return (
		<div className='card'>
			<img
				src={picture}
				alt={name}
			/>
			<h2>{name}</h2>
			{showQuotes && (
				<>
					<Quote quote={quotes[0]} />
					<Quote quote={quotes[1]} />
					<Quote quote={quotes[2]} />
				</>
			)}
		</div>
	);
}
export default Character;
