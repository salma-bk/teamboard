import { members } from "./data/members";
import MemberList from "./components/MemberList";
import "./App.css";

export default function App() {
  const count = members.length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>TeamBoard</h1>
        <p>
          {count} {count > 1 ? "membres" : "membre"}
        </p>
      </header>

      <main>
        <MemberList members={members} />
      </main>
    </div>
  );
}
