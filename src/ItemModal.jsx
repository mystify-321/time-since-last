import { useState } from 'react'

function todayString() {
  return new Date().toISOString().slice(0, 10)
}

export default function ItemModal({ initialDescription = '', initialDate, onSave, onCancel, title }) {
  const [description, setDescription] = useState(initialDescription)
  const [date, setDate] = useState(initialDate || todayString())

  function handleSave(e) {
    e.preventDefault()
    if (!description.trim() || !date) return
    onSave({ description: description.trim(), date })
  }

  return (
    <div className="modal-overlay" onMouseDown={onCancel}>
      <form className="modal" onMouseDown={(e) => e.stopPropagation()} onSubmit={handleSave}>
        <h2>{title}</h2>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            autoFocus
            required
          />
        </label>
        <label>
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <div className="modal-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
