// ============== APP ROOT ==============
function App() {
  const [page, setPage] = React.useState('home');
  const prev = React.useRef(page);
  React.useEffect(() => {
    if (prev.current !== page) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      prev.current = page;
    }
  }, [page]);

  // hash routing
  React.useEffect(() => {
    const h = window.location.hash.replace('#','');
    if (h && ['home','mentorship','learn','read','community','newsletter','partnerships','contact'].includes(h)) {
      setPage(h);
    }
    const onHash = () => {
      const h = window.location.hash.replace('#','');
      if (h) setPage(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  React.useEffect(() => {
    if (page !== 'home') window.history.replaceState(null, '', `#${page}`);
    else window.history.replaceState(null, '', '#home');
  }, [page]);

  const pages = {
    home: <HomePage setPage={setPage} />,
    mentorship: <MentorshipPage setPage={setPage} />,
    learn: <LearnPage setPage={setPage} />,
    read: <ReadPage />,
    community: <CommunityPage />,
    newsletter: <NewsletterPage />,
    partnerships: <PartnershipsPage setPage={setPage} />,
    contact: <ContactPage />,
  };

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <main className="page-wrap" key={page}>
        {pages[page]}
      </main>
      <Footer setPage={setPage} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
