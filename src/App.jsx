import React, { useEffect, useMemo, useState } from 'react'

const whatsappNumber = '919876543210'

const products = [
  {
    id: 1,
    name: 'Rangrez Orange Kanjivaram',
    category: 'Kanchipuram Sarees',
    price: 12990,
    originalPrice: 16990,
    image: 'product-kanchipuram-orange',
    tag: 'Bestseller',
    color: 'Orange with magenta and gold',
    fabric: 'Pure Kanchipuram silk',
    description: 'A vivid orange Kanjivaram silk saree with a rich gold zari border and striking magenta accents. A traditional statement piece for weddings, festivals, and family celebrations.',
  },
  {
    id: 2,
    name: 'Mora Mustard Handloom',
    category: 'Cotton Sarees',
    price: 8490,
    originalPrice: 10990,
    image: 'product-handloom-yellow',
    tag: 'New arrival',
    color: 'Mustard yellow with blue border',
    fabric: 'Handloom cotton',
    description: 'An easy, sunlit mustard-yellow handloom saree finished with a bright blue border. Its understated weave makes it a lovely choice for everyday wear and relaxed gatherings.',
  },
  {
    id: 3,
    name: 'Aarohi Blush Floral Saree',
    category: 'Designer Sarees',
    price: 4290,
    originalPrice: 5490,
    image: 'product-designer-blush',
    tag: 'Handloom',
    color: 'Blush pink and silver',
    fabric: 'Embellished net with floral appliqué',
    description: 'A soft blush-and-silver designer saree adorned with dimensional floral appliqué and subtle shimmer. Made for receptions, celebrations, and evenings worth dressing up for.',
  },
  {
    id: 4,
    name: 'Noir Sequin Party Saree',
    category: 'Party Wear Sarees',
    price: 9990,
    originalPrice: 13990,
    image: 'product-party-black',
    tag: 'Limited edit',
    color: 'Black and silver',
    fabric: 'Sequin-embellished fabric',
    description: 'A dramatic black saree scattered with silver shimmer, styled for evenings when you want to make an entrance. A striking choice for parties and celebrations.',
  },
  {
    id: 5,
    name: 'Mehr Bridal Kanjivaram',
    category: 'Bridal Sarees',
    price: 24990,
    originalPrice: 31990,
    image: 'product-kanchipuram-orange',
    tag: 'Bridal favourite',
    color: 'Orange with magenta and gold',
    fabric: 'Pure Kanchipuram silk',
    description: 'A vivid orange Kanjivaram silk saree with a rich gold zari border and striking magenta accents. A traditional statement piece for weddings and once-in-a-lifetime celebrations.',
  },
  {
    id: 6,
    name: 'Tara Evening Tissue',
    category: 'Party Wear Sarees',
    price: 7690,
    originalPrice: 9990,
    image: 'product-party-black',
    tag: 'Just arrived',
    color: 'Black and silver',
    fabric: 'Sequin-embellished fabric',
    description: 'A dramatic black saree scattered with silver shimmer, styled for evenings when you want to make an entrance. A striking choice for parties and celebrations.',
  },
  {
    id: 7,
    name: 'Nila Everyday Cotton',
    category: 'Daily Wear Sarees',
    price: 2890,
    originalPrice: 3690,
    image: 'product-handloom-yellow',
    tag: 'Everyday ease',
    color: 'Mustard yellow with blue border',
    fabric: 'Handloom cotton',
    description: 'An easy, sunlit mustard-yellow handloom saree finished with a bright blue border. Its understated weave makes it a lovely choice for everyday wear.',
  },
  {
    id: 8,
    name: 'Veda Zari Silk',
    category: 'Silk Sarees',
    price: 11490,
    originalPrice: 14990,
    image: 'product-party-black',
    tag: 'Bestseller',
    color: 'Black and silver',
    fabric: 'Sequin-embellished fabric',
    description: 'A dramatic black-and-silver occasion saree with a fluid, shimmering drape. Veda is made for festive evenings and celebrations.',
  },
]

