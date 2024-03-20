const port = process.env.PORT || 3001;
const http = require('http')
const fs = require('fs');
const server = http.createServer((req, res) => {
    if(req.url === '/') //homepage
    {
        fs.readFile('index.html', (err,data) =>{
            if(!err){
                res.write(data);
                res.end()
            }
        }); 
    }
    else if (req.url === '/HN')
    {
        fs.readFile('HN.html', (err,data) =>{
            if(!err){
                res.write(data);
                res.end()
            }
        }); 
    }
    else if (req.url === '/HCM')
    {
        fs.readFile('HCM.html', (err,data) =>{
            if(!err){
                res.write(data);
                res.end()
            }
        }); 
    }
    else if (req.url === '/CT')
    {
        fs.readFile('CT.html', (err,data) =>{
            if(!err){
                res.write(data);
                res.end()
            }
        }); 
    }
    else if (req.url === '/DN')
    {
        fs.readFile('DN.html', (err,data) =>{
            if(!err){
                res.write(data);
                res.end()
            }
        }); 
    }
    // else if (req.url === '/CT1')
    // {
    //     fs.readFile('CT1.html', (err,data) =>{
    //         if(!err){
    //             res.write(data);
    //             res.end()
    //         }
    //     }); 
    // }
    else{
        res.end("<h1>404- Not found</h1>")
    }
});
server.listen(port);