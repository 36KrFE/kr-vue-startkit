# 项目 silver-bi

## 安装说明

* 在当前目录下执行命令` npm install `

## 启动页面

执行命令 `npm run serve`

## host文件配置

### 本地 测试
* 192.168.2.8      insighttest03.jingdata.com
* 192.168.2.8      insighttest04.jingdata.com
* 192.168.2.8      insighttest05.jingdata.com
* 192.168.2.8      insighttest-backend.jingdata.com
* 192.168.2.1      test01.jingdata.com
* 127.0.0.1        insight-local.jingdata.com
* 127.0.0.1        insight-backend.jingdata.com
* 192.168.2.14     passport.36kr.com

### alpha
* 192.168.6.37     insight-alpha.jingdata.com
* 192.168.3.43     passport.36kr.com

## 访问地址
* 本地地址 insight-backend.jingdata.com
* 测试地址 insighttest03.jingdata.com  insighttest04.jingdata.com  insighttest05.jingdata.com
* 线上地址 insight.corp.jingdata.com

## 其他
* 接口文档地址 data-documents.corp.jingdata.com
* 需求文档地址 documents.corp.36kr.com

## 服务端API code错误码标识
账户体系
登录
10001：短信验证码错误
10002：用户不存在

注册
10011：短信验证码错误
10012：用户已存在

短信
10031：极验校验失败
10032：短信发送太频繁
10033：短信发送失败

账号状态
10041：账号过期
10042：账号封禁
10043：账号状态异常
10044：账号过期-已申请
10045：账号试用期还未开始

查看权限
10051：权限验证

## 项目部署
Jenkins地址: http://jenkins.corp.36kr.com/
### 测试环境
Jenkins地址: http://jenkins.corp.36kr.com/job/f2e-test-silver-bi/
点击左侧菜单栏: ‘Build with Parameters’

testenv: 所要部署的测试服务器 ;
docker: 根据所选服务器觉得（例如 test03 - test05，选择 docker02）;
branchname: 部署项目代码所在远程分支名 ;
### alpha环境
Jenkins地址: http://jenkins.corp.36kr.com/job/f2e-prod-silver-bi/
点击左侧菜单栏: ‘Build with Parameters’

testenv: alpha-01 ;
branchname: 部署项目代码所在远程分支名 ;
### 线上环境
Jenkins地址: http://jenkins.corp.36kr.com/job/f2e-prod-silver-bi/
点击左侧菜单栏: ‘Build with Parameters’

testenv: saas-01 ;
branchname: master ;

## 未来需要改进的地方

- ...

