import { daysSince } from './daysSince'

export default function Card({ item, onEdit, onDelete }) {
  const days = daysSince(item.date)

  return (
    <div className="card">
      <button type="button" className="trash-button" onClick={() => onDelete(item)} aria-label="Delete">
        🗑️
      </button>
      <button type="button" className="card-description" onClick={() => onEdit(item)}>
        {item.description}
      </button>
      <button type="button" className="card-days" onClick={() => onEdit(item)}>
        <span className="count">{days}</span>
        {days === 1 ? 'day since' : 'days since'}
      </button>
    </div>
  )
}