const collections = [
  { name: 'Silk Sarees', sub: 'A little heirloom, every day', image: 'product-kanchipuram-orange' },
  { name: 'Kanchipuram Sarees', sub: 'Woven to be remembered', image: 'product-handloom-yellow' },
  { name: 'Cotton Sarees', sub: 'Light, lovely, and made to live in', image: 'product-designer-blush' },
  { name: 'Designer Sarees', sub: 'Tradition, with a new point of view', image: 'product-party-black' },
  { name: 'Bridal Sarees', sub: 'For your once-in-a-lifetime', image: 'product-kanchipuram-orange' },
  { name: 'Party Wear Sarees', sub: 'A little extra, just for the evening', image: 'product-handloom-yellow' },
  { name: 'Daily Wear Sarees', sub: 'Everyday drapes, made special', image: 'product-designer-blush' },
]

const imageAssets = {
  'product-kanchipuram-orange': 'product-kanchipuram-orange.png',
  'product-handloom-yellow': 'product-handloom-yellow.png',
  'product-designer-blush': 'product-designer-blush.png',
  'product-party-black': 'product-party-black.png',
}
const imageUrl = (id) => `/images/${imageAssets[id]}`
const heroSlides = ['home-temple-banner', 'product-kanchipuram-orange', 'product-handloom-yellow', 'product-designer-blush', 'product-party-black']
const money = (amount) => `₹${amount.toLocaleString('en-IN')}`

function Icon({ name, size = 20 }) {
  const shared = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const shapes = {
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></>,
    bag: <><path d="M5 8h14l1 12H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    heart: <path d="M20.8 8.7c0 4.1-8.8 10-8.8 10s-8.8-5.9-8.8-10a4.8 4.8 0 0 1 8.8-2.6 4.8 4.8 0 0 1 8.8 2.6Z" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    minus: <path d="M5 12h14" />,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  }
  return <svg {...shared}>{shapes[name]}</svg>
}

function App() {
  const [page, setPage] = useState('home')
  const [activeCategory, setActiveCategory] = useState('All Sarees')
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [quantity, setQuantity] = useState(1)
  const [notice, setNotice] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [heroSlide, setHeroSlide] = useState(0)

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = activeCategory === 'All Sarees' || product.category === activeCategory
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase()) || product.category.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  }), [activeCategory, query])
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    if (page !== 'home') return undefined
    const timer = window.setInterval(() => setHeroSlide((current) => (current + 1) % heroSlides.length), 5000)
    return () => window.clearInterval(timer)
  }, [page])

  const navigate = (nextPage) => {
    setPage(nextPage)
    setMenuOpen(false)
    setSearchOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const showNotice = (message) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2600)
  }

  const addToCart = (product, amount = 1) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id)
      return existing
        ? items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + amount } : item)
        : [...items, { ...product, quantity: amount }]
    })
    showNotice(`${product.name} added to your bag`)
  }

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id)
    setWishlist((items) => exists ? items.filter((item) => item.id !== product.id) : [...items, product])
    showNotice(exists ? 'Removed from your wishlist' : 'Saved to your wishlist')
  }

  const viewProduct = (product) => {
    setSelectedProduct(product)
    setQuantity(1)
    navigate('product')
  }

  const chooseCategory = (category) => {
    setActiveCategory(category)
    navigate('shop')
  }

  const navItems = [
    ['Home', 'home'],
    ['Shop', 'shop'],
    ['Collections', 'collections'],
    ['Our Story', 'about'],
    ['Contact', 'contact'],
  ]

  return (
    <div className="site-shell">
      <div className="announcement">A little something for your first order — enjoy 10% off with <strong>WELCOME10</strong></div>
      <header className="site-header">
        <button className="icon-button mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
        <button className="brand-lockup" onClick={() => navigate('home')} aria-label="Universe Boutique home">
          <img className="brand-logo" src="/images/universe-boutique-logo.png" alt="" />
          <span className="brand-name">UNIVERSE <i>BOUTIQUE</i></span>
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, target]) => (
            <button key={target} className={page === target ? 'active' : ''} onClick={() => navigate(target)}>{label}</button>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search products" onClick={() => setSearchOpen(!searchOpen)}><Icon name="search" /></button>
          <button className="icon-button wishlist-header" aria-label={`Wishlist, ${wishlist.length} items`} onClick={() => navigate('wishlist')}><Icon name="heart" />{wishlist.length > 0 && <span className="count-badge">{wishlist.length}</span>}</button>
          <button className="icon-button bag-button" aria-label={`Shopping bag, ${cartCount} items`} onClick={() => navigate('cart')}><Icon name="bag" />{cartCount > 0 && <span className="count-badge">{cartCount}</span>}</button>
        </div>
      </header>
      {searchOpen && (
        <div className="search-panel">
          <Icon name="search" size={18} />
          <input autoFocus aria-label="Search sarees" placeholder="Search sarees, fabrics, collections..." value={query} onChange={(event) => { setQuery(event.target.value); setPage('shop') }} onKeyDown={(event) => event.key === 'Enter' && navigate('shop')} />
          {query && <button className="text-button" onClick={() => setQuery('')}>Clear</button>}
          <button className="icon-button" onClick={() => setSearchOpen(false)} aria-label="Close search"><Icon name="close" size={18} /></button>
        </div>
      )}

      <main>
        {page === 'home' && <HomePage heroSlide={heroSlide} setHeroSlide={setHeroSlide} navigate={navigate} chooseCategory={chooseCategory} viewProduct={viewProduct} addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} setEmail={setEmail} email={email} subscribed={subscribed} setSubscribed={setSubscribed} showNotice={showNotice} />}
        {page === 'shop' && <ShopPage products={filteredProducts} activeCategory={activeCategory} setActiveCategory={setActiveCategory} viewProduct={viewProduct} addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} query={query} setQuery={setQuery} />}
        {page === 'collections' && <CollectionsPage chooseCategory={chooseCategory} />}
        {page === 'product' && <ProductPage product={selectedProduct} quantity={quantity} setQuantity={setQuantity} addToCart={addToCart} buyNow={(product, amount) => { addToCart(product, amount); navigate('cart') }} toggleWishlist={toggleWishlist} wishlist={wishlist} />}
        {page === 'cart' && <CartPage cart={cart} setCart={setCart} navigate={navigate} viewProduct={viewProduct} />}
        {page === 'wishlist' && <WishlistPage wishlist={wishlist} viewProduct={viewProduct} toggleWishlist={toggleWishlist} addToCart={addToCart} navigate={navigate} />}
        {page === 'about' && <AboutPage navigate={navigate} />}
        {page === 'contact' && <ContactPage />}
      </main>

      <Footer navigate={navigate} />
      {notice && <div className="toast"><span className="toast-check"><Icon name="check" size={15} /></span>{notice}</div>}
    </div>
  )
}

