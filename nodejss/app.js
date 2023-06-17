const http=require('http');
const requestListener=(req,res)=>{
    console.log("request is incoming");

    const responseData={
        message:"Hello,GFG Learner",
        articleData:{
            articleName: "How to send JSON response from NodeJS",
        category:"NodeJS",
        status: "published"
        },
        endingMessage:"Visit GFG"
    }
    const jsonContent=JSON.stringify(responseData);
    res.end(jsonContent);
};
const server=http.createServer(requestListener);

server.listen(3000,'localhost',function(){
    console.log("Server is listening");
})