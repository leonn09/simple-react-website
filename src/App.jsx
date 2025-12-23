import { useState, useEffect } from 'react';
import TopNavBar from './components/layout/TopNavBar'
import HomePage from './components/pages/HomePage';
import Footer from './components/layout/Footer';
import ProjectsPage from './components/pages/ProjectsPage';

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

  const theme = "text-black/90 dark:text-white/90 bg-white dark:bg-black";
  const [page, setPage] = useState(0)

  const goToProjects = () => {
    setPage(1)
  }

  const goHome = () => {
    setPage(0)
  }

  return (
    <>
      <header
        className={theme}
      >
        <TopNavBar page={page}/>
      </header>

      <main className={`pt-16 ${theme}`}>
        {
          page === 0 ? <HomePage projectsButton={goToProjects}/> : <ProjectsPage projectsButton={goHome} />
        }
      </main>

      <Footer theme={theme}/>
    </>
  )
}

export default App