function SectionHeading({ eyebrow, title, copy, link, onClick }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>
      {link && <button className="underlined-link" onClick={onClick}>{link}<Icon name="arrow" size={16} /></button>}
    </div>
  )
}

function ProductCard({ product, viewProduct, addToCart, wishlist, toggleWishlist }) {
  const saved = wishlist.some((item) => item.id === product.id)
  const discount = Math.round((1 - product.price / product.originalPrice) * 100)
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <button className="product-image-button" onClick={() => viewProduct(product)} aria-label={`View ${product.name}`}>
          <img src={imageUrl(product.image, 700)} alt={`${product.name} saree`} loading="lazy" />
        </button>
        <span className="product-tag">{product.tag}</span>
        <button className={`wishlist-toggle ${saved ? 'saved' : ''}`} onClick={() => toggleWishlist(product)} aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}><Icon name="heart" size={18} /></button>
        <button className="quick-add" onClick={() => addToCart(product)}>Add to bag <Icon name="arrow" size={15} /></button>
      </div>
      <div className="product-meta">
        <p className="product-category">{product.category}</p>
        <button className="product-name" onClick={() => viewProduct(product)}>{product.name}</button>
        <div className="price-row"><span>{money(product.price)}</span><del>{money(product.originalPrice)}</del><span className="discount">{discount}% off</span></div>
      </div>
    </article>
  )
}

function ProductGrid({ items, ...props }) {
  return <div className="product-grid">{items.map((product) => <ProductCard key={product.id} product={product} {...props} />)}</div>
}

