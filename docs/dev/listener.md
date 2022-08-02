# 事件监听器

![Version](https://img.shields.io/badge/UltiTools-6.0.0%2B-616ae5?style=for-the-badge)

::: warning 该指引适用于未来版本
在 UltiTools 6.0 alpha 前，你只需要按照正常步骤编写并注册监听器即可
:::

在UltiTools创建新的命令执行器或事件监听器，与平常有所不同

::: tip 开发规范
请将监听器类创建在 ` com.ultikits.ultitools.listener ` 下
:::

和一般步骤一样，你需要实现 ` Listener ` 接口，并且在监听方法上使用  ` @EventHandler ` 注解

```java
@EventListener(function = "function_name")
public class ListenerName implements Listener {

    @EventHandler
    public void onEvent(Event event){
        // do something...
    }
}
```

你会发现这个监听器类有了一个 ` @EventListener ` 注解

使用这个注解，插件将会自动对该监听器进行注册，您无需手动注册

这个注解只有一个 ` function ` 参数，默认为 core

该参数填写该监听器所属功能的名称，插件会根据配置文件的功能开关来判断是否进行注册

如果使用默认参数，则插件将默认注册该监听器