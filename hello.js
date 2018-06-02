require('./world.js')
require('style-loader!css-loader!./style.css')

function Hello(str){
    alert(str);
}

Hello('hello world!');