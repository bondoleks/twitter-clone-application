// import {Box, Typography} from "@mui/material";
//
//
// const ChatMessage = () => {
//   const date = new Date()
//   return (
//     <Box sx={{
//       height: "100%",
//       maxWidth: "300px"
//     }}>
//       <Typography>
//         Messages
//       </Typography>
//       {
//         <Typography>
//           date
//         </Typography>
//       }
//     </Box>
//   )
// }
//
// export default ChatMessage

// import React from "react";
// import { Box, Typography } from "@mui/material";
//
// const ChatMessage = () => {
//   const date = new Date();
//
//   return (
//     <Box sx={{
//       height: "50px",
//       maxWidth: "80%",
//       display: "flex",
//       padding: "5px 10px"
//
//
//     }}>
//       <Box sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "5px"
//
//
//       }}>
//       <Typography sx={{
//         padding: "10px",
//         backgroundColor: "rgb(29, 155, 240)",
//         color: "white",
//         borderRadius: "15px 15px 15px 0",
//
//       }}>
//         Messages
//       </Typography>
//       <Typography>
//         {date.toLocaleString()}
//       </Typography>
//       </Box>
//     </Box>
//   );
// }
//
// export default ChatMessage;

// import React from "react";
// import { Box, Typography } from "@mui/material";
//
// const ChatMessage = () => {
//   const date = new Date();
//
//   return (
//     <Box
//       sx={{
//         height: "fit-content",
//         maxWidth: "70%",
//         display: "flex",
//         flexDirection: "column",
//         padding: "5px 10px",
//         marginBottom: "5px",
//       }}
//     >
//       <Typography
//         sx={{
//           padding: "10px",
//           backgroundColor: "rgb(29, 155, 240)",
//           color: "white",
//           borderRadius: "15px 15px 15px 0",
//         }}
//       >
//         Messages
//       </Typography>
//       <Typography
//         sx={{
//           marginTop: "5px",
//         }}
//       >
//         {date.toLocaleString()}
//       </Typography>
//     </Box>
//   );
// };
//
// export default ChatMessage;

// import React from "react";
// import { Box, Typography } from "@mui/material";
//
// const ChatMessage = ({ id }) => {
//   const date = new Date();
//   const isSentByCurrentUser = id === 2;
//
//   return (
//     <Box
//       sx={{
//         maxWidth: "80%",
//         display: "flex",
//         flexDirection: "column",
//         padding: "5px 10px",
//         marginBottom: "10px",
//         alignSelf: isSentByCurrentUser ? "flex-end" : "flex-start", // Align message to right or left based on ID
//       }}
//     >
//       <Typography
//         sx={{
//           padding: "10px",
//           backgroundColor: "rgb(29, 155, 240)",
//           color: "white",
//           borderRadius: isSentByCurrentUser
//             ? "15px 15px 0 15px" // Right-aligned message
//             : "15px 15px 15px 0", // Left-aligned message
//         }}
//       >
//         Messages
//       </Typography>
//       <Typography
//         sx={{
//           marginTop: "5px",
//           textAlign: isSentByCurrentUser ? "right" : "left", // Align date to right or left based on ID
//         }}
//       >
//         {date.toLocaleString()}
//       </Typography>
//     </Box>
//   );
// };
//
// export default ChatMessage;

import React from "react";
import {Box, Button, Typography} from "@mui/material";

const ChatMessage = ({ id }) => {
  const date = new Date();
  const isSentByCurrentUser = id === 2;

  return (
    <Box
      sx={{
        height: "fit-content",
        maxWidth: "80%",
        display: "flex",
        flexDirection: "column",
        padding: "5px 10px",
        marginBottom: "10px",
        alignSelf: isSentByCurrentUser ? "flex-end" : "flex-start",
      }}
    >
      <Typography
        sx={{
          padding: "10px",
          backgroundColor: isSentByCurrentUser ? "rgb(29, 155, 240)" : "lightgray",
          color: isSentByCurrentUser ? "white" : "black",
          borderRadius: isSentByCurrentUser ? "15px 15px 15px 0" : "15px 15px 0 15px",
        }}
      >
        Messages
      </Typography>
      <Typography
        sx={{
          marginTop: "5px",
          textAlign: isSentByCurrentUser ? "right" : "left",
        }}
      >
        {date.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default ChatMessage;


