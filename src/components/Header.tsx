export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', borderBottom: '1px solid #ccc' }}>
      <div>
        <strong>FPT Aptech</strong>
      </div>
      <nav style={{ display: 'flex', gap: '16px' }}>
        <a href="#about">About Us</a>
        <a href="#products">Products</a>
        <a href="#booking">Booking</a>
        <a href="#locations">Locations</a>
      </nav>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}
