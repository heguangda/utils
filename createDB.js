var info  = [
  "CREATE TABLE `calendar` (\
    `datelist` date DEFAULT NULL\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
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
    `privilege` text CHARACTER SET utf8,\
    PRIMARY KEY (`id`),\
    UNIQUE KEY `username` (`username`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
  "CREATE TABLE `list_channel` (\
    `id` int(16) NOT NULL AUTO_INCREMENT,\
    `channel` varchar(32) NOT NULL,\
    `code` varchar(16) NOT NULL,\
    `operatorid` int(16) NOT NULL,\
    `enable` int(4) NOT NULL DEFAULT '1',\
    PRIMARY KEY (`id`),\
    UNIQUE KEY `channel` (`channel`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
  "CREATE TABLE `list_id` (\
    `id` int(16) NOT NULL AUTO_INCREMENT,\
    `idtype` varchar(16) NOT NULL,\
    `idvalue` varchar(16) NOT NULL,\
    `idname` varchar(32) NOT NULL,\
    PRIMARY KEY (`id`),\
    UNIQUE KEY `idtype` (`idtype`,`idvalue`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
  "CREATE TABLE `list_loginserver` (\
    `id` int(16) NOT NULL AUTO_INCREMENT,\
    `loginserver` varchar(32) NOT NULL,\
    `ip` varchar(32) NOT NULL,\
    `port` int(16) NOT NULL,\
    `enable` int(4) NOT NULL DEFAULT '1',\
    PRIMARY KEY (`id`),\
    UNIQUE KEY `loginserver` (`loginserver`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
  "CREATE TABLE `list_mail` (\
    `id` int(16) unsigned NOT NULL AUTO_INCREMENT,\
    `serverlist` text NOT NULL,\
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
    `roleid` int(11) DEFAULT '0',\
    PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;",
  "CREATE TABLE `list_maxlogid` (\
    `id` bigint(64) unsigned NOT NULL AUTO_INCREMENT,\
    `serverid` int(16) NOT NULL,\
    `datatype` varchar(64) NOT NULL,\
    `maxlogid` int(64) DEFAULT NULL,\
    `maxtimestamp` timestamp NULL DEFAULT NULL,\
    PRIMARY KEY (`id`),\
    UNIQUE KEY `serverid` (`serverid`,`datatype`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
  "CREATE TABLE `list_operator` (\
    `id` int(16) NOT NULL AUTO_INCREMENT,\
    `operator` varchar(32) NOT NULL,\
    `code` varchar(16) NOT NULL,\
    `loginserverid` int(16) NOT NULL,\
    `enable` int(4) NOT NULL DEFAULT '1',\
    PRIMARY KEY (`id`),\
    UNIQUE KEY `operator` (`operator`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
  "CREATE TABLE `list_position` (\
    `id` int(16) NOT NULL AUTO_INCREMENT,\
    `position` varchar(32) NOT NULL,\
    `operatorid` int(16) NOT NULL,\
    `enable` int(4) NOT NULL DEFAULT '1',\
    PRIMARY KEY (`id`),\
    UNIQUE KEY `position` (`position`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
  "CREATE TABLE `list_sendgoods` (\
    `id` int(16) NOT NULL AUTO_INCREMENT,\
    `serverid` int(10) NOT NULL,\
    `rolename` varchar(16) NOT NULL,\
    `diamondcount` int(16) NOT NULL,\
    `createtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,\
    `isaudit` tinyint(1) NOT NULL DEFAULT '0',\
    `itemsender` varchar(16) NOT NULL,\
    `issend` tinyint(1) NOT NULL DEFAULT '0',\
    `auditor` varchar(16) DEFAULT NULL,\
    `sendtime` timestamp NULL DEFAULT NULL,\
    PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
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
    PRIMARY KEY (`id`),\
    UNIQUE KEY `svrID` (`serverid`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
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
    PRIMARY KEY (`id`,`operatorid`),\
    KEY `time` (`time`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
  "CREATE TABLE `log_getcard` (\
    `id` int(16) NOT NULL AUTO_INCREMENT,\
    `time` datetime NOT NULL,\
    `operator` varchar(32) DEFAULT NULL,\
    `maintype` int(16) NOT NULL,\
    `cardsource` int(10) NOT NULL,\
    `detailtype` int(16) NOT NULL,\
    `count` int(32) NOT NULL,\
    `filepath` varchar(64) DEFAULT NULL,\
    `mark` varchar(64) DEFAULT NULL,\
    `state` int(16) NOT NULL DEFAULT '0',\
    PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
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
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;",
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
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
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
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
  "CREATE TABLE `log_loginpercent` (\
    `id` int(16) NOT NULL AUTO_INCREMENT,\
    `servername` varchar(32) NOT NULL,\
    `date` date NOT NULL,\
    `totallogin` int(10) DEFAULT NULL,\
    `newlogin` int(10) DEFAULT NULL,\
    `1_count` int(10) DEFAULT NULL,\
    `1_percent` varchar(8) DEFAULT NULL,\
    `2_count` int(10) DEFAULT NULL,\
    `2_percent` varchar(8) DEFAULT NULL,\
    `3_count` int(10) DEFAULT NULL,\
    `3_percent` varchar(8) DEFAULT NULL,\
    `4_count` int(10) DEFAULT NULL,\
    `4_percent` varchar(8) DEFAULT NULL,\
    `5_count` int(10) DEFAULT NULL,\
    `5_percent` varchar(8) DEFAULT NULL,\
    `6_count` int(10) DEFAULT NULL,\
    `6_percent` varchar(8) DEFAULT NULL,\
    `7_count` int(10) DEFAULT NULL,\
    `7_percent` varchar(8) DEFAULT NULL,\
    `8_count` int(10) DEFAULT NULL,\
    `8_percent` varchar(8) DEFAULT NULL,\
    `9_count` int(10) DEFAULT NULL,\
    `9_percent` varchar(8) DEFAULT NULL,\
    `10_count` int(10) DEFAULT NULL,\
    `10_percent` varchar(8) DEFAULT NULL,\
    `11_count` int(10) DEFAULT NULL,\
    `11_percent` varchar(8) DEFAULT NULL,\
    `12_count` int(10) DEFAULT NULL,\
    `12_percent` varchar(8) DEFAULT NULL,\
    `13_count` int(10) DEFAULT NULL,\
    `13_percent` varchar(8) DEFAULT NULL,\
    `14_count` int(10) DEFAULT NULL,\
    `14_percent` varchar(8) DEFAULT NULL,\
    `15_count` int(10) DEFAULT NULL,\
    `15_percent` varchar(8) DEFAULT NULL,\
    `16_count` int(10) DEFAULT NULL,\
    `16_percent` varchar(8) DEFAULT NULL,\
    `17_count` int(10) DEFAULT NULL,\
    `17_percent` varchar(8) DEFAULT NULL,\
    `18_count` int(10) DEFAULT NULL,\
    `18_percent` varchar(8) DEFAULT NULL,\
    `19_count` int(10) DEFAULT NULL,\
    `19_percent` varchar(8) DEFAULT NULL,\
    `20_count` int(10) DEFAULT NULL,\
    `20_percent` varchar(8) DEFAULT NULL,\
    `21_count` int(10) DEFAULT NULL,\
    `21_percent` varchar(8) DEFAULT NULL,\
    `22_count` int(10) DEFAULT NULL,\
    `22_percent` varchar(8) DEFAULT NULL,\
    `23_count` int(10) DEFAULT NULL,\
    `23_percent` varchar(8) DEFAULT NULL,\
    `24_count` int(10) DEFAULT NULL,\
    `24_percent` varchar(8) DEFAULT NULL,\
    `25_count` int(10) DEFAULT NULL,\
    `25_percent` varchar(8) DEFAULT NULL,\
    `26_count` int(10) DEFAULT NULL,\
    `26_percent` varchar(8) DEFAULT NULL,\
    `27_count` int(10) DEFAULT NULL,\
    `27_percent` varchar(8) DEFAULT NULL,\
    `28_count` int(10) DEFAULT NULL,\
    `28_percent` varchar(8) DEFAULT NULL,\
    `29_count` int(10) DEFAULT NULL,\
    `29_percent` varchar(8) DEFAULT NULL,\
    `30_count` int(10) DEFAULT NULL,\
    `30_percent` varchar(8) DEFAULT NULL,\
    `finished` int(4) NOT NULL DEFAULT '0',\
    PRIMARY KEY (`id`),\
    UNIQUE KEY `date` (`servername`,`date`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
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
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
  "CREATE TABLE `log_recharge` (\
    `id` int(64) NOT NULL AUTO_INCREMENT,\
    `jhorderid` char(64) DEFAULT NULL,\
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
    KEY `createtime` (`createtime`) USING BTREE,\
    KEY `roleid` (`roleid`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
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
    `lastlogintime` timestamp NULL DEFAULT NULL,\
    `ip` char(42) DEFAULT '',\
    `lastupdatetime` timestamp NULL DEFAULT NULL,\
    `accountname` char(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',\
    PRIMARY KEY (`id`),\
    UNIQUE KEY `roleid` (`roleid`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
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
    UNIQUE KEY `uniqueLimit` (`serverid`,`infodate`,`channel`,`subchannel`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;",
  "CREATE TABLE `log_suggest` (\
    `id` int(11) NOT NULL AUTO_INCREMENT,\
    `serverid` int(11) NOT NULL,\
    `roleid` bigint(11) unsigned NOT NULL,\
    `rolename` varchar(32) NOT NULL,\
    `userid` int(11) NOT NULL,\
    `rolelevel` int(11) NOT NULL DEFAULT '0',\
    `totalgrade` int(11) NOT NULL DEFAULT '0',\
    `viplevel` tinyint(4) NOT NULL DEFAULT '0',\
    `suggesttype` tinyint(4) NOT NULL,\
    `content` text NOT NULL,\
    `isread` tinyint(1) NOT NULL DEFAULT '0',\
    `isreply` tinyint(1) NOT NULL DEFAULT '0',\
    `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,\
    PRIMARY KEY (`id`)\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
  "CREATE TABLE `log_totaldata` (\
    `id` int(16) NOT NULL AUTO_INCREMENT,\
    `operatorid` int(4) DEFAULT NULL,\
    `serverid` int(4) NOT NULL,\
    `date` date NOT NULL,\
    `toplogin` int(16) DEFAULT '0',\
    `totallogin` int(10) DEFAULT NULL,\
    `newlogin` int(10) NOT NULL,\
    `totalrecharge` int(16) NOT NULL,\
    `rechargeuser` int(10) NOT NULL,\
    `rechargepercent` varchar(8) NOT NULL,\
    `rechargearpu` float(6,2) NOT NULL,\
    `loginarpu` float(10,2) NOT NULL,\
    `totalcost` float(16,0) NOT NULL,\
    `costuser` int(10) NOT NULL,\
    `costaverage` float(10,2) NOT NULL,\
    `1_count` int(10) DEFAULT NULL,\
    `1_percent` varchar(8) DEFAULT NULL,\
    `2_count` int(10) DEFAULT NULL,\
    `2_percent` varchar(8) DEFAULT NULL,\
    `3_count` int(10) DEFAULT NULL,\
    `3_percent` varchar(8) DEFAULT NULL,\
    `4_count` int(10) DEFAULT NULL,\
    `4_percent` varchar(8) DEFAULT NULL,\
    `5_count` int(10) DEFAULT NULL,\
    `5_percent` varchar(8) DEFAULT NULL,\
    `6_count` int(10) DEFAULT NULL,\
    `6_percent` varchar(8) DEFAULT NULL,\
    `7_count` int(10) DEFAULT NULL,\
    `7_percent` varchar(8) DEFAULT NULL,\
    `8_count` int(10) DEFAULT NULL,\
    `8_percent` varchar(8) DEFAULT NULL,\
    `9_count` int(10) DEFAULT NULL,\
    `9_percent` varchar(8) DEFAULT NULL,\
    `10_count` int(10) DEFAULT NULL,\
    `10_percent` varchar(8) DEFAULT NULL,\
    `11_count` int(10) DEFAULT NULL,\
    `11_percent` varchar(8) DEFAULT NULL,\
    `12_count` int(10) DEFAULT NULL,\
    `12_percent` varchar(8) DEFAULT NULL,\
    `13_count` int(10) DEFAULT NULL,\
    `13_percent` varchar(8) DEFAULT NULL,\
    `14_count` int(10) DEFAULT NULL,\
    `14_percent` varchar(8) DEFAULT NULL,\
    `15_count` int(10) DEFAULT NULL,\
    `15_percent` varchar(8) DEFAULT NULL,\
    `16_count` int(10) DEFAULT NULL,\
    `16_percent` varchar(8) DEFAULT NULL,\
    `17_count` int(10) DEFAULT NULL,\
    `17_percent` varchar(8) DEFAULT NULL,\
    `18_count` int(10) DEFAULT NULL,\
    `18_percent` varchar(8) DEFAULT NULL,\
    `19_count` int(10) DEFAULT NULL,\
    `19_percent` varchar(8) DEFAULT NULL,\
    `20_count` int(10) DEFAULT NULL,\
    `20_percent` varchar(8) DEFAULT NULL,\
    `21_count` int(10) DEFAULT NULL,\
    `21_percent` varchar(8) DEFAULT NULL,\
    `22_count` int(10) DEFAULT NULL,\
    `22_percent` varchar(8) DEFAULT NULL,\
    `23_count` int(10) DEFAULT NULL,\
    `23_percent` varchar(8) DEFAULT NULL,\
    `24_count` int(10) DEFAULT NULL,\
    `24_percent` varchar(8) DEFAULT NULL,\
    `25_count` int(10) DEFAULT NULL,\
    `25_percent` varchar(8) DEFAULT NULL,\
    `26_count` int(10) DEFAULT NULL,\
    `26_percent` varchar(8) DEFAULT NULL,\
    `27_count` int(10) DEFAULT NULL,\
    `27_percent` varchar(8) DEFAULT NULL,\
    `28_count` int(10) DEFAULT NULL,\
    `28_percent` varchar(8) DEFAULT NULL,\
    `29_count` int(10) DEFAULT NULL,\
    `29_percent` varchar(8) DEFAULT NULL,\
    `30_count` int(10) DEFAULT NULL,\
    `30_percent` varchar(8) DEFAULT NULL,\
    `finished` int(4) NOT NULL DEFAULT '0',\
    PRIMARY KEY (`id`),\
    UNIQUE KEY `date` (`serverid`,`date`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;",
  "CREATE TABLE `log_usercount` (\
    `id` int(16) NOT NULL AUTO_INCREMENT,\
    `operatorid` int(16) DEFAULT NULL,\
    `serverid` int(16) NOT NULL,\
    `logid` int(16) NOT NULL,\
    `count` int(16) NOT NULL,\
    `time` datetime NOT NULL,\
    PRIMARY KEY (`id`),\
    UNIQUE KEY `operatorid` (`id`,`operatorid`,`serverid`,`logid`,`count`,`time`) USING BTREE,\
    KEY `time` (`time`) USING BTREE\
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4",
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
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;"
]



var mysql = require('mysql')
var util = require('util')

const DBconfig = {
  host  : '127.0.0.1',
  port  : 22504,
  user  : 'root',
  password: 'tthw22504TTJ@@',
  database: 'tjgm',
}
const mysqlPool = mysql.createPool({
    host: DBconfig.host,
    port: DBconfig.port,
    user: DBconfig.user,
    password: DBconfig.password,
    database: DBconfig.database
  })


async function loadDB(){
  var result = await testDBExist()
  if (result.needCreate && result.needCreate == 1) {
    await createDB()
    await initDB()
  } else {
    console.log('不用')
  }
}

function testDBExist(){
  return new Promise((res,rej) => {
      console.log('进入testDBExist')
      mysqlPool.getConnection(function(err) {
          if (err) {
              if(err.message.indexOf('Unknown database') > -1){
                res({
                    needCreate: 1
                  })
              } else {
                  rej(err)
              }
          }
          else res({
            needCreate: 0
          })
      })
  })
}
async function createDB(){
  con = mysql.createConnection({
    host: DBconfig.host,
    port: DBconfig.port,
    user: DBconfig.user,
    password: DBconfig.password
  })
  var query = util.promisify(con.query.bind(con))
  await query("CREATE DATABASE IF NOT EXISTS " + DBconfig.database + " DEFAULT CHARSET utf8 COLLATE utf8_general_ci")
  return
}

async function initDB(){
  var query = util.promisify(mysqlPool.query.bind(mysqlPool))
  for(const i in info) {
    await query(info[i])
  }
  return 
}


loadDB().then(result => console.log('done')).catch(err => console.log(err))