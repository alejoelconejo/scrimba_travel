import Logo from "./Logo";
import "../index.css";

export default function Header() {
  return (
    <header className="header">
      <Logo fill="white" className="header-logo" alt="logo" />
      <h1 className="header-title">my travel journal.</h1>
    </header>
  );
}
