const App = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/linkedin';
  };
  return (
    <>
      <button onClick={handleLogin}>Linked in</button>
    </>
  );
};

export default App;
