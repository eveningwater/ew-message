const fs = require('fs');
const path = require('path');

const sourceDir = './examples/demo/';
const targetDir = './gh-pages'; 

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.readdir(sourceDir, (err, files) => {
    if (err) {
        return console.error(`无法读取目录: ${err}`);
    }

    files.forEach(file => {
        const filePath = path.join(sourceDir, file);

        if (path.extname(file) === '.html') {
            const targetPath = path.join(targetDir, file);
            // rename是移动
            fs.copyFile(filePath, targetPath, (err) => {
                if (err) {
                    return console.error(`无法移动文件 ${file}: ${err}`);
                }
                console.log(`成功移动文件: ${file} 到 ${targetDir}`);
            });
        }
    });
});
