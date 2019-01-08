
var crypto = require('crypto')
/*
 * @Author: Wing
 * @Date:   2018-11-06 10:25:45
 * @Last Modified by:   Wing
 * @Last Modified time: 2018-12-03 13:30:22
 * @E-mail: 1020763068@qq.com
 */

// const mappings = [
// 	{ id: '111', phone: '111111' },
// 	{ id: '222', phone: '222222' },
// 	{ id: '333', phone: '333333' },
// ];
// const slow = id => {
// 	console.log("i am slow");
//   return mappings.find( v => v.id === id );
// };

// const memoize = function ( func , hasher ){
//   const cache = {}
// 	return v => {
//     if (!cache[v]) {
//       console.log('新值')
//       cache[v] = func(v)
//     } else {
//       console.log('来自缓存')
//     }
//   }
// };

// (function test() {
// 	let quick = memoize( slow );
// 	quick('111');
// 	quick('111');
// })();

// function submit (data) {
//   console.log(data)
// }

// function debounce (func, wait, imd) {
//   var timer
//   return 
// }

// (function test() {
//   let debounceSubmit = debounce(submit,100,true)
//   debounceSubmit(1)
//   setTimeout(() => {debounceSubmit(2,90)})
//   setTimeout(() => {debounceSubmit(3,200)})
// })()
// var z = {a:"你好",b:123}
// var a = JSON.stringify(z)

// var b = Buffer.from(a)
// var c = b.toString('base64')
// var d = Buffer.from(c,'base64')
// var e = d.toString()
// var f = JSON.parse(e)
// console.log(f)


// function createhash(string){
//   var hash = crypto.createHash('md5')
//   hash.update(string, 'utf-8')
//   return hash.digest('hex')
// }
// var result = []
// console.time('start')
// for (let i = 0 ;i < 100; i++) {
//   let string = i + '5asd8asd4a65dasd8a4sd4a65sd9a8s4d5asd8asd4a65dasd8a4sd4a65sd9a8s4d5asd8asd4a65dasd8a4sd4a65sd9a8s4d5asd8asd4a65dasd8a4sd4a65sd9a8s4d5asd8asd4a65dasd8a4sd4a65sd9a8s4d5asd8asd4a65dasd8a4sd4a65sd9a8s4d'
//   result.push(createhash(string))
// }
// console.timeEnd('start')




// const Events = require('events');
// const emitter = new Events();

// let taskList = []

// function pushTask(task){
//   taskList.push(task)
//   emitter.emit('msg')
// }

// let isRun = false
// function consumser() {
//   if (isRun) return
//   isRun = true
//   var obj = taskList.shift()
//   dosomethig(obj)
//   consumser()
// }

// emitter.on('msg', () => {
//   consumser()
// })

// function dosomethig(obj){
//   setTimeout(() => {
//     console.log(obj)
//     isRun=false;
//     if (taskList.length==0) {return;}
//     consumser();
//   },1000)
// }

