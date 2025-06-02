import Header from "../header/header.jsx";
function Banner () {
    return ( 
    <>
        <h1 style={{
            position: "fixed",
            top: "0",
            marginTop: "10px",
            margin: "0 auto",
            width: "100%",
            backgroundColor: "#333",
            color: "white",
            padding: "15px",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
        }}>
            Hoja de vida Jaime Alberto Durango Arango
        </h1>
        <Header />
        <div style={{
            marginTop: "100px",
            textAlign: "center",
            padding: "20px"
        }}>
        </div>
    </> 
    );
}

export default Banner ;