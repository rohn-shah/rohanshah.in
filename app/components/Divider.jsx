export default function Divider() {
	return (
		<div className="scale-[2] w-1/2 mx-auto h-5 relative">
			<div
				className="absolute h-5 w-[1000%] -translate-x-[45%] scale-[0.1]"
				style={{
					background: `linear-gradient(45deg, transparent, transparent 49%, var(--line-color) 49%, transparent 51%)`,
					backgroundSize: "40px 40px",
				}}
			/>
			<div
				className="absolute h-5 w-[1000%] -translate-x-[45%] scale-[0.1]"
				style={{
					background: `linear-gradient(-45deg, transparent, transparent 49%, var(--line-color) 49%, transparent 51%)`,
					backgroundSize: "40px 40px",
				}}
			/>
		</div>
	);
}
