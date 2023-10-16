import { AppProvider } from "./Context";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <main>
      <AppProvider>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </AppProvider>
    </main>
  );
};
export default App;
