const https = require('https');
const http = require('http');
const fs = require('fs');
var path = require('path'); //系统路径模块
var axios = require('axios');
var datavComponent = require('./datav-component');



console.log(datavComponent)
let index = 36
function getData(index) {
  const { name, version } = datavComponent[index]
  if(!name||!version) return 
  axios({
    url: `http://resource.datav.aliyun.com/cube/com/${name}/${version}?m=1`,
    method: 'get',
  }).then((data)=>{
    writeData(datavComponent[index],data.data)
  })
}
 getData(0)


/**
 * 
 * @param {要写入的数据} data 
 * @param {文件名} fileName 
 */
async  function writeData(com, data) {
  const { name, version } = com
  var filePath = path.join(__dirname, `./${name}`);
  // 创建临时目录
  try {
    await fs.promises.stat(filePath)
  } catch (e) {
    // 不存在文件夹，直接创建 {recursive: true} 这个配置项是配置自动创建多个文件夹
    await fs.promises.mkdir(filePath, { recursive: true })
  }
  filePath = path.join(__dirname, `./${name}/${version}`);
  // 创建临时目录
  try {
    await fs.promises.stat(filePath)
  } catch (e) {
    // 不存在文件夹，直接创建 {recursive: true} 这个配置项是配置自动创建多个文件夹
    await fs.promises.mkdir(filePath, { recursive: true })
  }
  filePath = path.join(__dirname, `./${name}/${version}/index.js`);
  fs.writeFile(filePath, data, function (err) {
    if (err) {
      return console.log(err);
    }
    getData(index++)
    console.log(index,`./${name}/${version}/index.js`);
  });

}