// (() => {
//   pushTask([1,2,3,4,5])
//   pushTask([1,7,2])
//   pushTask([1])
//   pushTask([88])
// })()
const initTableSqlList = [
  "CREATE TABLE `calendar` (\
      `datelist` date DEFAULT NULL\
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;",
  "CREATE TABLE `list_admin` (\
      `id` int(16) NOT NULL AUTO_INCREMENT,\
      `realname` varchar(64) NOT NULL,\
      `username` varchar(32) NOT NULL,\
      `password` varchar(64) NOT NULL DEFAULT 'B47BC10EA865C4113E87787D4E7AEAC5',\
      `operatorid` int(16) NOT NULL DEFAULT '1',\
      `positionid` int(16) NOT NULL DEFAULT '1',\
      `isnew` int(4) NOT NULL DEFAULT '1',\
      `active` int(4) NOT NULL DEFAULT '1',\
      `display` int(4) NOT NULL DEFAULT '1',\
      `channelname` varchar(32) NOT NULL DEFAULT '0',\
      `updateTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `username` (`username`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;",

  "CREATE TABLE `list_channel` (\
  `id` int(32) unsigned NOT NULL AUTO_INCREMENT,\
  `channel` varchar(32) NOT NULL,\
  `channelName` varchar(32) NOT NULL,\
  PRIMARY KEY (`id`),\
  KEY `channel` (`channel`)\
  ) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;", 

  "CREATE TABLE `list_giftcard` (\
      `id` int(32) unsigned NOT NULL AUTO_INCREMENT,\
      `mainType` int(10) NOT NULL,\
      `subType` int(10) NOT NULL,\
      `cardName` varchar(32) NOT NULL,\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `cardSubtype` (`subType`,`mainType`) USING BTREE\
    ) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;",
    
  "CREATE TABLE `list_item` (\
      `id` int(32) unsigned NOT NULL AUTO_INCREMENT,\
      `typeID` int(32) unsigned NOT NULL,\
      `itemNameZH` varchar(64) NOT NULL,\
      `itemNameTW` varchar(64) DEFAULT NULL,\
      `itemNameEN` varchar(64) DEFAULT NULL,\
      `itemNameKR` varchar(64) DEFAULT NULL,\
      `itemNameVN` varchar(64) DEFAULT NULL,\
      `value` int(32) DEFAULT '0',\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `typeID` (`typeID`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;",

  "CREATE TABLE `list_loginserver` (\
      `id` int(16) NOT NULL AUTO_INCREMENT,\
      `name` varchar(32) NOT NULL,\
      `ip` varchar(32) NOT NULL,\
      `port` int(16) NOT NULL,\
      `enable` tinyint(2) NOT NULL DEFAULT '1',\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `loginserver` (`name`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;",

  "CREATE TABLE `list_mail` (\
      `id` int(16) unsigned NOT NULL AUTO_INCREMENT,\
      `serverlist` text NOT NULL,\
      `mailtype` tinyint(2) unsigned DEFAULT NULL,\
      `mailtitle` varchar(128) CHARACTER SET utf8 NOT NULL,\
      `mailcontent` text CHARACTER SET utf8 NOT NULL,\
      `rolename` varchar(128) CHARACTER SET utf8 NOT NULL,\
      `isall` tinyint(1) DEFAULT NULL,\
      `minlevel` int(8) DEFAULT NULL,\
      `maxlevel` int(8) DEFAULT NULL,\
      `itemlist` text CHARACTER SET utf8,\
      `isaudit` tinyint(1) NOT NULL DEFAULT '0',\
      `mailsender` varchar(16) CHARACTER SET utf8 NOT NULL,\
      `issend` tinyint(1) NOT NULL DEFAULT '0',\
      `auditor` varchar(128) CHARACTER SET utf8 DEFAULT NULL,\
      `createtime` timestamp NULL DEFAULT NULL,\
      `sendtime` timestamp NULL DEFAULT NULL,\
      `byviplevel` tinyint(2) unsigned NOT NULL DEFAULT '0',\
      PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=latin1;",

  "CREATE TABLE `list_mailtype` (\
      `id` int(16) NOT NULL AUTO_INCREMENT,\
      `sendtype` varchar(32) NOT NULL,\
      PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;",

  "CREATE TABLE `list_maxlogid` (\
      `id` bigint(64) unsigned NOT NULL AUTO_INCREMENT,\
      `serverid` int(16) NOT NULL,\
      `datatype` varchar(64) NOT NULL,\
      `maxlogid` int(64) DEFAULT NULL,\
      `maxtimestamp` timestamp NULL DEFAULT NULL,\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `serverid` (`serverid`,`datatype`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=7975880 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;",

  "CREATE TABLE `list_operator` (\
      `id` int(16) unsigned NOT NULL AUTO_INCREMENT,\
      `operator` varchar(32) NOT NULL,\
      `introduction` varchar(32) DEFAULT '这是你的介绍',\
      `routers` blob,\
      `serverList` text CHARACTER SET utf8,\
      `channelList` text CHARACTER SET utf8,\
      `subchannelList` text CHARACTER SET utf8,\
      `broadcastList` text CHARACTER SET utf8,\
      `mailList` text CHARACTER SET utf8,\
      `mailAuditList` text CHARACTER SET utf8,\
      `rechargeList` text CHARACTER SET utf8,\
      `rechargeAuditList` text CHARACTER SET utf8,\
      `giftcardList` text CHARACTER SET utf8,\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `operator` (`operator`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;",

  "CREATE TABLE `list_sendgoods` (\
      `id` int(16) NOT NULL AUTO_INCREMENT,\
      `serverid` int(10) NOT NULL,\
      `rolename` varchar(16) CHARACTER SET utf8mb4 NOT NULL,\
      `diamondcount` int(16) NOT NULL,\
      `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\
      `isaudit` tinyint(1) NOT NULL DEFAULT '0',\
      `itemsender` varchar(16) CHARACTER SET utf8mb4 NOT NULL,\
      `issend` tinyint(1) NOT NULL DEFAULT '0',\
      `auditor` varchar(16) CHARACTER SET utf8mb4 DEFAULT NULL,\
      `sendtime` timestamp NULL DEFAULT NULL,\
      PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;",

  "CREATE TABLE `list_serverlist` (\
      `id` int(32) NOT NULL AUTO_INCREMENT,\
      `serverid` int(32) NOT NULL,\
      `servername` varchar(32) NOT NULL,\
      `ip` varchar(32) NOT NULL,\
      `gsport` int(32) NOT NULL,\
      `webport` int(32) NOT NULL,\
      `operatorid` varchar(32) NOT NULL,\
      `channelid` varchar(32) NOT NULL,\
      `enable` int(4) NOT NULL DEFAULT '1',\
      `channelname` varchar(32) NOT NULL,\
      `activetime` timestamp NULL DEFAULT NULL,\
      `servertype` int(32) NOT NULL DEFAULT '0',\
      `mergeid` int(32) unsigned DEFAULT NULL,\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `svrID` (`serverid`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=390 DEFAULT CHARSET=utf8mb4;",

  "CREATE TABLE `list_subchannel` (\
      `id` int(32) unsigned NOT NULL AUTO_INCREMENT,\
      `channel` varchar(32) NOT NULL,\
      `subchannelid` int(32) unsigned NOT NULL,\
      `name` varchar(32) NOT NULL,\
      PRIMARY KEY (`id`),\
      KEY `channel` (`channel`),\
      CONSTRAINT `channel` FOREIGN KEY (`channel`) REFERENCES `list_channel` (`channel`) ON DELETE CASCADE ON UPDATE CASCADE\
  ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;",
    
  "CREATE TABLE `list_userstation` (\
      `id` int(32) unsigned NOT NULL AUTO_INCREMENT,\
      `ip` varchar(32) NOT NULL,\
      `name` varchar(32) NOT NULL,\
      `port` int(10) unsigned NOT NULL,\
      `feeRate` int(10) NOT NULL DEFAULT '1',\
      `DBPort` int(10) NOT NULL,\
      `DBName` varchar(32) NOT NULL,\
      `DBPassword` varchar(32) NOT NULL,\
      PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;",

  "CREATE TABLE `log_cost` (\
      `id` int(16) NOT NULL AUTO_INCREMENT,\
      `operatorid` int(16) NOT NULL DEFAULT '0',\
      `serverid` int(16) NOT NULL,\
      `logid` int(16) NOT NULL,\
      `userid` int(16) NOT NULL,\
      `roleid` int(32) unsigned NOT NULL,\
      `costtype` int(16) NOT NULL,\
      `mapid` int(16) NOT NULL,\
      `costvalue` int(16) NOT NULL,\
      `itemtype` int(16) NOT NULL,\
      `count` int(16) NOT NULL,\
      `time` datetime NOT NULL,\
      `leftdiamond` int(16) NOT NULL DEFAULT '0',\
      `rolename` char(16) NOT NULL DEFAULT '',\
      `accountname` char(64) NOT NULL DEFAULT '',\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `operatorid` (`id`,`operatorid`,`serverid`,`logid`,`userid`,`costtype`,`mapid`,`costvalue`,`itemtype`,`count`,`time`) USING BTREE,\
      KEY `time` (`time`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=129031767 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;",

  "CREATE TABLE `log_getcard` (\
      `id` int(16) NOT NULL AUTO_INCREMENT,\
      `time` datetime NOT NULL,\
      `operator` varchar(32) DEFAULT NULL,\
      `maintype` int(16) NOT NULL,\
      `cardsource` int(10) DEFAULT NULL,\
      `detailtype` int(16) NOT NULL,\
      `count` int(32) NOT NULL,\
      `filepath` varchar(64) DEFAULT NULL,\
      `mark` varchar(64) DEFAULT NULL,\
      `state` int(16) NOT NULL DEFAULT '0',\
      PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;",

  "CREATE TABLE `log_hotupdate` (\
      `id` int(32) unsigned NOT NULL AUTO_INCREMENT,\
      `sendtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\
      `totalresult` int(32) NOT NULL,\
      `ordertype` int(32) NOT NULL,\
      `targetlist` varchar(128) CHARACTER SET utf8mb4 NOT NULL,\
      `detailresult` text CHARACTER SET utf8mb4 NOT NULL,\
      `ordercmd` varchar(128) CHARACTER SET utf8mb4 DEFAULT NULL,\
      `orderfilepath` varchar(128) CHARACTER SET utf8mb4 DEFAULT NULL,\
      `orderfilename` varchar(128) CHARACTER SET utf8mb4 DEFAULT NULL,\
      PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;",

  "CREATE TABLE `log_idfa` (\
      `id` bigint(128) unsigned NOT NULL AUTO_INCREMENT,\
      `IDFA` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,\
      `channel` varchar(255) NOT NULL,\
      `subchannel` int(255) NOT NULL,\
      `ip` varchar(255) DEFAULT NULL,\
      `time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',\
      `platform` varchar(64) DEFAULT NULL,\
      `updatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `IDFA` (`IDFA`,`subchannel`) USING BTREE,\
      KEY `timestamp` (`time`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;",

  "CREATE TABLE `log_itemlog` (\
      `id` int(20) NOT NULL AUTO_INCREMENT,\
      `logid` int(20) DEFAULT NULL,\
      `serverid` int(20) unsigned NOT NULL,\
      `roleid` int(10) unsigned NOT NULL DEFAULT '0',\
      `userid` int(10) unsigned NOT NULL DEFAULT '0',\
      `optype` int(10) unsigned NOT NULL DEFAULT '0',\
      `itemid` int(20) unsigned NOT NULL DEFAULT '0',\
      `itemtypeid` int(10) unsigned NOT NULL DEFAULT '0',\
      `count` int(10) unsigned NOT NULL DEFAULT '0',\
      `exdata` text,\
      `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\
      PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;",

  "CREATE TABLE `log_login` (\
      `subchannel` varchar(32) DEFAULT NULL,\
      `id` int(16) NOT NULL AUTO_INCREMENT,\
      `operatorid` int(16) DEFAULT NULL,\
      `serverid` int(16) NOT NULL,\
      `logid` int(16) NOT NULL,\
      `userid` int(16) NOT NULL,\
      `roleid` int(32) unsigned NOT NULL,\
      `mapid` int(16) NOT NULL,\
      `type` int(4) NOT NULL,\
      `ip` varchar(128) NOT NULL,\
      `time` datetime NOT NULL,\
      `channel` varchar(32) DEFAULT NULL,\
      `rolename` char(16) DEFAULT NULL,\
      `rolelevel` int(10) NOT NULL DEFAULT '0',\
      `createtime` timestamp NULL DEFAULT NULL,\
      `diamond` int(11) unsigned DEFAULT '0',\
      `svrregtime` timestamp NULL DEFAULT NULL,\
      `pfregtime` timestamp NULL DEFAULT NULL,\
      PRIMARY KEY (`id`),\
      KEY `logid` (`logid`) USING BTREE,\
      KEY `time` (`time`) USING BTREE,\
      KEY `channel` (`channel`) USING BTREE,\
      KEY `subchannel` (`subchannel`) USING BTREE,\
      KEY `type` (`type`) USING BTREE,\
      KEY `roleid` (`roleid`) USING BTREE,\
      KEY `userid` (`userid`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=26170139 DEFAULT CHARSET=utf8mb4;",

  "CREATE TABLE `log_ltv` (\
      `id` int(16) NOT NULL AUTO_INCREMENT,\
      `serverid` int(10) NOT NULL,\
      `date` date NOT NULL,\
      `signup` int(10) NOT NULL,\
      `1_dc` int(10) DEFAULT NULL,\
      `1_dtc` int(10) DEFAULT NULL,\
      `2_dc` int(10) DEFAULT NULL,\
      `2_dtc` int(10) DEFAULT NULL,\
      `3_dc` int(10) DEFAULT NULL,\
      `3_dtc` int(10) DEFAULT NULL,\
      `4_dc` int(10) DEFAULT NULL,\
      `4_dtc` int(10) DEFAULT NULL,\
      `5_dc` int(10) DEFAULT NULL,\
      `5_dtc` int(10) DEFAULT NULL,\
      `6_dc` int(10) DEFAULT NULL,\
      `6_dtc` int(10) DEFAULT NULL,\
      `7_dc` int(10) DEFAULT NULL,\
      `7_dtc` int(10) DEFAULT NULL,\
      `8_dc` int(10) DEFAULT NULL,\
      `8_dtc` int(10) DEFAULT NULL,\
      `9_dc` int(10) DEFAULT NULL,\
      `9_dtc` int(10) DEFAULT NULL,\
      `10_dc` int(10) DEFAULT NULL,\
      `10_dtc` int(10) DEFAULT NULL,\
      `11_dc` int(10) DEFAULT NULL,\
      `11_dtc` int(10) DEFAULT NULL,\
      `12_dc` int(10) DEFAULT NULL,\
      `12_dtc` int(10) DEFAULT NULL,\
      `13_dc` int(10) DEFAULT NULL,\
      `13_dtc` int(10) DEFAULT NULL,\
      `14_dc` int(10) DEFAULT NULL,\
      `14_dtc` int(10) DEFAULT NULL,\
      `15_dc` int(10) DEFAULT NULL,\
      `15_dtc` int(10) DEFAULT NULL,\
      `16_dc` int(10) DEFAULT NULL,\
      `16_dtc` int(10) DEFAULT NULL,\
      `17_dc` int(10) DEFAULT NULL,\
      `17_dtc` int(10) DEFAULT NULL,\
      `18_dc` int(10) DEFAULT NULL,\
      `18_dtc` int(10) DEFAULT NULL,\
      `19_dc` int(10) DEFAULT NULL,\
      `19_dtc` int(10) DEFAULT NULL,\
      `20_dc` int(10) DEFAULT NULL,\
      `20_dtc` int(10) DEFAULT NULL,\
      `21_dc` int(10) DEFAULT NULL,\
      `21_dtc` int(10) DEFAULT NULL,\
      `22_dc` int(10) DEFAULT NULL,\
      `22_dtc` int(10) DEFAULT NULL,\
      `23_dc` int(10) DEFAULT NULL,\
      `23_dtc` int(10) DEFAULT NULL,\
      `24_dc` int(10) DEFAULT NULL,\
      `24_dtc` int(10) DEFAULT NULL,\
      `25_dc` int(10) DEFAULT NULL,\
      `25_dtc` int(10) DEFAULT NULL,\
      `26_dc` int(10) DEFAULT NULL,\
      `26_dtc` int(10) DEFAULT NULL,\
      `27_dc` int(10) DEFAULT NULL,\
      `27_dtc` int(10) DEFAULT NULL,\
      `28_dc` int(10) DEFAULT NULL,\
      `28_dtc` int(10) DEFAULT NULL,\
      `29_dc` int(10) DEFAULT NULL,\
      `29_dtc` int(10) DEFAULT NULL,\
      `30_dc` int(10) DEFAULT NULL,\
      `30_dtc` int(10) DEFAULT NULL,\
      `finished` tinyint(4) NOT NULL DEFAULT '0',\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `serveriddate` (`serverid`,`date`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=910007 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;",

  "CREATE TABLE `log_playermanage` (\
      `id` int(32) NOT NULL AUTO_INCREMENT,\
      `operator` varchar(16) NOT NULL,\
      `serverid` int(10) NOT NULL,\
      `rolename` varchar(16) DEFAULT NULL,\
      `roleid` int(32) unsigned DEFAULT NULL,\
      `userid` int(10) DEFAULT NULL,\
      `zuanshi` int(10) DEFAULT '0',\
      `managetype` varchar(25) NOT NULL,\
      `time` int(20) DEFAULT '0',\
      `msg` varchar(100) DEFAULT NULL,\
      `issend` int(1) NOT NULL,\
      `operatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\
      PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=gbk;",

  "CREATE TABLE `log_rolebase` (\
      `id` int(16) NOT NULL AUTO_INCREMENT,\
      `serverid` int(10) NOT NULL,\
      `roleid` int(32) unsigned NOT NULL,\
      `userid` int(10) NOT NULL,\
      `name` char(16) NOT NULL,\
      `level` int(10) DEFAULT '0',\
      `pro` tinyint(3) DEFAULT '0',\
      `totalgrade` int(10) DEFAULT '0',\
      `zuanshi` int(10) DEFAULT '0',\
      `yinbi` int(16) unsigned DEFAULT '0',\
      `viplevel` int(10) DEFAULT '0',\
      `lastlogintime` timestamp NULL \DEFAULT NULL,\
      `ip` char(42) DEFAULT '',\
      `lastupdatetime` timestamp NULL DEFAULT NULL,\
      `accountname` char(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `roleid` (`roleid`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=2443154 DEFAULT CHARSET=utf8mb4;",

  "CREATE TABLE `log_serverdata` (\
      `id` int(32) NOT NULL AUTO_INCREMENT,\
      `serverid` int(32) unsigned NOT NULL,\
      `infodate` date NOT NULL,\
      `maxonline` int(32) NOT NULL DEFAULT '0',\
      `newlogin` int(32) NOT NULL DEFAULT '0',\
      `totallogin` int(32) NOT NULL DEFAULT '0',\
      `totalrecharge` int(32) NOT NULL DEFAULT '0',\
      `chargecount` int(32) NOT NULL DEFAULT '0',\
      `newpayusercount` int(32) NOT NULL DEFAULT '0',\
      `newpayusertotalrecharge` int(32) NOT NULL DEFAULT '0',\
      `channel` varchar(32) CHARACTER SET utf8mb4 NOT NULL,\
      `subchannel` varchar(32) CHARACTER SET utf8mb4 NOT NULL,\
      `extradata1` int(32) DEFAULT NULL,\
      `extradata2` int(32) DEFAULT NULL,\
      `calcFinished` tinyint(3) unsigned DEFAULT '0',\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `serveriddatechannel` (`serverid`,`infodate`,`channel`,`subchannel`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=39932629 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;",

  "CREATE TABLE `log_suggest` (\
      `id` int(11) NOT NULL AUTO_INCREMENT,\
      `serverid` int(11) NOT NULL,\
      `roleid` int(11) NOT NULL,\
      `rolename` varchar(32) NOT NULL,\
      `userid` int(11) NOT NULL,\
      `rolelevel` int(11) NOT NULL DEFAULT '0',\
      `totalgrade` int(11) NOT NULL DEFAULT '0',\
      `viplevel` tinyint(4) NOT NULL DEFAULT '0',\
      `suggesttype` tinyint(4) NOT NULL,\
      `content` text NOT NULL,\
      `isread` tinyint(1) NOT NULL DEFAULT '0',\
      `isreply` tinyint(1) NOT NULL DEFAULT '0',\
      PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;",

  "CREATE TABLE `log_usercount` (\
      `id` int(16) NOT NULL AUTO_INCREMENT,\
      `operatorid` int(16) DEFAULT NULL,\
      `serverid` int(16) NOT NULL,\
      `logid` int(16) NOT NULL,\
      `count` int(16) NOT NULL,\
      `time` datetime NOT NULL,\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `operatorid` (`id`,`operatorid`,`serverid`,`logid`,`count`,`time`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=23666482 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;",

  "CREATE TABLE `log_userstay` (\
      `id` int(16) NOT NULL AUTO_INCREMENT,\
      `serverid` int(10) NOT NULL,\
      `date` date NOT NULL,\
      `signup` int(10) NOT NULL DEFAULT '0',\
      `1_ds` int(10) DEFAULT NULL,\
      `2_ds` int(10) DEFAULT NULL,\
      `3_ds` int(10) DEFAULT NULL,\
      `4_ds` int(10) DEFAULT NULL,\
      `5_ds` int(10) DEFAULT NULL,\
      `6_ds` int(10) DEFAULT NULL,\
      `7_ds` int(10) DEFAULT NULL,\
      `15_ds` int(10) DEFAULT NULL,\
      `30_ds` int(10) DEFAULT NULL,\
      `finished` int(2) NOT NULL DEFAULT '0',\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `serveriddate` (`serverid`,`date`) USING BTREE\
  ) ENGINE=InnoDB AUTO_INCREMENT=899926 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;",

  "CREATE TABLE `log_recharge` (\
      `id` int(64) NOT NULL AUTO_INCREMENT,\
      `th_product_id` char(64) DEFAULT NULL,\
      `orderid` char(64) NOT NULL,\
      `userid` int(16) DEFAULT NULL,\
      `roleid` int(32) unsigned NOT NULL,\
      `serverid` int(8) NOT NULL,\
      `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\
      `fee` int(32) NOT NULL,\
      `channel` varchar(32) NOT NULL,\
      `subchannel` varchar(32) NOT NULL,\
      `rolename` varchar(16) DEFAULT NULL,\
      `rolelevel` int(10) NOT NULL DEFAULT '0',\
      `createtime` timestamp NULL DEFAULT NULL,\
      `accountname` char(16) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,\
      `svrregtime` timestamp NULL DEFAULT NULL,\
      `pfregtime` timestamp NULL DEFAULT NULL,\
      `viplevel` int(11) DEFAULT '0',\
      PRIMARY KEY (`id`),\
      UNIQUE KEY `orderid` (`orderid`) USING BTREE,\
      KEY `time` (`time`) USING BTREE,\
      KEY `createtime` (`createtime`) USING BTREE\
    ) ENGINE=InnoDB AUTO_INCREMENT=1139191 DEFAULT CHARSET=utf8mb4;",

  "CREATE TABLE `g` (\
      `dbver` int(10) unsigned NOT NULL DEFAULT '0'\
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8;",

  "INSERT INTO `g` set dbver = 0",
  "INSERT INTO `list_admin` VALUES (1, '管理员', 'admin', 'B47BC10EA865C4113E87787D4E7AEAC5', 1, 0, 1, 1, 1, '0', '2018-5-3 21:13:32');",
  "INSERT INTO `list_operator` VALUES (1, 'admin', '超级管理员', NULL, '0', '0', '0', '0', '0', '0', '0', '0', '0');",
  "INSERT INTO `list_userstation` VALUES (1, '127.0.0.1', 'defaultConfig', 8081, 1, 22504, 'user', '@@TTHW2504ttj');",
  "INSERT INTO `list_mailtype` VALUES (1, 'allServer');",
  "INSERT INTO `list_mailtype` VALUES (2, 'sendByLevel');",
  "INSERT INTO `list_mailtype` VALUES (3, 'sendByVipLevel');",
  "INSERT INTO `list_mailtype` VALUES (4, 'sendToRole');"
]
var updateInfo = []
updateInfo[1] = {
  msg : 'dbversion 0 -> 1 add replytitle,replycontent,operator column in table log_suggest',
  sql : 'ALTER TABLE log_suggest ADD replytitle VARCHAR(20) default null,\
         ADD replycontent text default null,\
         ADD operator VARCHAR(20) default null'
}

