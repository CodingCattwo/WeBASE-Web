(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0te/":function(t,a,e){var n=e("pTm/");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e("SZ7m").default)("68081abb",n,!1,{})},bxjF:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{padding:"0"}},[e("el-tabs",{staticClass:"Tx-table-content",attrs:{type:"border-card"},on:{"tab-click":t.handleClick}},[e("el-tab-pane",{attrs:{label:"input"}},[e("div",[e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("Block Height:")]),t._v(" "),e("span",[t._v(t._s(t.transactionData.blockNumber))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("From:")]),t._v(" "),e("span",{staticClass:"input-data-from"},[e("span",[t._v(t._s(t.transactionData.from))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.transactionData&&t.transactionData.user,expression:"transactionData && transactionData.user"}]},[t._v("=>")]),t._v(" "),e("span",{staticClass:"link",on:{click:function(a){return t.link(t.transactionData.user)}}},[t._v(t._s(t.transactionData.user))])])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"部署合约，to字段为空。",placement:"top-start"}},[e("i",{staticClass:"el-icon-info"})]),t._v(" "),e("span",[t._v("To:")])],1),t._v(" "),e("span",[t._v(t._s(t.transactionData.to||"null"))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("Timestamp:")]),t._v(" "),e("span",[t._v(t._s(t.createTime))])]),t._v(" "),e("div",{staticClass:"item",staticStyle:{"font-size":"0"}},[e("span",{staticClass:"label"},[t._v("Input:")]),t._v(" "),e("div",{staticClass:"detail-input-content"},[t.showDecode?e("span",{staticClass:"input-data"},[t._v(t._s(t.transactionData.input))]):t._e(),t.showDecode?e("br"):t._e(),t._v(" "),t.showDecode?t._e():e("div",{staticClass:"input-data"},[e("div",{staticClass:"input-label"},[e("span",{staticClass:"label"},[t._v("function")]),t._v(" "),e("span",[t._v(t._s(t.funcData+"("+t.abiType+")"))])]),t._v(" "),e("div",{staticClass:"input-label"},[e("span",{staticClass:"label"},[t._v("methodId")]),t._v(" "),e("span",[t._v(t._s(t.methodId))])]),t._v(" "),e("div",{staticClass:"input-label"},[e("span",{staticClass:"label"},[t._v("data")]),t._v(" "),t.inputData.length?e("el-table",{staticStyle:{display:"inline-block",width:"400px"},attrs:{data:t.inputData}},[t.inputData[0].name?e("el-table-column",{attrs:{prop:"name",label:"name",align:"left"}}):t._e(),t._v(" "),e("el-table-column",{attrs:{prop:"type",label:"type",align:"left"}}),t._v(" "),e("el-table-column",{attrs:{prop:"data",label:"data",align:"left","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(a){return[e("i",{staticClass:"wbs-icon-baocun font-12 copy-public-key",attrs:{title:"复制"},on:{click:function(e){return t.copyPubilcKey(a.row.data)}}}),t._v(" "),e("span",[t._v(t._s(a.row.data))])]}}],null,!1,3663056394)})],1):t._e()],1)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.inputButtonShow,expression:"inputButtonShow"}],staticClass:"item"},[e("span",{staticClass:"label"}),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.decode}},[t._v(t._s(t.buttonTitle))])],1)])])]),t._v(" "),t.eventLog.length>0?e("el-tab-pane",{attrs:{label:"event"},on:{click:t.decodeEventClick}},t._l(t.eventLog,function(a){return t.eventSHow?e("div",[e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("Address :")]),t._v(" "),e("span",[t._v(t._s(a.address))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("Name :")]),t._v(" "),e("span",[t._v(t._s(a.eventName))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("Topics :")]),t._v(" "),e("div",{staticStyle:{display:"inline-block",width:"800px"}},t._l(a.topics,function(a,n){return e("div",[t._v("["+t._s(n)+"] "+t._s(a))])}),0)]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("Data :")]),t._v(" "),e("div",{staticClass:"detail-input-content"},[a.eventDataShow?t._e():e("span",{staticClass:"input-data"},[t._v(t._s(a.data))]),t._v(" "),e("el-table",{directives:[{name:"show",rawName:"v-show",value:a.eventDataShow,expression:"item.eventDataShow"}],staticClass:"input-data",staticStyle:{display:"inline-block",width:"100%"},attrs:{data:a.eventLgData}},[e("el-table-column",{attrs:{prop:"name",width:"150",label:"name",align:"left"}}),t._v(" "),e("el-table-column",{attrs:{prop:"data",label:"data",align:"left","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(a){return[e("i",{staticClass:"wbs-icon-baocun font-12 copy-public-key",attrs:{title:"复制"},on:{click:function(e){return t.copyPubilcKey(a.row.data)}}}),t._v(" "),e("span",[t._v(t._s(a.row.data))])]}}],null,!0)})],1)],1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:a.eventButtonShow,expression:"item.eventButtonShow"}],staticClass:"item"},[e("span",{staticClass:"label"}),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.decode}},[t._v(t._s(t.eventTitle))])],1)]):t._e()}),0):t._e()],1)],1)};n._withStripped=!0;var s=e("gDS+"),i=e.n(s),o=e("mHBk"),r=e("DgvE"),c=e("p5Bo"),l=e("oYx3"),d={name:"transactionDetail",props:{transHash:{type:String}},data:function(){return{detail:null,transactionData:{},contractList:[],decodeData:{},funcData:"",showDecode:!1,buttonTitle:"还原",eventTitle:"还原",abiType:[],methodId:"",inputData:[],eventLog:[],buttonSHow:!1,eventSHow:!1,transactionTo:null,bin:"",createTime:null,eventDataShow:!0,inputButtonShow:!0,eventButtonShow:!0,userList:[]}},mounted:function(){this.getContacts(this.getHashTransactionInfo),this.getUser()},destroyed:function(){localStorage.setItem("transaction","")},methods:{link:function(t){l.a.push({path:"/rivateKeyManagement",query:{userName:t}})},copyPubilcKey:function(t){var a=this;t?this.$copyText(t).then(function(t){a.$message({type:"success",showClose:!0,message:"复制成功",duration:2e3})}):this.$message({type:"fail",showClose:!0,message:"key为空，不复制。",duration:2e3})},getHashTransactionInfo:function(){var t=this,a={networkId:localStorage.getItem("networkId"),transHash:this.transHash};Object(o.y)(a,{}).then(function(a){0===a.data.code?(t.transactionData=a.data.data,a.data.data?(t.getCreatTime(a.data.data.blockNumber),t.getAdderss()):t.$message({type:"error",message:"无法查询到交易信息"})):t.$message({type:"error",message:c.a.errCode[a.data.code].cn})}).catch(function(a){t.$message({type:"error",message:"系统错误!"})})},getUser:function(){var t=this,a={networkId:localStorage.getItem("networkId"),pageNumber:1,pageSize:1e3};Object(o.x)(a).then(function(a){0===a.data.code?t.userList=a.data.data:t.$message({type:"error",message:c.a.errCode[response.data.code].cn})}).catch(function(a){t.$message({type:"error",message:"系统错误!"})})},getCreatTime:function(t){var a=this,e={networkId:localStorage.getItem("networkId"),blockNumber:t};Object(o.l)(e).then(function(t){0===t.data.code?a.createTime=Object(r.f)(t.data.data.timestamp):a.$message({type:"error",message:c.a.errCode[response.data.code].cn})}).catch(function(t){a.$message({type:"error",message:"系统错误!"})})},handleClick:function(t,a){"event"==t.label&&this.decodeEventClick()},decode:function(){this.showDecode?(this.buttonTitle="还原",this.showDecode=!1):(this.buttonTitle="解码",this.showDecode=!0),this.eventDataShow?(this.buttonTitle="解码",this.eventDataShow=!1):(this.buttonTitle="还原",this.eventDataShow=!0)},getBin:function(t,a,e){var n=this,s={networkId:localStorage.getItem("networkId"),address:t,blockNumber:a};Object(o.n)(s,{}).then(function(t){0===t.data.code?(n.bin=t.data.data.code,e()):n.$message({type:"error",message:c.a.errCode[t.data.code].cn})}).catch(function(t){n.$message({type:"error",message:"系统错误!"})})},getEventBin:function(t,a,e,n,s){var i=this,r={networkId:localStorage.getItem("networkId"),address:t,blockNumber:a};Object(o.n)(r,{}).then(function(t){0===t.data.code?(i.bin=t.data.data.code,e(t.data.data.code,n,s)):i.$message({type:"error",message:c.a.errCode[t.data.code].cn})}).catch(function(t){i.$message({type:"error",message:"系统错误!"})})},getContacts:function(t){var a=this,e={networkId:localStorage.getItem("networkId"),pageSize:1e3,pageNumber:1};Object(o.p)(e).then(function(e){0===e.data.code?(a.contractList=e.data.data||[],t()):a.$message({type:"error",message:c.a.errCode[e.data.code].cn})}).catch(function(t){a.$message({type:"error",message:"系统错误!"})})},decodeAbi:function(t,a){var e=this;this.inputButtonShow=!0;var n=this.transactionData.input;this.transactionTo=this.transactionData.to,this.userList.length&&this.userList.forEach(function(t){t.address==e.transactionData.from&&(e.transactionData.user=t.userName)}),this.transactionTo?this.decodefun(n,this.transactionTo):(this.methodId=n.substring(0,10),this.decodeDeloy(n,this.bin))},getAdderss:function(){var t=this,a={networkId:localStorage.getItem("networkId"),transHash:this.transHash};Object(o.v)(a,{}).then(function(a){0===a.data.code?(t.eventLog=a.data.data.logs,t.transactionData.to?t.getBin(t.transactionData.to,a.data.data.blockNumber,t.decodeAbi):t.getBin(a.data.data.contractAddress,a.data.data.blockNumber,t.decodeAbi)):t.$message({type:"error",message:c.a.errCode[a.data.code].cn})}).catch(function(a){t.$message({type:"error",message:"系统错误！"})})},decodeEventClick:function(){if(this.eventLog.length){this.eventSHow=!0;for(var t=0;t<this.eventLog.length;t++)this.getEventBin(this.eventLog[t].address,this.eventLog[t].blockNumber,this.decodeEvent,this.eventLog[t],t)}else this.eventSHow=!1},decodeEvent:function(t,a,e){var n=this,s=new Web3(Web3.givenProvider),o=a;t.length>2&&"0x"==t.substring(0,2)&&(t=(t=t.substring(2)).substring(0,t.length-68));for(var r=function(a){var e=0;n.contractList.forEach(function(a){a.contractBin&&a.contractBin.substring(0,a.contractBin.length-68)===t?a.contractAbi?o.abi=JSON.parse(a.contractAbi):o.abi=[]:e++}),o.eventDataShow=!0,o.eventButtonShow=!0,e==n.contractList.length&&(o.eventDataShow=!1,o.eventButtonShow=!1)},c=0;c<this.eventLog.length;c++)r();o.abi&&o.abi.length&&o.abi.forEach(function(t){if("event"==t.type){o.eventName=t.name+"(";for(var a=0;a<t.inputs.length;a++)a==t.inputs.length-1?o.eventName=o.eventName+t.inputs[a].type+" "+t.inputs[a].name:o.eventName=o.eventName+t.inputs[a].type+" "+t.inputs[a].name+",";o.eventName=o.eventName+")";var e=s.eth.abi.decodeLog(t.inputs,o.data,o.topics);for(var n in o.outData={},o.eventLgData=[],e)(+n||0==+n)&&(o.outData[n]=e[n]);if(t.inputs.length&&"{}"!=i()(o.outData)){var r=function(a){t.inputs.forEach(function(t,e){e==a&&(o.eventLgData[e]={},o.eventLgData[e].name=t.name,o.eventLgData[e].data=o.outData[a])})};for(var c in o.outData)r(c)}}}),this.$set(this.eventLog,e,o)},decodefun:function(t,a){var e=this,n=new Web3(Web3.givenProvider),s=t.substring(0,10);this.methodId=s;var o="0x"+t.substring(10),r="",c={};this.bin.length>2&&"0x"==this.bin.substring(0,2)&&(this.bin=this.bin.substring(2),this.bin=this.bin.substring(0,this.bin.length-68));var l=0;if(this.contractList.length){for(var d=0;d<this.contractList.length;d++)this.contractList[d].contractBin&&this.contractList[d].contractBin.substring(0,this.contractList[d].contractBin.length-68)==this.bin?(r=this.contractList[d].contractAbi,this.buttonSHow=!0):l++;l==this.contractList.length&&(this.showDecode=!0,this.inputButtonShow=!1)}r&&((c=JSON.parse(r)).forEach(function(t){t.encode=n.eth.abi.encodeFunctionSignature({name:t.name,type:t.type,inputs:t.inputs})}),c.forEach(function(t){if(t.encode===s&&(t.inputs.forEach(function(t,a){t&&t.type&&t.name?e.abiType[a]=t.type+" "+t.name:t&&t.name?e.abiType[a]=t.name:t&&t.type?e.abiType[a]=t.type:t&&(e.abiType[a]=t)}),e.funcData=t.name,t.inputs.length&&(e.decodeData=n.eth.abi.decodeParameters(t.inputs,o),"{}"!=i()(e.decodeData)))){var a=function(a){t.inputs.forEach(function(t,n){t&&t.name&&t.type?a===t.name&&(e.inputData[n]={},e.inputData[n].name=t.name,e.inputData[n].type=t.type,e.inputData[n].data=e.decodeData[a]):t&&n==a&&(e.inputData[n]={},e.inputData[n].type=t,e.inputData[n].data=e.decodeData[a])})};for(var r in e.decodeData)a(r)}}))},decodeDeloy:function(t,a){var e=this,n=new Web3(Web3.givenProvider),s="",o="",r={},c=null;if(a.length>2&&"0x"==a.substring(0,2)&&(a=(a=a.substring(2)).substring(0,a.length-68)),this.contractList.length){for(var l=0;l<this.contractList.length;l++)if(this.contractList[l].contractBin&&this.contractList[l].contractBin.substring(0,this.contractList[l].contractBin.length-68)===a){console.log(this.contractList[l].bytecodeBin,2),c=(c=t.substring(2)).substring(this.contractList[l].bytecodeBin.length),console.log(c,3),s=this.contractList[l].contractAbi,o=this.contractList[l].contractName,this.buttonSHow=!0;break}s||(this.showDecode=!0,this.inputButtonShow=!1)}s?(r=JSON.parse(s)).length>0&&(this.funcData=o,r.forEach(function(t){if(("constructor"===t.type||t.name===o)&&(t.inputs.forEach(function(t,a){t&&t.type&&t.name?e.abiType[a]=t.type+" "+t.name:t&&t.name?e.abiType[a]=t.name:t&&t.type?e.abiType[a]=t.type:t&&(e.abiType[a]=t)}),t.inputs.length)){try{e.decodeData=n.eth.abi.decodeParameters(t.inputs,c)}catch(t){console.log(t)}if("{}"!=i()(e.decodeData)){var a=function(a){t.inputs.forEach(function(t,n){t&&t.name&&t.type?a===t.name&&(e.inputData[n]={},e.inputData[n].name=t.name,e.inputData[n].type=t.type,e.inputData[n].data=e.decodeData[a]):t&&n==a&&(e.inputData[n]={},e.inputData[n].type=t,e.inputData[n].data=e.decodeData[a])})};for(var s in e.decodeData)a(s)}}})):(this.showDecode=!0,this.inputButtonShow=!1)}}},u=(e("ibCv"),e("KHd+")),p=Object(u.a)(d,n,[],!1,null,"72b4796f",null);p.options.__file="src/components/transactionDetail.vue";a.a=p.exports},ibCv:function(t,a,e){"use strict";var n=e("0te/");e.n(n).a},"pTm/":function(t,a,e){(t.exports=e("JPst")(!1)).push([t.i,"\n.label[data-v-72b4796f] {\r\n    display: inline-block;\r\n    width: 120px;\r\n    font-weight: bold;\r\n    vertical-align: top;\r\n    font-size: 12px;\n}\n.item[data-v-72b4796f] {\r\n    padding: 3px 0;\n}\n.input[data-v-72b4796f] {\r\n    display: inline-block;\r\n    font-size: 0;\r\n    vertical-align: top;\n}\n.input span[data-v-72b4796f] {\r\n    font-size: 12px;\n}\n.input-data[data-v-72b4796f] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding: 10px;\r\n    max-height: 200px;\r\n    overflow: auto;\r\n    word-break: break-all;\r\n    word-wrap: break-word;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\n}\n.input-data-from[data-v-72b4796f] {\r\n    display: inline-block;\r\n    width: calc(100% - 200px);\r\n    height: auto;\r\n    word-break: break-all;\r\n    word-wrap: break-word;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\n}\n.input-label[data-v-72b4796f] {\r\n    padding-bottom: 15px;\n}\n.input-label .label[data-v-72b4796f] {\r\n    width: 80px;\r\n    font-size: 12px;\n}\n.detail-input-content[data-v-72b4796f] {\r\n    display: inline-block;\r\n    width: calc(100% - 200px);\r\n    height: auto;\r\n    border: 1px solid #eaedf3;\r\n    border-radius: 4px;\r\n    font-size: 12px;\n}\r\n\r\n",""])}}]);