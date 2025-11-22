import { useState, useEffect } from 'react'
import { fetchProducts } from './services/api'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchProducts()
      setProducts(data)
    } catch (err) {
      setError(err.message || 'Failed to load products')
    } finally {
      setLoading(false)
    }
  }

  const getQuantityClass = (quantity) => {
    if (quantity === 0) return 'out-of-stock'
    if (quantity < 5) return 'low-stock'
    return 'in-stock'
  }

  const getQuantityText = (quantity) => {
    if (quantity === 0) return 'Out of Stock'
    if (quantity < 5) return `Low Stock (${quantity})`
    return `In Stock (${quantity})`
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="container">
      <div className="header">
        <h1>🛍️ Product Catalog</h1>
        <p>Browse our amazing collection of products</p>
      </div>

      {loading && (
        <div className="loading">Loading products...</div>
      )}

      {error && (
        <div className="empty-state">
          <h2>Error Loading Products</h2>
          <p>{error}</p>
          <p style={{ fontSize: '0.9rem', marginTop: '10px', opacity: 0.8 }}>
            Make sure the backend is running on http://localhost:8000
          </p>
          <button className="refresh-btn" onClick={loadProducts}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="empty-state">
          <h2>No Products Available</h2>
          <p>Check back later for new products!</p>
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <span className="product-id">#{product.id}</span>
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">
                {product.description || 'No description available'}
              </p>
              <div className="product-price">
                ${parseFloat(product.price).toFixed(2)}
              </div>
              <span className={`product-quantity ${getQuantityClass(product.quantity)}`}>
                {getQuantityText(product.quantity)}
              </span>
              <div className="product-date">Added: {formatDate(product.created_at)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App

