# Wrapper API

![Version](https://img.shields.io/badge/UltiCore-1.0.0%2B-616ae5?style=for-the-badge)

UltiKits 有一套比较成熟的多版本兼容方案，在进行一些操作时，无需担心版本兼容问题

## 匹配版本

首先，你需要对当前服务端版本进行匹配

```java
VersionWrapper versionWrapper = new VersionAdaptor().match();
```

通过这个方法你可以得到一个 VersionWrapper 对象，这个对象封装了适用于某一服务端版本的一些方法

::: tip
如果是在 UltiTools 内进行开发，则无需进行以上操作，直接调用 ` UltiTools.versionAdaptor ` 即可
:::

在进行版本匹配时，若 UltiCore 发现不支持该服务端版本，则会抛出 ` RuntimeException ` : Your server version isn't supported in UltiCoreAPI!

UltiCore 5.1.7 版本 支持 1.8 - 1.19 基于Bukkit的服务端

## 方法列表

UltiCore 目前对以下操作进行了多版本兼容

### 获取彩色玻璃板

使用这个方法可以获取一个指定颜色的玻璃板

- 方法名：` getColoredPlaneGlass `
- 参数：` Colors ` UltiCore的颜色枚举
- 返回：`ItemStack` 彩色玻璃板的Bukkit物品堆

```java
ItemStack whiteGlass = versionWrapper.getColoredPlaneGlass(Colors.WHITE);
```

### 获取告示牌

使用这个方法可以获取一个告示牌

- 方法名：` getSign `
- ~~参数~~：<u>这个方法不需要传参</u>
- 返回：`ItemStack` 告示牌的Bukkit物品堆

```java
ItemStack sign = versionWrapper.getSign();
```

### 获取末影之眼

使用这个方法可以获取一个末影之眼

- 方法名：` getEndEye `
- ~~参数~~：<u>这个方法不需要传参</u>
- 返回：`ItemStack` 末影之眼的Bukkit物品堆

```java
ItemStack eye = versionWrapper.getEndEye();
```

### 获取邮件物品

使用这个方法可以获取一个邮件物品

- 方法名：` getEmailMaterial `
- 参数：` boolean ` 邮件是否已读
- 返回：`ItemStack` 邮件物品的Bukkit物品堆

```java
ItemStack emailMaterial = versionWrapper.getEmailMaterial(ReadStatus);
```

### 获取玩家头颅

使用这个方法可以获取指定玩家的头颅

- 方法名：` getHead `
- 参数：` OfflinePlayer `  Bukkit (离线)玩家对象
- 返回：`ItemStack` 头颅的Bukkit物品堆

```java
ItemStack ItemStack = versionWrapper.getHead(player);
```

### 获取草方块

使用这个方法可以获取一个草方块

- 方法名：` getGrassBlock `
- ~~参数~~：<u>这个方法不需要传参</u>
- 返回：`ItemStack` 草方块的Bukkit物品堆

```java
ItemStack ItemStack = versionWrapper.getGrassBlock();
```

### 注册记分项

使用这个方法可以注册一个记分项

- 方法名： ` registerNewObjective `
- 参数：
  - ` Scoreboard ` 记分板对象
  - ` String ` 名称
  - ` String ` 记分标准
  - ` String ` 显示名称

::: tip 注意事项
关于以上参数的要求，参见以下内容

[SpigotAPI - registerNewObjective](https://bukkit.windit.net/javadoc/org/bukkit/scoreboard/Scoreboard.html#registerNewObjective(java.lang.String,java.lang.String,java.lang.String))
:::

- 返回： ` Objective ` 已注册的 Objective 实例

```java
information = versionWrapper.registerNewObjective(scoreboard, name, "", ChatColor.DARK_AQUA + title);
//然后这个 Objective 对象就可以设置到记分板了
information.setDisplaySlot(DisplaySlot.SIDEBAR);
```