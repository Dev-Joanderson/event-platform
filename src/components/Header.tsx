import { List } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
  setShow: Function;
}

export function Header(props: HeaderProps) {
  function handleClick() {
    if (props.setShow instanceof Function)
      props.setShow((show: false) => !show);
  }

  return (
    <header className="w-full py-5 flex items-center justify-between bg-gray-700 border-b border-gray-600">
      <div></div>
      <Logo />
      <div className="px-8 flex items-center">
        <button onClick={handleClick}>
          <List size={32} />
        </button>
      </div>
    </header>
  );
}
