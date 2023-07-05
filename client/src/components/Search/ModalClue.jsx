// import React from "react";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
//
// const ModalClue = () => {
//   return (
//     <>
//       <Paper
//         elevation={2}
//         sx={{
//           backgroundColor: "#fff",
//           p: 2,
//           borderRadius: "5px",
//           marginRight: "50px",
//           maxHeight: "100px",
//           maxWidth: "300px",
//           minWidth: "250px",
//
//         }}
//       >
//         <Typography sx={{ color: "e9e9e9" }}>
//           Try searching for people, topics, keywords
//         </Typography>
//       </Paper>
//     </>
//   );
// };
//
// export default ModalClue;


import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

const ModalClue = () => {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <>
      <Paper
        elevation={2}
        sx={{
          p: 2,
          borderRadius: "5px",
          minWidth: "250px",
          height: isMobile ? "calc(100vh - 120px)" : "100px",
          width: isMobile ? "100vw" : "250px",
          position: isMobile ? "fixed" : "static",
          top: isMobile ? "70px" : "auto",
          left: isMobile ? "0" : "auto",
          zIndex: isMobile ? "9990" : "auto",
          padding: isMobile ? "10px" : "10px",
        }}
      >
        <Typography sx={{ color: "e9e9e9", textAlign: isMobile ? "center" : "left" }}>
          Try searching for people, topics, keywords
        </Typography>
      </Paper>
    </>
  );
};

export default ModalClue;


// import React, { useRef, useEffect, useState } from "react";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import { useMediaQuery } from "@mui/material";
//
// const ModalClue = () => {
//   const isMobile = useMediaQuery('(max-width:900px)');
//   const searchRef = useRef(null);
//   const [headerVisible, setHeaderVisible] = useState(true);
//
//   useEffect(() => {
//     const calculateWidth = () => {
//       if (searchRef.current) {
//         const searchWidth = searchRef.current.offsetWidth;
//         setHeaderVisible(searchWidth > 0);
//       }
//     };
//
//     calculateWidth();
//     window.addEventListener("resize", calculateWidth);
//
//     return () => {
//       window.removeEventListener("resize", calculateWidth);
//     };
//   }, []);
//
//   return (
//     <>
//       {headerVisible && (
//         <Paper elevation={2} sx={{ backgroundColor: "#fff", p: 2 }}>
//           {/* Header content */}
//         </Paper>
//       )}
//
//       <Paper elevation={2} sx={{ backgroundColor: "#fff", p: 2 }}>
//         <Typography sx={{ color: "e9e9e9" }}>
//           Try searching for people, topics, keywords
//         </Typography>
//       </Paper>
//
//       <Typography>BBBBBBBB</Typography>
//     </>
//   );
// };
//
// export default ModalClue;







