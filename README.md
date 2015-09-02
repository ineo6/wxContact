#微信企业号-微企通讯录

微企通讯录页面。

##用法##
###1.开启调试###
在index.html中修改loader配置：

```
loader.config({
        base: '',
        alias: alias,
        res: ['js', 'css'],
        debug:false
    })
```


###2.部门数据###

index.html中:

```
  window.dep = {
      "dep": {
          "-10": ["我的部门", 4, []],
          "1": ["企业号体验31073680", 7, [-10, 2, 4]],
          "2": ["child1", 2, [3]],
          "3": ["cchild1", 1, []],
          "4": ["child2", 1, []]
      }
  };
```
按照格式输入到页面上，或者改造流程。

###3.用户列表###
数据格式参见list.json，原url为:

```
/cgi-bin/wap_contact_v4?action=getuserlist&f=json&count=200&pid=4
```

###4.个人信息###
数据格式参见user.json,原url为:

```
/cgi-bin/wap_contact_v4?action=getuser&f=json&contactuin=1146034589
```

###5.搜索###
 数据格式参见search.json,原url为:
 
 ```
 /cgi-bin/wap_contact_v4?action=search&count=200&f=json&pid=4&keyword=glj
 ```


