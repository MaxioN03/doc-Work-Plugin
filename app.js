var pdf2png = require('pdf2png-mp');
var fs = require('fs');

var files = [];
var folder = "D:\\Kutz\\Сбор данных\\resource\\docs\\"
var startFolder = folder;
var png = "png/"


/*fs.readdirSync(folder).forEach(file => {
  //console.log(file);
});*/

module.exports.checkSpaces = function(string){

  var patternStartSpace = /^\s+/;
  var patternEndSpace = /\s+$/;
  var patternMultiSpace = /\s{2,}/g;

  if(string.length==0 || /^\s+$/.test(string)){
    return false;
  }

  if(patternMultiSpace.test(string) || patternEndSpace.test(string) || patternStartSpace.test(string)){
    return true;
  }

  return false;
};

module.exports.clearSpaces = function(string){

  var patternStartSpace = /^\s+/;
  var patternEndSpace = /\s+$/;
  var patternMultiSpace = /\s{2,}/g;

  if(string.length==0 || /^\s+$/.test(string)){
    return "";
  }

  if(patternMultiSpace.test(string) || patternEndSpace.test(string) || patternStartSpace.test(string)){
    string = string.replace(patternStartSpace, "");
    string = string.replace(patternEndSpace, "");
    string = string.replace(patternMultiSpace, " ");
  }

  return string;
};


function checkDirectory(directory) {
    fs.stat(directory, function(err, stats) {
        //Check if error defined and the error code is "not exists"
        if (err && err.errno === 34) {
            //Create the directory, call the callback.
            fs.mkdir(directory);
        } else {

        }
    });
}

var readDir = function (folder){
  var i =0;

  fs.readdirSync(folder).forEach(file => {
    if(!fs.lstatSync(folder + file).isDirectory()){

    }
    else{
      i++;
      console.log("FOLDER: " + file)
      readDir(folder+file+'/');
    }
    })
  return i;
};

module.exports.readDirectory = readDir;





/*function readDirAndRename(folder){
        fs.readdirSync(folder).forEach(file => {
            if(!fs.lstatSync(folder + file).isDirectory()){
                renameFile(folder,file);
        }
        else{
                readDirAndRename(folder+file+'/');
    }
    })
}

function renameFile(filePath, fileName){
  if(fileName.includes('г.')){
    fs.rename(filePath + fileName, filePath + fileName.split('г.')[0]+"г. "+fileName.split('г.')[1], function () {
    })
  }
  if(fileName.includes('гп')){
    fs.rename(filePath + fileName, filePath + fileName.split('гп')[0]+"гп "+fileName.split('гп')[1], function () {
    })
  }
  if(fileName.includes('рп')){
    fs.rename(filePath + fileName, filePath + fileName.split('рп')[0]+"рп "+fileName.split('рп')[1], function () {
    })
  }


}

function readDirAndConvertToPNG(folder){


    fs.readdirSync(folder).forEach(file => {
        if(!fs.lstatSync(folder + file).isDirectory()){
            convertToPNG(folder,file);
        }
        else{
            readDirAndConvertToPNG(folder+file+'/');
        }
    })
}


function convertToPNG(folder, file) {
    checkDirectory(startFolder+png);


    console.log(folder+file);
    pdf2png.convert(folder + file, {quality: 500}, function (resp) {
        if (!resp.success) {
            console.log("Error:" + resp.error);
            return;
        }

        console.log("Файл " + file + " сконвертирован");

        resp.data.forEach(function (item, index) {
            if (index> 0) {
                folderPNG = folder+png;

                fs.writeFile(folder + file.slice(0, file.length - 4) + ".png", item, function (err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("Файл " + file + " сохранён!");
                    }
                });
            }
        });
    });
}*/
