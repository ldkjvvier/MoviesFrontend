export const SerieIcon = ({ size = 6 }: { size?: number }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			role="img"
			viewBox="0 0 24 24"
			className={`fill-current text-white w-${size} h-${size}`}
		>
			<path d="M20 6h-5.586l2.293-2.293-1.414-1.414L12 5.586 8.707 2.293 7.293 3.707 9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM4 19V8h16l.002 11H4z"></path>
		</svg>
	)
}
