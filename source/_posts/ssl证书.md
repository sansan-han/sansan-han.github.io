---
title: '''ssl证书'''
tags:
  - blog
categories:
  - blog
desc:给网站加上通配符ssl小绿锁
date: 2022-03-06 12:08:57
---

  

现在各家SSL证书提供商都已经接连取消免费证书了，还好还有开源的[Let's Encrypt](https://letsencrypt.org)。用[Certbot](https://certbot.eff.org)来进行申请，这边因为宝塔面板和国内环境的原因，自动更新不太好使，所以记录下一些会用到的命令行。

```
certbot certonly --preferred-challenges dns --manual  -d *.yocoh.cn --server https://acme-v02.api.letsencrypt.org/directory
```

certonly代表只会生成证书，不会自动部署。

--preferred-challenges dns --manual代表手动验证域名归属。

这样子的话就会给出一串验证字符，添加一个_acme-challenge的txt解析就可以了，稍等一会儿回来点enter。

```
Please deploy a DNS TXT record under the name:

_acme-challenge.yocoh.cn.

with the following value:

nNAe0gXCq0da5sPX_ONZxG3_i0BJr6rjD0feqmLmicI

Before continuing, verify the TXT record has been deployed. Depending on the DNS
provider, this may take some time, from a few seconds to multiple minutes. You can
check if it has finished deploying with aid of online tools, such as the Google
Admin Toolbox: https://toolbox.googleapps.com/apps/dig/#TXT/_acme-challenge.yocoh.cn.
Look for one or more bolded line(s) below the line ';ANSWER'. It should show the
value(s) you've just added.
```



```
Successfully received certificate.
Certificate is saved at: //fullchain.pem
Key is saved at:         //privkey.pem
This certificate expires on 2022-06-04.
These files will be updated when the certificate renews.
```

就这样吧，以上。

##### 利用acme.sh

新申请SSL  `acme.sh   --issue   --dns dns_dp   -d *.yocoh.cn`

安装SSL  

```
acme.sh --install-cert -d *.yocoh.cn --key-file /www/server/panel/vhost/ssl/yocoh.cn/privkey.pem --fullchain-file  /www/server/panel/vhost/ssl/yocoh.cn/fullchain.pem --reloadcmd "service nginx force-reload"
```

使用token自动更新：