function HomePage({ heroSlide, setHeroSlide, navigate, chooseCategory, viewProduct, addToCart, wishlist, toggleWishlist, setEmail, email, subscribed, setSubscribed, showNotice }) {
  const newArrivals = [products[1], products[5], products[2], products[6]]
  const bestSellers = [products[0], products[7], products[4], products[3]]
  return (
    <>
      <section className="hero">
        <img key={heroSlides[heroSlide]} className="hero-image" src={heroSlide === 0 ? '/images/home-temple-banner.png' : imageUrl(heroSlides[heroSlide])} alt={heroSlide === 0 ? 'Model wearing a traditional saree at a temple' : 'Saree from the Universe Boutique collection'} fetchpriority="high" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-kicker"><span /> THE ART OF THE DRAPE <span /></p>
          <h1>Elegance woven<br />in every <em>thread.</em></h1>
          <p className="hero-copy">Discover timeless saree collections crafted<br className="desktop-break" /> for every special occasion.</p>
          <div className="hero-actions">
            <button className="button button-light" onClick={() => navigate('collections')}>Explore collection <Icon name="arrow" size={16} /></button>
            <button className="button button-outline-light" onClick={() => navigate('shop')}>Shop now</button>
          </div>
          <div className="hero-note"><span className="hero-note-line" /> A world of weaving, waiting to be yours</div>
        </div>
        <div className="hero-pagination" aria-label="Featured saree images">
          {heroSlides.map((slide, index) => <button key={slide} className={`hero-slide-dot ${heroSlide === index ? 'hero-page-active' : ''}`} onClick={() => setHeroSlide(index)} aria-label={`Show featured saree image ${index + 1}`} aria-pressed={heroSlide === index}>{String(index + 1).padStart(2, '0')}</button>)}
        </div>
      </section>

      <section className="promise-strip">
        <div><span className="promise-icon">✳</span><span>Artisan-made, always</span></div>
        <div><span className="promise-icon">✧</span><span>Thoughtful quality</span></div>
        <div><span className="promise-icon">◇</span><span>Made for your moments</span></div>
        <div><span className="promise-icon">↗</span><span>Complimentary shipping over ₹5,000</span></div>
      </section>

      <section className="section collection-section">
        <SectionHeading eyebrow="FIND YOUR DRAPE" title="Made for every you" copy="From everyday rituals to once-in-a-lifetime celebrations, find the saree that feels like yours." link="View all collections" onClick={() => navigate('collections')} />
        <div className="collection-grid">
          {collections.slice(0, 4).map((collection, index) => (
            <button className={`collection-card collection-card-${index + 1}`} key={collection.name} onClick={() => chooseCategory(collection.name)}>
              <img src={imageUrl(collection.image, 850)} alt={collection.name} loading="lazy" />
              <span className="collection-shade" />
              <span className="collection-card-copy"><small>{collection.sub}</small><strong>{collection.name}</strong><span className="collection-explore">Explore <Icon name="arrow" size={15} /></span></span>
            </button>
          ))}
        </div>
        <div className="category-pills">
          {collections.slice(4).map((collection) => <button key={collection.name} onClick={() => chooseCategory(collection.name)}>{collection.name}<Icon name="arrow" size={14} /></button>)}
        </div>
      </section>

      <section className="section product-section arrivals-section">
        <SectionHeading eyebrow="JUST LANDED" title="New arrivals" copy="Fresh from the loom, chosen with you in mind." link="Shop all new arrivals" onClick={() => navigate('shop')} />
        <ProductGrid items={newArrivals} viewProduct={viewProduct} addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} />
      </section>

      <section className="editorial-banner">
        <img src={imageUrl('product-kanchipuram-orange')} alt="Intricate silk saree details in warm, festive hues" loading="lazy" />
        <div className="editorial-shade" />
        <div className="editorial-content">
          <p className="eyebrow eyebrow-light">THE HEIRLOOM EDIT</p>
          <h2>Some things are<br />meant to be <em>passed on.</em></h2>
          <p>Woven with care. Chosen to stay with you.<br />Meet the sarees that become part of your story.</p>
          <button className="button button-light" onClick={() => chooseCategory('Kanchipuram Sarees')}>Discover the collection <Icon name="arrow" size={16} /></button>
        </div>
        <span className="editorial-caption">A little piece of forever</span>
      </section>

      <section className="section product-section bestseller-section">
        <SectionHeading eyebrow="LOVED, AGAIN & AGAIN" title="Our bestsellers" copy="The pieces our community keeps coming back to." link="Shop bestsellers" onClick={() => navigate('shop')} />
        <ProductGrid items={bestSellers} viewProduct={viewProduct} addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} />
      </section>

      <section className="testimonial-section">
        <div className="testimonial-flower">✳</div>
        <p className="eyebrow">KIND WORDS, KEPT CLOSE</p>
        <div className="stars">★★★★★</div>
        <blockquote>“The moment I unfolded it, I knew. The colour, the weave, the way it fell — it felt like it was made just for me.”</blockquote>
        <div className="testimonial-person"><img src={imageUrl('product-party-black')} alt="" /><span><strong>Ananya R.</strong><small>Verified customer · Bengaluru</small></span></div>
        <div className="testimonial-dots"><span className="selected" /><span /><span /></div>
      </section>

      <section className="section instagram-section">
        <SectionHeading eyebrow="A LITTLE INSPIRATION" title="Life in a saree" copy="Beautifully and unapologetically you. Join us @universeboutique" link="Follow along" onClick={() => window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer')} />
        <div className="instagram-grid">
          {['product-kanchipuram-orange', 'product-handloom-yellow', 'product-designer-blush', 'product-party-black', 'product-kanchipuram-orange'].map((image, index) => (
            <button key={`${image}-${index}`} onClick={() => window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer')} aria-label="Open Universe Boutique on Instagram">
              <img src={imageUrl(image, 500)} alt={`Universe Boutique saree inspiration ${index + 1}`} loading="lazy" /><span><Icon name="instagram" size={21} /></span>
            </button>
          ))}
        </div>
      </section>
      <Newsletter email={email} setEmail={setEmail} subscribed={subscribed} setSubscribed={setSubscribed} showNotice={showNotice} />
    </>
  )
}

