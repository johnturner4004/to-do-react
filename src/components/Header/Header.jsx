import "./Header.css";

function Header() {
  return (
    <header className="title">
      <div className="glass logo">
        <h1 id="hashtag">#</h1>
        <h1 id="done">done</h1>
      </div>
      <div className="glass next-task"></div>
    </header>
  );
}
export default Header;
