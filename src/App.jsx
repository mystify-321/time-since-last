import { useEffect, useState } from 'react'
import Card from './Card.jsx'
import ItemModal from './ItemModal.jsx'
import ConfirmDeleteModal from './ConfirmDeleteModal.jsx'
import { loadItems, saveItems } from './storage'

export default function App() {
  const [items, setItems] = useState(() => loadItems())
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [deletingItem, setDeletingItem] = useState(null)

  useEffect(() => {
    saveItems(items)
  }, [items])

  function handleAdd({ description, date }) {
    setItems((prev) => [...prev, { id: crypto.randomUUID(), description, date }])
    setShowAddModal(false)
  }

  function handleEdit({ description, date }) {
    setItems((prev) =>
      prev.map((item) => (item.id === editingItem.id ? { ...item, description, date } : item)),
    )
    setEditingItem(null)
  }

  function handleDelete() {
    setItems((prev) => prev.filter((item) => item.id !== deletingItem.id))
    setDeletingItem(null)
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1>Time Since Last</h1>
        <button type="button" className="add-button" onClick={() => setShowAddModal(true)}>
          + Add
        </button>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">No items yet. Click "+ Add" to create one.</div>
      ) : (
        <div className="grid">
          {items.map((item) => (
            <Card key={item.id} item={item} onEdit={setEditingItem} onDelete={setDeletingItem} />
          ))}
        </div>
      )}

      {showAddModal && (
        <ItemModal
          title="Add item"
          onSave={handleAdd}
          onCancel={() => setShowAddModal(false)}
        />
      )}

      {editingItem && (
        <ItemModal
          title="Edit item"
          initialDescription={editingItem.description}
          initialDate={editingItem.date}
          onSave={handleEdit}
          onCancel={() => setEditingItem(null)}
        />
      )}

      {deletingItem && (
        <ConfirmDeleteModal
          description={deletingItem.description}
          onConfirm={handleDelete}
          onCancel={() => setDeletingItem(null)}
        />
      )}
    </div>
  )
}