updateInfo[2] = {
  msg : 'dbversion 1 -> 2 add replytime,time column in table log_suggest',
  sql : 'ALTER TABLE log_suggest ADD replytime timestamp null default null,\
         ADD time timestamp null default null'
}

updateInfo[3] = {
  msg : 'dbversion 2 -> 3 add commonPageList in column in table list_operator',
  sql : 'ALTER TABLE list_operator ADD commonPageList text'
}

updateInfo[4] = {
  msg : 'dbversion 3 -> 4 add commonPageList in column in table list_operator',
  sql : 'update list_operator set commonPageList = "[]"'
}

updateInfo[5] = {
  msg : 'dbversion 4 -> 5 add table log_report',
  sql :"CREATE TABLE `log_report` (\
      `id` int(16) unsigned NOT NULL AUTO_INCREMENT,\
      `serverid` int(10) NOT NULL,\
      `type` int(2) NOT NULL,\
      `srcname` char(16) DEFAULT NULL,\
      `srcid` int(32) DEFAULT NULL,\
      `desname` char(16) DEFAULT NULL,\
      `desid` int(32) NOT NULL,\
      `idx` int(16) NOT NULL,\
      `filename` varchar(32) NOT NULL,\
      `time` timestamp NULL DEFAULT NULL,\
      `delwithtime` timestamp NULL DEFAULT NULL,\
      `isdelwith` int(2) DEFAULT '0',\
      PRIMARY KEY (`id`)\
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;"
    
}