function ShopPage({ products: shownProducts, activeCategory, setActiveCategory, viewProduct, addToCart, wishlist, toggleWishlist, query, setQuery }) {
  const categories = ['All Sarees', ...collections.map((collection) => collection.name)]
  return (
    <div className="page-wrap shop-page">
      <div className="page-heading"><p className="eyebrow">THE UNIVERSE COLLECTION</p><h1>Find your <em>forever saree.</em></h1><p>Thoughtful weaves for all the moments that make you, you.</p></div>
      <div className="shop-tools"><label className="shop-search"><Icon name="search" size={18} /><input placeholder="Search the collection" value={query} onChange={(event) => setQuery(event.target.value)} /><span>{shownProducts.length} pieces</span></label></div>
      <div className="shop-layout">
        <aside className="shop-sidebar"><p className="filter-heading">SHOP BY CATEGORY</p>{categories.map((category) => <button key={category} className={category === activeCategory ? 'filter-active' : ''} onClick={() => setActiveCategory(category)}>{category}<span>{category === 'All Sarees' ? products.length : products.filter((item) => item.category === category).length}</span></button>)}</aside>
        <div className="shop-results">
          <div className="shop-result-heading"><span>{activeCategory === 'All Sarees' ? 'All sarees' : activeCategory}</span><span>Showing {shownProducts.length} pieces</span></div>
          {shownProducts.length ? <ProductGrid items={shownProducts} viewProduct={viewProduct} addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} /> : <div className="empty-search"><span>✳</span><h2>No sarees found</h2><p>Try another search or choose a different collection.</p><button className="button button-dark" onClick={() => { setQuery(''); setActiveCategory('All Sarees') }}>View all sarees</button></div>}
        </div>
      </div>
    </div>
  )
}

