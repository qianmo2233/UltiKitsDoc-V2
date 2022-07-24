# 命令执行器

::: tip 开发规范
请将执行器类创建在 ` com.ultikits.ultitools.commands ` 下
:::

## 游戏内命令

如果这个命令只能在游戏内使用，那么这个类应该继承 ` AbstractPlayerCommandExecutor ` 类并实现 ` onPlayerCommand() ` 方法

```java
public class Commands extends AbstractPlayerCommandExecutor {
    @Override
    protected boolean onPlayerCommand(@NotNull Command command, @NotNull String[] strings, @NotNull Player player) {
        // do something...
        return true;
    }
}
```
这个方法得到的参数与平常实现 ` CommandExecutor ` 接口的 ` onCommand() ` 方法是一样的，唯一的不同是 ` CommandSender ` 已经被转换为了 ` Player `

如果通过控制台执行该命令，插件会自动处理并发出提示，不会触发 ` onPlayerCommand() ` 方法

## 控制台命令

如果这个命令只能在控制台使用，那么这个类应该继承 ` AbstractConsoleCommandExecutor ` 类并实现 ` onConsoleCommand() ` 方法

```java
public class Commands extends AbstractConsoleCommandExecutor {
    @Override
    protected boolean onConsoleCommand(@NotNull Command command, @NotNull String[] strings, @NotNull CommandSender commandSender) {
        // do something...
        return true;
    }
}
```
这个方法得到的参数与平常实现 ` CommandExecutor ` 接口的 ` onCommand() ` 方法是一样的

如果游戏内玩家执行该命令，插件会自动处理并发出提示，不会触发 ` onConsoleCommand() ` 方法

## Tab补全

如果你想要该命令支持Tab补全，那么这个类应该继承 ` AbstractTabExecutor ` 类并实现 ` onPlayerCommand() ` 方法和 ` onPlayerTabComplete() ` 方法

::: tip
和 ` AbstractPlayerCommandExecutor ` 一样，该执行器只能在游戏内被触发
:::

```java
public class Commands extends AbstractTabExecutor {
    @Override
    protected boolean onPlayerCommand(@NotNull Command command, @NotNull String[] strings, @NotNull Player player) {
        // do something...
        return true;
    }

    @Override
    protected @Nullable List<String> onPlayerTabComplete(@NotNull Command command, @NotNull String[] strings, @NotNull Player player) {
        // do something...
        return list;
    }
}
```

` onPlayerTabComplete() ` 参数与 ` onPlayerCommand() ` 一致

返回一个List列表，作为玩家Tab补全的备选项，null将不会出现Tab补全

## 注册执行器

UltiTools中，注册监听器十分简单

::: warning 该指引适用于未来版本
在 UltiTools 6.0 alpha 前，你只需要按照正常步骤编写并注册执行器即可
:::


```java
@CmdExecutor(function = "function_name", permission = "ultikits.tools.command", description = "a commend", alias = "command,cmd")
//command executor class
```

使用 ` @CmdExecutor ` 注解，插件将会自动对该执行器进行注册，您无需手动注册

- ` function ` 参数，默认为空,填写该监听器所属功能的名称，插件会根据配置文件的功能开关来判断是否进行注册，如果使用默认参数，则插件将默认注册该监听器
- ` permission ` 参数，命令的权限
- ` description ` 参数，命令的简介，将显示在帮助信息
- ` alias ` 参数，命令，多个命令使用","分开 