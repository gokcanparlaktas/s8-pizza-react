import React from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="flex-col">
      <div className=" flex-col text-center">
        <h1>Teknolojik Yemekler</h1>
      </div>
      <div>
        <a className="header-link" href="#">
          Ana Sayfa
        </a>{" "}
        <a className="header-link semi-bold" href="/siparisFormu.jsx">
          -> Sipariş Formu
        </a>
      </div>
    </div>
  );
}