function CollectionsPage({ chooseCategory }) {
  return (
    <div className="page-wrap collections-page">
      <div className="page-heading"><p className="eyebrow">A COLLECTION FOR EVERY CHAPTER</p><h1>Find the one that<br /><em>feels like you.</em></h1><p>Seven little worlds, each with a story woven into every thread.</p></div>
      <div className="all-collections-grid">{collections.map((collection, index) => <button className="all-collection-card" key={collection.name} onClick={() => chooseCategory(collection.name)}><img src={imageUrl(collection.image, 1000)} alt={collection.name} loading={index > 2 ? 'lazy' : 'eager'} /><span className="all-collection-overlay" /><span className="all-collection-info"><small>0{index + 1} — UNIVERSE EDIT</small><strong>{collection.name}</strong><span>{collection.sub}</span><i>Explore edit <Icon name="arrow" size={15} /></i></span></button>)}</div>
    </div>
  )
}

function ProductPage({ product, quantity, setQuantity, addToCart, buyNow, toggleWishlist, wishlist }) {
  const saved = wishlist.some((item) => item.id === product.id)
  const enquiry = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Universe Boutique, I'm interested in the ${product.name}. Could you share more details?`)}`
  return (
    <div className="page-wrap product-detail-page">
      <div className="breadcrumb"><span>Home</span><b>/</b><span>Shop</span><b>/</b><strong>{product.name}</strong></div>
      <div className="product-detail-layout">
        <div className="product-gallery">
          <div className="main-product-image"><img src={imageUrl(product.image, 1300)} alt={`${product.name} saree`} /></div>
          <p className="gallery-caption">A closer look at the details that make it yours.</p>
        </div>
        <div className="product-detail-info">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="detail-rating"><span>★★★★★</span> <small>4.9 · Loved by our community</small></div>
          <div className="detail-price">{money(product.price)} <del>{money(product.originalPrice)}</del><span>{Math.round((1 - product.price / product.originalPrice) * 100)}% off</span></div>
          <p className="inclusive-note">Inclusive of all taxes</p>
          <div className="detail-divider" />
          <p className="detail-description">{product.description}</p>
          <div className="detail-property"><span>COLOUR</span><strong><i className="colour-swatch" />{product.color}</strong></div>
          <div className="detail-property"><span>FABRIC</span><strong>{product.fabric}</strong></div>
          <div className="detail-property"><span>SAREE LENGTH</span><strong>5.5 metres + 0.8 metre blouse piece</strong></div>
          <div className="detail-property"><span>CARE</span><strong>Dry clean recommended</strong></div>
          <div className="detail-divider" />
          <p className="quantity-label">QUANTITY</p>
          <div className="detail-actions"><div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Icon name="minus" size={16} /></button><span>{quantity}</span><button aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Icon name="plus" size={16} /></button></div><button className="button button-dark detail-add" onClick={() => addToCart(product, quantity)}>Add to bag <Icon name="bag" size={17} /></button><button className={`detail-wishlist ${saved ? 'saved' : ''}`} onClick={() => toggleWishlist(product)} aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}><Icon name="heart" size={19} /></button></div>
          <button className="button button-buy" onClick={() => buyNow(product, quantity)}>Buy now <Icon name="arrow" size={16} /></button>
          <a className="whatsapp-link" href={enquiry} target="_blank" rel="noreferrer">Enquire on WhatsApp <span>↗</span></a>
          <div className="delivery-note"><span>✧</span><p><strong>A little extra care, all the way to you.</strong><br />Complimentary shipping on orders above ₹5,000. Ships in 2–4 business days.</p></div>
        </div>
      </div>
    </div>
  )
}

