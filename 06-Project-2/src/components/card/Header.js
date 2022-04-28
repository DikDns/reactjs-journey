import { click } from "@testing-library/user-event/dist/click";
import profile from "../../img/profile-eni.png";
let clicked = false;

function handleClick(e) {
  e.preventDefault();
  clicked = clicked ? false : true;
  const cardMain = document.querySelector(".card-main");

  if (clicked) {
    cardMain.style.top = 0;
    e.target.style.filter = "brightness(1)";
    setTimeout(() => {
      e.target.style.filter = "";
    }, 200);
  } else {
    cardMain.style = "";
    e.target.style.filter = "brightness(1)";
    setTimeout(() => {
      e.target.style.filter = "";
    }, 200);
  }
}

setTimeout(() => {
  if (!clicked) {
    clicked = true;
    const cardMain = document.querySelector(".card-main");
    cardMain.style.top = 0;
    setTimeout(() => {
      document.location.href = "#title";
    }, 250);
  }
}, 2000);

function Header() {
  return (
    <header className="card-thumb">
      <img src={profile} alt="profile eni" onClick={handleClick} />
    </header>
  );
}

export default Header;
