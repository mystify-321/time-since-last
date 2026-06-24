export default function ConfirmDeleteModal({ description, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay" onMouseDown={onCancel}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <h2>Remove item?</h2>
        <p>Are you sure you want to remove "{description}"?</p>
        <div className="modal-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="btn btn-danger" onClick={onConfirm}>
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
