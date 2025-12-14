import { useEffect } from 'react';
import TopNavBar from './components/layout/TopNavBar'
import HomePage from './components/pages/HomePage';
import Footer from './components/layout/Footer';

function App() {

  useEffect(() => {
    // Restore theme preference
    const storedTheme = localStorage.getItem("theme");

    // Match OS theme
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <header
        className="text-black dark:text-white bg-white dark:bg-black"
      >
        <TopNavBar />
      </header>

      <main className="pt-16 text-black dark:text-white bg-white dark:bg-black">
        <HomePage />
      </main>

      <footer
        className="text-black dark:text-white bg-white dark:bg-black"  
      >
        <Footer />
      </footer>
    </>
  )
}

export default App