function CartPage({ cart, setCart, navigate, viewProduct }) {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const updateQuantity = (id, amount) => setCart((items) => items.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item))
  return (
    <div className="page-wrap cart-page">
      <div className="page-heading"><p className="eyebrow">YOUR LITTLE COLLECTION</p><h1>Your <em>shopping bag.</em></h1></div>
      {cart.length === 0 ? <div className="empty-state"><span className="empty-symbol">✳</span><h2>Something lovely belongs here.</h2><p>Your bag is waiting for a saree that feels like you.</p><button className="button button-dark" onClick={() => navigate('shop')}>Discover the collection <Icon name="arrow" size={16} /></button></div> : <div className="cart-layout"><div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.id}><button className="cart-item-image" onClick={() => viewProduct(item)}><img src={imageUrl(item.image, 350)} alt={item.name} /></button><div className="cart-item-info"><p className="product-category">{item.category}</p><button className="product-name" onClick={() => viewProduct(item)}>{item.name}</button><span>{money(item.price)}</span><div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => updateQuantity(item.id, -1)}><Icon name="minus" size={14} /></button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => updateQuantity(item.id, 1)}><Icon name="plus" size={14} /></button></div></div><div className="cart-line-total"><strong>{money(item.price * item.quantity)}</strong><button className="remove-item" onClick={() => setCart((items) => items.filter((product) => product.id !== item.id))}>Remove</button></div></div>)}</div><aside className="order-summary"><p className="eyebrow">A QUICK SUMMARY</p><h2>Your order</h2><div><span>Subtotal</span><strong>{money(subtotal)}</strong></div><div><span>Shipping</span><strong>{subtotal >= 5000 ? 'Complimentary' : 'Calculated at checkout'}</strong></div><p className="summary-note">Taxes included. Shipping is complimentary on orders above ₹5,000.</p><button className="button button-dark checkout-button" onClick={() => alert('This demo does not include payment processing. Please contact us to complete your order.')}>Continue to checkout <Icon name="arrow" size={16} /></button><button className="continue-shopping" onClick={() => navigate('shop')}>Continue exploring</button></aside></div>}
    </div>
  )
}

function WishlistPage({ wishlist, viewProduct, toggleWishlist, addToCart, navigate }) {
  return (
    <div className="page-wrap wishlist-page">
      <div className="page-heading"><p className="eyebrow">SAVED WITH LOVE</p><h1>Your <em>wishlist.</em></h1><p>A little corner for the pieces you can't stop thinking about.</p></div>
      {wishlist.length ? <ProductGrid items={wishlist} viewProduct={viewProduct} addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} /> : <div className="empty-state"><span className="empty-symbol">♡</span><h2>Keep the ones you love close.</h2><p>Tap the heart on any saree and it will find a place here.</p><button className="button button-dark" onClick={() => navigate('shop')}>Explore the collection <Icon name="arrow" size={16} /></button></div>}
    </div>
  )
}

function AboutPage({ navigate }) {
  return (
    <div className="about-page">
      <section className="about-hero"><img src={imageUrl('product-designer-blush')} alt="Handcrafted Indian textile in a quiet moment" /><div className="about-hero-shade" /><div><p className="eyebrow eyebrow-light">A NOTE FROM US</p><h1>We believe every<br />thread holds a <em>story.</em></h1></div></section>
      <section className="about-story page-wrap"><div><p className="eyebrow">OUR LITTLE UNIVERSE</p><h2>Rooted in tradition.<br /><em>Made for you.</em></h2></div><div><p>Universe Boutique began with a simple feeling: the way a saree can make you feel completely, wonderfully yourself. Grounded in India's rich textile traditions, we bring together thoughtful weaves and pieces with a little magic in them.</p><p>We work with care, choose with intention, and believe that the things we wear should mean something. Every drape in our collection is an invitation to celebrate your story — in all its everyday and extraordinary moments.</p><button className="underlined-link" onClick={() => navigate('shop')}>Find your saree <Icon name="arrow" size={16} /></button></div></section>
      <section className="about-values"><div><span>01</span><h3>Made with meaning</h3><p>We honour the hands, heritage and artistry behind every weave.</p></div><div><span>02</span><h3>Chosen with care</h3><p>A thoughtful edit, built around quality that feels as good as it looks.</p></div><div><span>03</span><h3>Yours, always</h3><p>Pieces to wear your way, and keep close for years to come.</p></div></section>
      <section className="about-cta"><p className="eyebrow">YOUR STORY, YOUR DRAPE</p><h2>There's a little <em>magic</em><br />in finding the one.</h2><button className="button button-dark" onClick={() => navigate('collections')}>Explore our collections <Icon name="arrow" size={16} /></button></section>
    </div>
  )
}

