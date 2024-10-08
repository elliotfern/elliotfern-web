const loadingScreenStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Fondo semitransparente
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 9999, // Asegura que esté por encima de otros elementos
  };

function LoadingScreen() {
    return (
        <div style={loadingScreenStyles}>
            <h2>Cargando...</h2>
            {/* Puedes agregar un spinner o animación de carga aquí */}
        </div>
    );
}

export default LoadingScreen;