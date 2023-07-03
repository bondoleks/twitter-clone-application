import { Avatar, Box } from "@mui/material"

export function ReplyItem({reply}){
    console.log(reply);
    const { id, createdDate,username, firstName, lastName, tweetBody, av_imagerUrl, tweet_imageUrl, user_id, countReply, countRetweet, countLike, view = 154, parentDto,markerLike,markerRetweet,markerBookmark} = reply;

    return(
        <Box>
            <Box>
                <Avatar></Avatar>
            </Box>
        <Box>
            <Box>Name</Box>
            <Box>Body</Box>
            <Box>Function</Box>
        </Box>
        </Box>
    )
}