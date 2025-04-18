"use client"

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState<any>(null);

  interface SignInResult {
    error?: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    }) as SignInResult | undefined;

    if (result?.error) {
      alert("ログインに失敗しました");
    } else {
      alert("ログインに成功しました");
      // ユーザーデータを取得して表示
      fetchUserData();
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/auth/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("ユーザーデータの取得に失敗しました", error);
    }
  };

  return (
    <main>
      <h1>Login Test Page</h1>
      <p>これはログインテストページです。</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {userData && (
        <div>
          <h2>ユーザーデータ</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}