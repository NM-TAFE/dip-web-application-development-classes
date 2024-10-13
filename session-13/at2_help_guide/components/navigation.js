const navigation = document.getElementById("nav-bar");

function Navigation() {
  return (
    <div class="navbar-brand">
      <a class="navbar-item" href="./">
        Home
      </a>
    </div>
  );
}

const root = ReactDOM.createRoot(navigation);
root.render(<Navigation />);
