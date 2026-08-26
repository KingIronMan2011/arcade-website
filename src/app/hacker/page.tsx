"use client";

import { useEffect, useState } from "react";

export default function HackerPage() {
  const [keys, setKeys] = useState(0);
  useEffect(() => { const handler = (event: KeyboardEvent) => { event.preventDefault(); setKeys((value) => value + 1); }; window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler); }, []);
  const progress = Math.min(100, keys);
  return <main className="hacker-page"><header>H4CK3R TERMINAL <span>TARGET: BLACKBOX · STATUS: {progress === 100 ? "PWNED" : "SCANNING"}</span></header><section className="terminal"><p>Initializing H4CK3R TERMINAL...</p><p>Target acquired. Begin typing to start the attack.</p>{Array.from({ length: Math.min(20, keys) }, (_, index) => <p key={index}>[SCAN] {String(index).padStart(3, "0")} — exploit payload accepted</p>)}<p>root@blackbox:~$ <i /></p></section><aside><h2>INTRUSION PROGRESS</h2><div><span style={{ width: `${progress}%` }} /></div><p>KEYSTROKES: {keys}</p></aside></main>;
}
