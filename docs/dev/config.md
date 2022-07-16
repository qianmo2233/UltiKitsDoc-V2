# 配置(数据)文件

如果你想要创建一个新的YAML文件来储存你的各种配置项和数据，那么请遵从以下步骤

## 添加枚举
首先，你需要在 ` ConfigsEnum ` 枚举类中添加你的配置文件路径，以便插件知道该文件的储存位置

```java
YOUR_CONFIG_NAME(UltiTools.getInstance().getDataFolder() + "path/to/config.yml"),
```

## 创建对象

UltiKits使用对象来统一管理YAML文件，你需要创建一个关于该配置文件的Config类

::: tip
请将配置(数据)文件对象创建在 ` com.ultikits.ultitools.config ` 下
:::

### 配置文件
如果该YAML文件为配置文件，那么这个Config类应该继承 ` AbstractConfigReviewable ` 类

插件在每次启动时会检测配置文件的更新，并自动更新新的配置项，因此该类需要初始化父类的 ` version ` 属性

每次更新配置文件时请增加 ` version ` 的值

```java
public class YourConfig extends AbstractConfigReviewable {
    private static final YourConfig config = new YourConfig("you_config_name", ConfigsEnum.YOUR_CONFIG_NAME.toString());

    public YourConfig() {
        config.init();
    }

    private YourConfig(String name, String filePath) {
        super(name, filePath);
        version = 1.0;
    }
}
```

对象实例化方法参数说明:

| 属性名          | 类型     | 说明                   |
|--------------|--------|----------------------|
| name         | String | 数据文件名称               |
| filePath     | String | 数据文件所在路径             |

### 数据文件
如果该YAML文件为数据文件，那么这个Config类应该继承 ` AbstractConfig ` 类

` AbstractConfig ` 类没有 ` version ` 属性，因此插件只会检测该文件的存在性并自动生成

你需要手动检查该数据文件的结构并更新

```java
public class YourConfig extends AbstractConfig {
    private static final YourConfig config = new YourConfig("you_config_name", UltiTools.getInstance().getDataFolder().toString(), ConfigsEnum.YOUR_CONFIG_NAME.toString(), "you_data_name.yml");

    public YourConfig() {
        config.init();
    }

    private YourConfig(String name, String folder, String filePath, String resourcePath) {
        super(name, folder, filePath, resourcePath);
    }
}
```

对象实例化方法参数说明:

| 属性名          | 类型     | 说明                   |
|--------------|--------|----------------------|
| name         | String | 数据文件名称               |
| folder       | String | 数据文件所在文件夹路径          |
| filePath     | String | 数据文件所在路径             |
| resourcePath | String | 数据文件在JAR包内Resource路径 |

::: tip
你当然也可以为配置文件使用 ` AbstractConfig ` 类，但是你需要手动进行许多操作
:::

## 初始化

接下来，你需要在插件启动时初始化该配置(数据)文件

在 com.ultikits.ultitools.ultitools 中 ` Initializer ` 类的 ` initConfig() ` 方法中添加对你的Config类的实例化

```java
new YourConfig();
```

## YAML文件
最后，你需要在resource目录下创建你的YAML文件

如果是配置文件，那么应该包含版本信息

```yaml
# 配置版本号，请勿更改 
config_version: 1.0
```

如果是配置文件，你需要分别创建两份前缀为“zh_”，“en_”，使用不同的语言对配置文件进行注释，否则创建一份即可

## 读写数据

UltiTools 封装了一个 ` ConfigController ` 类来对配置(数据)文件进行操作

### 获取
使用 ` getConfig() ` 方法即可获取配置(数据)文件

```java
YamlConfiguration config = ConfigController.getConfig("config_name");
```

该方法返回一个Bukkit的 ` YamlConfiguration ` 对象，像平常操作Bukkit配置文件一样

### 保存新的文件
使用 ` saveConfig() ` 方法可以保存一份新的文件

```java
ConfigController.saveConfig("config_name");
```

::: warning
执行该方法会覆盖原有的文件！请谨慎使用
:::