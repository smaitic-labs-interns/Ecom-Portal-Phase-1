const fs = require('fs')

exports.readJson=(file_path)=>{
    let string = fs.readFileSync(file_path, "utf-8");
    let json = JSON.parse(string);
    return json;
}

exports.writeFile = (file_path, data) => {
    fs.writeFileSync(file_path, JSON.stringify(data))
}

