import { useGlobalContext } from "./Context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useGlobalContext();

  return (
    <section>
      <button
        className="dark-toggle"
        onClick={() => setIsDarkTheme(!isDarkTheme)}>
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
