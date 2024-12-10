import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import './date-picker.css'

function DatePickerComponent({ initialDate }: { initialDate: Date }) {
	const [calendarDate, setCalendarDate] = useState(initialDate)
	const [selectedDates, setSelectedDates] = useState<Date[]>([])

	useEffect(() => {
		setCalendarDate(initialDate)
	}, [initialDate])

	const handleDateClick = (date: Date) => {
		setSelectedDates(prevDates => {
			const dateString = date.toDateString()
			if (prevDates.some(d => d.toDateString() === dateString)) {
				return prevDates.filter(d => d.toDateString() !== dateString)
			} else {
				return [...prevDates, date]
			}
		})
	}

	const tileClassName = ({ date, view }: { date: Date; view: string }) => {
		if (view === 'month') {
			const isToday = date.toDateString() === new Date().toDateString()
			const isSelected = selectedDates.some(
				selectedDate => selectedDate.toDateString() === date.toDateString()
			)

			const showAfterEffect = isSelected || isToday

			let classNames = isSelected ? 'selected-tile' : ''
			if (showAfterEffect) {
				classNames += ' show-after-effect'
			}
			return classNames
		}
		return ''
	}

	const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
		if (view === 'month') {
			const displayedMonth = calendarDate.getMonth()
			return date.getMonth() !== displayedMonth
		}
		return false
	}

	return (
		<Calendar
			value={undefined}
			showNavigation={false}
			activeStartDate={calendarDate}
			onClickDay={handleDateClick}
			tileClassName={tileClassName}
			tileDisabled={tileDisabled}
			showFixedNumberOfWeeks={true}
		/>
	)
}

export default DatePickerComponent
