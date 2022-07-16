# Pro Checker API

如果你需要检查插件是否激活了Pro版本（例如发送真实邮件），那么就应该使用这个接口

::: danger
UltiTools是开源插件，但请不要将剔除/破解Pro验证的插件发布到各网络平台
:::

## 获取实例

首先你需要实例化一个ProChecker对象

构造方法需要你传入UltiKits的账号和密码

```java
ProChecker proChecker = new ProChecker("username", "password");
```

然后得到的proChecker即可用于验证Pro状态

## 验证Pro激活状态

直接调用 ` getProStatus() ` 即可

该方法会返回一个布尔值作为激活状态，true为已激活，false为未激活

::: warning
如果你要调用云端功能（例如发送真实邮件），那么在大部分情况下都是要进行Pro验证的
:::

## 刷新Pro验证状态

正常情况下 Pro Checker 会自动刷新Pro验证状态，如果你需要手动刷新，那么你只需要调用 ` validatePro() ` 方法即可

这个方法会返回一个字符串作为刷新结果

| 字符串                    | 含义                  |
|------------------------|---------------------|
| Login Failed!          | 登录失败，可能是网络问题或账号密码错误 |
| Pro Version Activated! | Pro版本已激活            |
| Pro Activate Failed!   | Pro版本未激活            |


## 使用 CD-Key 验证

::: danger 已弃用的方法
这种验证方式在 UltiTools 5.0 后被弃用，请不要用这种方式验证！
:::

调用 ` validatePro() ` 方法即可使用CD-Key验证

你只需要传入 CD-Key 字符串即可

```java
proChecker.validatePro("XXXX-XXXX-XXXX-XXXX")
```


这个方法会返回一个字符串作为验证结果