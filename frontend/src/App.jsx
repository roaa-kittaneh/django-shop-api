import { useState, useEffect } from 'react'
import { fetchProducts } from './services/api'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // New Features State
  const [searchTerm, setSearchTerm] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [activeCategory, setActiveCategory] = useState('All')
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

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

  const addToCart = () => {
    setCartCount(prev => prev + 1)
    setShowToast(true)
  }

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))

    if (activeCategory === 'All') return matchesSearch

    // Mock category matching - in real app would check product.category
    const categoryKeywords = {
      'Gadgets': ['phone', 'laptop', 'device', 'camera', 'screen', 'tech'],
      'Fashion': ['shirt', 'shoe', 'wear', 'cloth', 'bag', 'dress'],
      'Art': ['paint', 'draw', 'sculpture', 'poster', 'print']
    }

    const keywords = categoryKeywords[activeCategory] || []
    const matchesCategory = keywords.some(k =>
      product.name.toLowerCase().includes(k) ||
      (product.description && product.description.toLowerCase().includes(k))
    )

    return matchesSearch && matchesCategory
  })

  const getQuantityLabel = (quantity) => {
    if (quantity === 0) return <span className="badge out">Sold Out</span>
    if (quantity < 5) return <span className="badge low">Low Stock</span>
    return <span className="badge in">Available</span>
  }

  return (
    <div className="app-container">
      {/* Navbar with Glass Effect */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">NEO<span className="highlight">SHOP</span></span>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for something futuristic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>

        <div className="nav-actions">
          <button className="cart-btn">
            🛒 <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>The <span className="gradient-text">Future</span> of Shopping</h1>
          <p>Experience the next generation of digital commerce. Premium products, seamless experience.</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="number">100+</span>
              <span className="label">Products</span>
            </div>
            <div className="stat">
              <span className="number">24/7</span>
              <span className="label">Support</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="main-content">
        <div className="manage-bar">
          <h2>Latest Arrivals</h2>
          <div className="filter-tags">
            {['All', 'Gadgets', 'Fashion', 'Art'].map(cat => (
              <button
                key={cat}
                className={`tag ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading the future...</p>
          </div>
        )}

        {error && (
          <div className="error-card">
            <h3>⚠️ Connection Error</h3>
            <p>{error}</p>
            <button onClick={loadProducts} className="primary-btn">Retry Connection</button>
          </div>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No matches found</h3>
            <p>Try adjusting your search terms or filters</p>
          </div>
        )}

        {!loading && !error && (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card">
                <div className="card-image-placeholder">
                  {/* Ideally we'd have images here, using a gradient for now */}
                  <div className="placeholder-gradient"></div>
                  {getQuantityLabel(product.quantity)}
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <h3 className="product-title">{product.name}</h3>
                    <span className="product-price">${parseFloat(product.price).toFixed(2)}</span>
                  </div>

                  <p className="product-desc">
                    {product.description || 'Verified authentic premium product.'}
                  </p>

                  <div className="card-footer">
                    <button
                      className={`add-btn ${product.quantity === 0 ? 'disabled' : ''}`}
                      onClick={() => product.quantity > 0 && addToCart()}
                      disabled={product.quantity === 0}
                    >
                      {product.quantity === 0 ? 'Sold Out' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 NeoShop. Designed for the Future.</p>
        <div className="social-links">
          <span>Twitter</span>
          <span>Instagram</span>
          <span>Discord</span>
        </div>
      </footer>

      {/* Toast Notification */}
      <div className={`toast ${showToast ? 'show' : ''}`}>
        Added to Cart! 🛍️
      </div>
    </div>
  )
}

export default App