updateInfo[6] = {
  msg : 'dbversion 5 -> 6 add pothos in column in table log_report',
  sql : 'ALTER TABLE log_report MODIFY filename varchar(256)'
}

updateInfo[7] = {
  msg : 'dbversion 6 -> 7 add contenttext in column in table log_report',
  sql : 'ALTER TABLE log_report ADD contenttext text DEFAULT null'
}

updateInfo[8] = {
  msg : 'dbversion 7 -> 8 add voice in column in table log_report',
  sql : 'ALTER TABLE log_report ADD voice varchar(32) DEFAULT ""'
}

updateInfo[9] = {
  msg : 'dbversion 8 -> 9 add backup column in table log_playermanage',
  sql : 'ALTER TABLE log_playermanage ADD backup varchar(250) DEFAULT null'
}

updateInfo[10] = {
  msg : 'dbversion 9 -> 10 add TABLE list_broadcast',
  sql : 'CREATE TABLE `list_broadcast` (\
      `id` int(16) NOT NULL AUTO_INCREMENT,\
      `serverList` text NOT NULL,\
      `beginTime` timestamp NULL DEFAULT NULL,\
      `times` int(16) NOT NULL,\
      `interval` int(16) NOT NULL,\
      `content` text,\
      `sendTime` timestamp NULL DEFAULT NULL,\
      `auditTime` timestamp NULL DEFAULT NULL,\
      `sender` varchar(50) NOT NULL,\
      `reviewer` varchar(50) DEFAULT NULL,\
      `issend` int(1) NOT NULL DEFAULT 0,\
      PRIMARY KEY (`id`)\
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;'
}
updateInfo[11] = {
  msg : 'dbversion 10 -> 11 add broadcastAuditList column in list_operator',
  sql : 'ALTER TABLE list_operator ADD broadcastAuditList text'
}
updateInfo[12] = {
  msg: 'dbversion 11-> 12 add isaudit column in list_broadcast',
  sql: 'ALTER TABLE list_broadcast ADD isaudit int(1) DEFAULT 0'
}
updateInfo[13] = {
  msg : 'dbversion 12-> 13 add TABLE log_allrequest',
  sql : 'CREATE TABLE `log_allrequest` (\
      `id` int(32) NOT NULL AUTO_INCREMENT,\
      `operator` varchar(32) DEFAULT NULL,\
      `url` text,\
      `method` varchar(10) DEFAULT NULL,\
      `insertTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\
      `reqData` text,\
      `resData` text,\
      `ip` varchar(10) DEFAULT NULL,\
      `done` tinyint(4) NOT NULL DEFAULT 0,\
      PRIMARY KEY (`id`)\
    ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;'
}
updateInfo[14] = {
  msg : 'dbversion 13 - 14 add table list_chatkeyword',
  sql : 'CREATE TABLE `list_chatkeyword` (\
      `id` int(11) NOT NULL AUTO_INCREMENT,\
      `key` varchar(10) NOT NULL,\
      PRIMARY KEY (`id`)\
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;'
}
updateInfo[15] = {
  msg: 'dbversion 14 -> 15 add TABLE log_chat',
  sql : "CREATE TABLE `log_chat` (\
      `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\
      `serverid` int(16) NOT NULL,\
      `name` char(48) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '',\
      `roleid` int(11) unsigned NOT NULL DEFAULT '0',\
      `level` int(11) unsigned NOT NULL DEFAULT '0',\
      `channel` int(11) unsigned NOT NULL DEFAULT '0',\
      `objname` char(48) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '',\
      `content` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '',\
      `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\
      `operation` int(2) NOT NULL DEFAULT '0',\
      PRIMARY KEY (`id`)\
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;"
}
var DB = require('./createDB')
const options = {
  host  : '127.0.0.1',
  port  : 3306,
  user  : 'root',
  password: 'tthw123',
  database: 'ggg',
}
var db = new DB(options, initTableSqlList, updateInfo)
db.do().then(() => {console.log('done')}).catch(err => console.log(err))

