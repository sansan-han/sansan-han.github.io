---
title: ''为了摸鱼部署个在线的markdown编辑器''
tags:
  - blog
categories:
  - blog
date: 2022-03-06 12:21:11
---



不知道为啥， 一到办公室就觉得自己文思泉涌，想写一些东西。但是写笔记本上之后还是要抄到电脑，用公司的电脑不提不支持markdown，最重要的是公司电脑上放东西就像裸奔一样。那就部署个在线的吧，至少穿条底裤。<sp>虽然或许也没啥用</sp>



选的是WriteAs这个服务。

首先先下载安装包，GitHub上下载它最近的安装包：[Write As](https://github.com/writefreely/writefreely/releases)

解压到项目文件夹。然后运行`writefreely config start`开始配置流程。

这里可能会遇到一个command not found 的坑，可以使用下面的方式尝试解决：

```
tar xvzf writefreely.tar.gz
cd writefreely
./writefreely config start
```

*也可以只生成config文件然后手动修改`./writefreely config generate`*

跟随引导添加数据库、网站运行方式等信息。

接着生成存储用户和私有数据所需的加密密钥：

```
./writefreely keys generate
```

配置好数据库之后运行以下命令创建必要的表：

``` 
./writefreely db init
```

然后`./writefreely`就可以运行了。



噢，如果是在服务器上运行，在`/etc/systemd/system`路径下添加一个名为`writefreely.service`的文件，然后输入以下内容：

```
[Unit]
Description=WriteFreely Instance
After=syslog.target network.target
# If MySQL is running on the same machine, uncomment the following 
# line to use it, instead. 
#After=syslog.target network.target mysql.service

[Service]
Type=simple
StandardOutput=syslog
StandardError=syslog
WorkingDirectory=/var/www/example.com
ExecStart=/var/www/example.com/writefreely
Restart=always

[Install]
WantedBy=multi-user.target
```



然后运行下面命令启动服务：

```
sudo systemctl start writefreely
```

可以运行程序日志命令验证是否启动：

```
sudo journalctl -f -u writefreely
```

