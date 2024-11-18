'use client';

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context";


export default function Perfil() {
  const { user, logout, error } = useContext(AuthContext)

  return (
    <section className="p-8 md:w-3/5 mx-auto">
      <section className="p-6 bg-white rounded-lg shadow">
        <header className="text-xl md:text-2xl font-bold mb-4 text-center">Perfil</header>
        <form className="flex flex-col">
          <label>Nome Completo</label>
          <input type="text" placeholder={user?.userName} className="p-2 border rounded mb-2" value={user?.userName} readOnly />
          <label>Cep</label>
          <input type="text" placeholder={user?.cep} className="p-2 border rounded mb-2" value={user?.cep} readOnly />
          <label>CPF</label>
          <input type="tel" placeholder={user?.cpf} className="p-2 border rounded mb-2" value={user?.cpf} readOnly />
          <label>Email</label>
          <input type="email" placeholder={user?.email} className="p-2 border rounded mb-2" value={user?.email} readOnly />
          <Link href="/">
            <button type="button" className="bg-black text-white p-2 rounded w-full" onClick={logout}>
              Sair
            </button>
          </Link>
        </form>
      </section>
    </section>
  );
}
