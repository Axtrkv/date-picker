import DatePickerComponent from 'components/date-picker'
import { useState } from 'react'

export default function HomePage() {
	const currentDate = new Date()

	const [firstCalendarDate, setFirstCalendarDate] = useState<Date>(
		new Date(currentDate)
	)
	const [secondCalendarDate, setSecondCalendarDate] = useState<Date>(
		new Date(new Date(currentDate).setMonth(currentDate.getMonth() + 1))
	)

	const moveMonth = (direction: 'prev' | 'next') => {
		setFirstCalendarDate(prevDate => {
			const newDate = new Date(prevDate)
			newDate.setMonth(newDate.getMonth() + (direction === 'prev' ? -1 : 1))
			return newDate
		})

		setSecondCalendarDate(prevDate => {
			const newDate = new Date(prevDate)
			newDate.setMonth(newDate.getMonth() + (direction === 'prev' ? -1 : 1))
			return newDate
		})
	}

	return (
		<div
			style={{
				padding: '40px',
				display: 'flex',
				flexDirection: 'column',
				fontFamily: 'Avenir Next, sans-serif'
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%'
				}}
			>
				<header
					style={{
						lineHeight: '36px',
						fontSize: '28px',
						color: '#484848',
						fontWeight: '600'
					}}
				>
					Personnaliser
				</header>
				<div style={{ display: 'flex', gap: '16px' }}>
					<button
						style={{
							padding: '8px 16px',
							border: '1px solid black',
							borderRadius: '4px',
							fontWeight: '600'
						}}
					>
						Annuler
					</button>
					<button
						style={{
							background: '#49516C',
							color: '#fff',
							padding: '8px 16px',
							borderRadius: '4px',
							fontWeight: '600'
						}}
					>
						Afficher
					</button>
				</div>
			</div>
			<div
				style={{
					marginTop: '24px',
					marginBottom: '40px',
					lineHeight: '24px',
					fontSize: '16px',
					color: '#484848',
					fontWeight: '400'
				}}
			>
				Sélectionnez un ou plusieurs jours Ut wisi enim ad minim veniam, quis
				nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
				ea commodo consequat
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: '20px'
				}}
			/>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div style={{ textAlign: 'center' }}>
					<div style={{ display: 'flex', justifyContent: 'space-around' }}>
						<button onClick={() => moveMonth('prev')}>&#10094;</button>
						<h2>
							{firstCalendarDate.toLocaleString('default', { month: 'long' })}{' '}
							{firstCalendarDate.getFullYear()}
						</h2>
					</div>
					<DatePickerComponent initialDate={firstCalendarDate} />
				</div>
				<div style={{ textAlign: 'center' }}>
					<div style={{ display: 'flex', justifyContent: 'space-around' }}>
						<h2>
							{secondCalendarDate.toLocaleString('default', { month: 'long' })}{' '}
							{secondCalendarDate.getFullYear()}
						</h2>
						<button onClick={() => moveMonth('next')}>&#10095;</button>
					</div>
					<DatePickerComponent initialDate={secondCalendarDate} />
				</div>
			</div>
		</div>
	)
}
