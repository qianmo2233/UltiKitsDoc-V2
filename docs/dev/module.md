# 模块开发

![Version](https://img.shields.io/badge/UltiTools-6.0.0%2B-616ae5?style=for-the-badge)

自 UltiTools 6 起，所有功能都将以模块的形式进行开发

::: info 该指引适用于未来版本
新的规范已初步形成，但仍然处于快速迭代中，请保持关注
:::

## 快速开始

接下来，这篇文章将会说明如何开发一个 UltiTools 模块，由于本人不善 Gradle, 所以使用 Gradle 的大佬们只能看 Maven 来触类旁通了（以后会补充）

### 添加依赖

首先是要添加 UltiKits 的官方仓库和一些其他的可选仓库

```xml
<repositories>
    <repository>
        <id>ultikits</id>
        <url>https://maven.wisdommee.com/repository/UltiKits/</url>
    </repository>
    <repository>
        <id>spigotmc-repo</id>
        <url>https://hub.spigotmc.org/nexus/content/repositories/snapshots/</url>
    </repository>
    <repository>
        <id>sonatype</id>
        <url>https://oss.sonatype.org/content/groups/public/</url>
    </repository>
</repositories>
```

然后就是导入 UltiTools-API 和 UltiCoreAPI，当然依照情况可以导入 spigot-api（我觉得大部分情况都应该要导入吧，毕竟咱们写的还是spigot的插件对吧）但是导入spigot-api并非必须项。

:::warning
这里需要注意下，maven 3.6以上的版本全部要求远程URL必须使用https
:::

```xml
<dependencies>
    <dependency>
        <groupId>com.ultikits</groupId>
        <artifactId>UltiTools-API</artifactId>
        <version>7.0.0</version>
        <scope>provided</scope>
    </dependency>
    <dependency>
        <groupId>org.spigotmc</groupId>
        <artifactId>spigot-api</artifactId>
        <version>1.19.2-R0.1-SNAPSHOT</version>
        <scope>provided</scope>
    </dependency>
    <dependency>
        <groupId>com.github.wisdommen</groupId>
        <artifactId>UltiCoreAPI</artifactId>
        <version>2.0.0</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

完整的 ` pom.xml ` 文件大概长这样：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <artifactId>Module-Name</artifactId>
    <groupId>com.module.name</groupId>
    <version>1.0.0</version>
    <modelVersion>4.0.0</modelVersion>

    <properties>
        <java.version>1.8</java.version>
        <maven.compiler.target>1.8</maven.compiler.target>
        <maven.compiler.source>1.8</maven.compiler.source>
    </properties>

    <dependencies>
        <dependency>
            <groupId>com.ultikits</groupId>
            <artifactId>UltiTools-API</artifactId>
            <version>6.0.0</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>org.spigotmc</groupId>
            <artifactId>spigot-api</artifactId>
            <version>1.19.2-R0.1-SNAPSHOT</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>com.github.wisdommen</groupId>
            <artifactId>UltiCoreAPI</artifactId>
            <version>2.0.0</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>

    <repositories>
        <repository>
            <id>ultikits</id>
            <url>https://maven.wisdommee.com/repository/UltiKits/</url>
        </repository>
        <repository>
            <id>spigotmc-repo</id>
            <url>https://hub.spigotmc.org/nexus/content/repositories/snapshots/</url>
        </repository>
        <repository>
            <id>sonatype</id>
            <url>https://oss.sonatype.org/content/groups/public/</url>
        </repository>
    </repositories>

</project>
```

### 编写模块主类

我们新建一个模块主类，就叫 ` PluginMain ` 。这个类需要继承 ` UltiToolsPlugin ` ，并且实现抽象方法。

```java
public class PluginMain extends UltiToolsPlugin {

    // 插件模块的启动方法，类比spigot插件的onEnable方法 
    @Override
    public boolean registerSelf() {
        return true;
    }

    // 插件模块的卸载方法，类比spigot插件的onDisable方法 
    @Override
    public void unregisterSelf() {
        
    }

    // 插件模块的名称，随意取名，但是建议使用英文名，游戏内不会显示
    // 游戏内显示的仅为服务名（之后讲插件服务的时候会说）
    // 此方法只用于区别插件模块，请勿取过于大众化的名字
    @Override
    public String pluginName() {
        return "";
    }

}
```

至此一个啥也没有啥也不干的空壳插件就写完了。将项目编译生成的jar文件放入服务器目录 ` /plugins/UltiTools/plugins ` 文件夹下，重载插件即可发现模块已经启用。

## 实战示例

在这里，我们将编写一个带有家功能的模块

:::details 项目文件结构
```nohighlight
Home
├─ pom.xml
└─ src
    ├─ main
    │    ├─ java
    │    │    └─ com
    │    │        └─ ultikits
    │    │               ├─ HomeCommands.java
    │    │               ├─ HomeEntity.java
    │    │               ├─ HomeService.java
    │    │               ├─ HomeServiceImpl.java
    │    │               ├─ HomeServiceRegister.java
    │    │               ├─ PluginMain.java
    │    │               └─ WorldLocation.java
    │    └─ resources
    │           ├─ lang
    │           │    ├─ en.json
    │           │    └─ zh.json
    │           └─ res
    │               └─ home
    │                    └─ config.yml
    └─ test
         └─ java
```
:::

### 模块主类

还是一样的，创建并编写一个模块主类

:::: code-group
::: code-group-item PluginMain.java
```java
public class PluginMain extends UltiToolsPlugin {
    private static PluginMain pluginMain;

    public static PluginMain getPluginMain() {
        return pluginMain;
    }

    @Override
    public boolean registerSelf() {
        pluginMain = this;
        return true;
    }

    @Override
    public void unregisterSelf() {

    }

    @Override
    public String pluginName() {
        return "UltiTools-Home";
    }
}
```
:::
::::

### 数据实体类

这将是我们数据持久化的对象，不管是数据库还是文件存储，我们都需要继承DataEntity。

这里我推荐重写toString方法，将对象字符串化为一个json对象方便存储和转换。

这里我们添加两个实体，都是需要存储的数据。

:::: code-group
::: code-group-item WorldLocation.java
```java
@Data
@NoArgsConstructor
public class WorldLocation {
    private String world;
    private double x;
    private double y;
    private double z;
    private float yaw;
    private float pitch;

    public WorldLocation(Location location) {
        this.world = location.getWorld().getName();
        this.x = location.getX();
        this.y = location.getY();
        this.z = location.getZ();
        this.yaw = location.getYaw();
        this.pitch = location.getPitch();
    }

    public WorldLocation(String world, double x, double y, double z, float yaw, float pitch) {
        this.world = world;
        this.x = x;
        this.y = y;
        this.z = z;
        this.yaw = yaw;
        this.pitch = pitch;
    }

    @Override
    public String toString() {
        return "{"
                + "\"world\":\""
                + world + '\"'
                + ",\"x\":"
                + x
                + ",\"y\":"
                + y
                + ",\"z\":"
                + z
                + ",\"yaw\":"
                + yaw
                + ",\"pitch\":"
                + pitch
                + "}";
    }
}
```
:::
::: code-group-item HomeEntity.java
```java
@Data
@EqualsAndHashCode(callSuper = false)
@Table("home")
public class HomeEntity extends DataEntity {
    private Long id = new Date().getTime();
    private UUID playerId;
    private String name;
    private WorldLocation location;

    public Location getHomeLocation() {
        return new Location(Bukkit.getWorld(location.getWorld()), location.getX(), location.getY(), location.getZ(), location.getYaw(), location.getPitch());
    }

    @Override
    public String toString() {
        return "{"
                + "\"id\":"
                + id
                + ",\"playerId\":"
                + playerId
                + ",\"name\":\""
                + name + '\"'
                + ",\"location\":"
                + location
                + "}";
    }
}
```
:::
::::

### 服务接口

当然完全可以不添加接口，直接实现 ` Registrable ` 接口也是可以的，但是我们可以添加接口以使代码规范。

添加 ` HomeService ` 接口，定义几个需要用到的方法。

:::: code-group
::: code-group-item HomeService.java
```java
public interface HomeService extends Registrable {

    /**
     * 使用玩家UUID和家的名字获取到一个具体的家对象
     *
     * @param playerId 玩家的UUID
     * @param name 家的名字
     * @return 获取到的家对象
     */
    HomeEntity getHomeByName(UUID playerId, String name);

    /**
     * 使用玩家的UUID获取到玩家所有的家对象
     *
     * @param playerId 玩家的UUID
     * @return 玩家所有的家对象
     */
    List<HomeEntity> getHomeList(UUID playerId);

    /**
     * 使用玩家实体和家的名字创建一个家对象，家的名字不可重复
     *
     * @param player 玩家对象
     * @param name 家的名字
     * @return 返回是否创建成功
     */
    boolean createHome(Player player, String name);

    /**
     * 使用玩家的UUID和家的名字删除一个家
     *
     * @param playerId 玩家的UUID
     * @param name 家的名字
     */
    void deleteHome(UUID playerId, String name);
}
```
:::
::::

关于 ` HomeService ` 中的接口实现自没有什么好说的，实现逻辑代码就好。我们主要来看 ` Registrable ` 接口的实现部分。

:::: code-group
::: code-group-item Registrable.java
```java
public interface Registrable {
    /**
     * 获取服务的名称，此名称将会出现在控制台或者游戏中
     *
     * @return 服务的名称
     */
    String getName();

    /**
     * 获取服务资源文件夹的名字，不仅是存在服务器文件夹/plugins/UltiTools/config下的名字
     * 而且还是存在插件项目resources文件夹下的文件夹路径
     *
     * @return 服务资源文件夹的名字
     */
    default String getResourceFolderName(){
        return this.getName();
    }

    /**
     * @return 作者名称
     */
    String getAuthor();

    /**
     * 用于对比注册服务的版本号，目前没啥卵用嘿嘿嘿
     *
     * @return 服务版本号
     */
    int getVersion();
}
```
:::

::: code-group-item HomeServiceImpl.java
```java
public class HomeServiceImpl implements HomeService {
    // 这里是获取数据操作类，暂且按下不表，后面会详细讲述
    DataOperator<HomeEntity> dataOperator = PluginMain.getPluginMain().getDataOperator(HomeEntity.class);

    @Override
    public HomeEntity getHomeByName(UUID playerId, String name) {
        Collection<HomeEntity> homeEntities = dataOperator.getAll(WhereCondition.builder().column("playerId").value(playerId).build(),
                WhereCondition.builder().column("name").value(name).build());
        if (homeEntities.size() == 0) {
            return null;
        }
        return new ArrayList<>(homeEntities).get(0);
    }

    @Override
    public List<HomeEntity> getHomeList(UUID playerId) {
        Collection<HomeEntity> all = dataOperator.getAll(WhereCondition.builder().column("playerId").value(playerId).build());
        return new ArrayList<>(all);
    }

    @Override
    public boolean createHome(Player player, String name) {
        boolean exist = dataOperator.exist(WhereCondition.builder().column("playerId").value(player.getUniqueId()).build(),
                WhereCondition.builder().column("name").value(name).build());
        if (exist) {
            return false;
        }
        HomeEntity homeEntity = new HomeEntity();
        homeEntity.setPlayerId(player.getUniqueId());
        homeEntity.setLocation(new WorldLocation(player.getLocation()));
        homeEntity.setName(name);
        dataOperator.insert(homeEntity);
        return true;
    }

    @Override
    public void deleteHome(UUID playerId, String name) {
        dataOperator.del(WhereCondition.builder().column("playerId").value(playerId).build(),
                WhereCondition.builder().column("name").value(name).build());
    }

    @Override
    public String getName() {
        return "家功能";
    }

    @Override
    public String getResourceFolderName() {
        return "home";
    }

    @Override
    public String getAuthor() {
        return "wisdomme";
    }

    @Override
    public int getVersion() {
        return 1;
    }
}
```
:::
::::

### 服务注册器

每个服务都可以通过 ` ServiceRegister ` 包装类来包装后注册到 UltiTools 来实现 IOC 容器管理。其他的模块也可以通过容器获取到服务。

:::: code-group
::: code-group-item HomeServiceRegister.java
```java
public class HomeServiceRegister extends ServiceRegister<HomeService> {

    public HomeServiceRegister(Class<HomeService> api, Registrable service) {
        super(api, service);
    }
}
```
:::

::: code-group-item PluginMain.java
```java
public class PluginMain extends UltiToolsPlugin {
    private static PluginMain pluginMain;
    private HomeServiceRegister homeServiceRegister;

    public static PluginMain getPluginMain() {
        return pluginMain;
    }

    @Override
    public boolean registerSelf() {
        pluginMain = this;
        homeServiceRegister = new HomeServiceRegister(HomeService.class, new HomeServiceImpl());
        return true;
    }

    @Override
    public void unregisterSelf() {
        homeServiceRegister.unload();
    }

    @Override
    public String pluginName() {
        return "UltiTools-Home";
    }
}
```
:::
::::

### 服务管理器

使用 ` PluginManger.getService() ` 方法获取到注册的接口的实现类，也就是我们刚刚在主类中注册的实现类。

这里你当然可以使用 ` new HomeServiceImpl() ` 来创建一个对象，但是本着降低代码耦合度的思想，使用服务获取会更好一些。

PluginManager 在之后会有详解。

```java
Optional<HomeService> service = PluginManager.getService(HomeService.class);
if (!service.isPresent()){
    throw new RuntimeException("未找到家服务！");
}
```

### 执行器与监听器

我们就写一个游戏内的命令。我这里就不详细讲了，都是spigot基础。

下面是 HomeCommands 命令业务逻辑。` AbstractPlayerCommandExecutor ` 为 UltiCoreAPI 中的命令抽象类。暂时忽略 ` i18n() ` 这个方法，理解为文本输出即可。

:::: code-group
::: code-group-item HomeCommands.java
```java
public class HomeCommands extends AbstractPlayerCommandExecutor {
    @Override
    protected boolean onPlayerCommand(Command command, String[] strings, Player player) {
        Optional<HomeService> service = PluginManager.getService(HomeService.class);
        if (!service.isPresent()){
            throw new RuntimeException("未找到家服务！");
        }
        switch (strings[0]) {
            case "list":
                List<HomeEntity> homeList = homeService.getHomeList(player.getUniqueId());
                List<String> homeListString = new ArrayList<>();
                homeList.forEach(home -> homeListString.add(home.getName()));
                player.sendMessage(ChatColor.YELLOW + PluginMain.getPluginMain().i18n("====家列表===="));
                player.sendMessage(homeListString.toString());
                break;
            case "create":
                boolean created = homeService.createHome(player, strings[1]);
                if (created) {
                    player.sendMessage(ChatColor.YELLOW + PluginMain.getPluginMain().i18n("已创建！"));
                } else {
                    player.sendMessage(ChatColor.RED + PluginMain.getPluginMain().i18n("创建失败！\n你可能已经有这个家了！"));
                }
                break;
            case "del":
                homeService.deleteHome(player.getUniqueId(), strings[1]);
                break;
            case "tp":
                HomeEntity homeByName = homeService.getHomeByName(player.getUniqueId(), strings[1]);
                if (homeByName == null) {
                    player.sendMessage(ChatColor.RED + PluginMain.getPluginMain().i18n("你没有这个家！"));
                    break;
                }
                player.teleport(homeByName.getHomeLocation());
                break;
        }
        return true;
    }
}
```
:::
::::

### 多语言支持

如果想要给插件支持多语言，可以使用 UltiTools 的 i18n 支持。此部分不是必须的，如果不写则 ` i18n() ` 方法会原封不动输出输入的内容。

例如想要支持中文(zh)和英文(en)需要对主类做稍稍一点的修改。在主类覆写 ` supported() ` 方法

```java
@Override
public List<String> supported() {
    return Arrays.asList("zh", "en");
}
```

现在主类就变成这样

:::: code-group
::: code-group-item PluginMain.java
```java
public class PluginMain extends UltiToolsPlugin {
    private HomeServiceRegister homeServiceRegister;
    private static PluginMain pluginMain;

    public static PluginMain getPluginMain() {
        return pluginMain;
    }

    @Override
    public boolean registerSelf() {
        pluginMain = this;
        homeServiceRegister = new HomeServiceRegister(HomeService.class, new HomeServiceImpl());
        CommandManager.registerCommand(new HomeCommands(), "", this.i18n("家功能"), "home");
        return true;
    }

    @Override
    public void unregisterSelf() {
        homeServiceRegister.unload();
    }

    @Override
    public String pluginName() {
        return "UltiTools-Home";
    }

    @Override
    public List<String> supported() {
        return Arrays.asList("zh", "en");
    }
}
```
:::
::::

然后在项目的resources文件夹中创建文件夹lang。在里面写入刚刚上面列出的zh.json和en.json。

如果你的默认语言，即i18n方法中写的语言，和某个语言文件的键名相同则不需要创建那个语言文件，毕竟没什么意义对吧。

:::: code-group
::: code-group-item en.json
```json
{
  "家功能": "Home Function",
  "已创建！": "Created!",
  "====家列表====": "====Home List====",
  "你没有这个家！": "You don't have this home!",
  "创建失败！\n你可能已经有这个家了！": "Create home failed!\nYou may have a home with the same name!"
}
```
:::

::: code-group-item zh.json
```json
{
  "家功能": "家功能",
  "已创建！": "已创建！",
  "====家列表====": "====家列表====",
  "你没有这个家！": "你没有这个家！",
  "创建失败！\n你可能已经有这个家了！": "创建失败！\n你可能已经有这个家了！"
}
```
:::
::::

至此，整个实战示例就结束了。恭喜你完成了你的第一个UltiTools插件！