function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <div className="page-wrap contact-page">
      <div className="contact-intro"><p className="eyebrow">WE'RE RIGHT HERE</p><h1>Let's make it<br /><em>a conversation.</em></h1><p>A question about a weave, a little styling help, or just want to say hello? We'd love to hear from you.</p><div className="contact-detail"><span><Icon name="pin" size={18} /></span><p><strong>Come say hello</strong><br />Chennai, Tamil Nadu, India</p></div><div className="contact-detail"><span>✧</span><p><strong>Write us a note</strong><br />hello@universeboutique.in</p></div><div className="contact-detail"><span>◷</span><p><strong>We're around</strong><br />Monday–Saturday, 10am–6pm IST</p></div></div>
      <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><p className="eyebrow">SEND US A NOTE</p><h2>How can we help?</h2>{sent ? <div className="form-success"><span><Icon name="check" /></span><h3>Your note is on its way.</h3><p>Thank you for reaching out. We'll be in touch soon.</p><button type="button" className="underlined-link" onClick={() => setSent(false)}>Send another note <Icon name="arrow" size={15} /></button></div> : <><label>Your name<input required name="name" placeholder="How should we call you?" /></label><label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label><label>What can we help with?<select defaultValue=""><option value="" disabled>Choose a topic</option><option>Product enquiry</option><option>Order support</option><option>Styling advice</option><option>Something else</option></select></label><label>Your message<textarea required name="message" rows="4" placeholder="Tell us a little more..." /></label><button className="button button-dark" type="submit">Send your note <Icon name="arrow" size={16} /></button><small>We’ll get back to you within one business day.</small></>}</form>
    </div>
  )
}

function Newsletter({ email, setEmail, subscribed, setSubscribed, showNotice }) {
  return (
    <section className="newsletter">
      <div><p className="eyebrow">LETTERS FROM OUR LITTLE WORLD</p><h2>A little beauty<br /><em>in your inbox.</em></h2><p>New arrivals, thoughtful stories, and the occasional something special.</p></div>
      <form className="newsletter-form" onSubmit={(event) => { event.preventDefault(); if (!email.trim()) return; setSubscribed(true); showNotice('You’re on the list — welcome to our world!') }}><label htmlFor="newsletter-email">YOUR EMAIL ADDRESS</label><div><input id="newsletter-email" type="email" required placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} disabled={subscribed} /><button type="submit" disabled={subscribed}>{subscribed ? 'You’re on the list' : 'Join us'} <Icon name="arrow" size={16} /></button></div><small>{subscribed ? 'Thank you for joining our little world.' : 'By subscribing, you agree to receive notes from Universe Boutique.'}</small></form>
      <span className="newsletter-ornament">✳</span>
    </section>
  )
}

function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><button className="brand-lockup footer-lockup" onClick={() => navigate('home')} aria-label="Universe Boutique home"><img className="brand-logo" src="/images/universe-boutique-logo.png" alt="" /><span className="brand-name">UNIVERSE <i>BOUTIQUE</i></span></button><p>A little world of beautiful sarees,<br />thoughtfully chosen for yours.</p><button className="footer-social" onClick={() => window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer')} aria-label="Instagram"><Icon name="instagram" size={19} /></button></div>
        <div className="footer-column"><p>EXPLORE</p><button onClick={() => navigate('shop')}>Shop all</button><button onClick={() => navigate('collections')}>Collections</button><button onClick={() => navigate('about')}>Our story</button><button onClick={() => navigate('contact')}>Get in touch</button></div>
        <div className="footer-column"><p>HERE TO HELP</p><button onClick={() => navigate('contact')}>Shipping & delivery</button><button onClick={() => navigate('contact')}>Returns & exchanges</button><button onClick={() => navigate('contact')}>Care guide</button><button onClick={() => navigate('contact')}>FAQs</button></div>
        <div className="footer-note"><p className="eyebrow">A NOTE FROM OUR WORLD</p><h3>For the days that<br />become <em>stories.</em></h3><button className="underlined-link" onClick={() => navigate('about')}>A little about us <Icon name="arrow" size={15} /></button></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Universe Boutique. Made with care in India.</span><div><button onClick={() => navigate('contact')}>Privacy</button><button onClick={() => navigate('contact')}>Terms</button></div><span>Thoughtfully yours, always.</span></div>
    </footer>
  )
}

export default App
