const fs = require('fs');
const os = require('os');
const path = require('path');
class upload{
    constructor(){

    }
    public async uploadFile(ctx:any){
        const files = ctx.request.files.file;
        console.log(ctx.request.files)
        const writer = fs.createWriteStream(path.join("./static", files.name));
        const reader  = fs.createReadStream(files.path);
        // ctx.body = stream;
        const pro = new Promise( (resolve, reject) => {
            const stream = reader.pipe(writer);
            stream.on('finish',()=>{
                resolve(`http://localhost:3000/public/${files.name}`);
            });
        })
        ctx.body = await pro;
    }
}
const Upload = new upload;
export default Upload;