import React from 'react';

function Navigation() {
  const navItems = [
    { text: "PAGINA INICIAL", isActive: true },
    { text: "SERVIÇOS PRESTADOS", isActive: false },
    { text: "PESQUISA DE SERVIÇOS", isActive: false },
    { text: "PERGUNTAS FREQUENTES", isActive: false },
    { text: "SOBRE NÓS", isActive: false }
  ];

  return (
    <nav className="flex flex-wrap gap-5 self-stretch my-auto text-base font-bold text-black max-md:max-w-full">
      {navItems.map((item, index) => (
        <div key={index} className={item.isActive ? "grow text-emerald-500" : "basis-auto"}>
          {item.text}
        </div>
      ))}
    </nav>
  );
}

export default Navigation;