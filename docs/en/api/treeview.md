# 树状图

## 类分层结构

:::: code-group
::: code-group-item UltiTools

::: details 点击展开树状图

- java.lang.Object
    - com.ultikits.ultitools.config.AbstractConfig
        - com.ultikits.ultitools.config.AbstractConfigReviewable
            - com.ultikits.ultitools.config.BagConfig
            - com.ultikits.ultitools.config.ChatConfig
            - com.ultikits.ultitools.config.ChestLockConfig
            - com.ultikits.ultitools.config.CleanerConfig
            - com.ultikits.ultitools.config.DeathPunishConfig
            - com.ultikits.ultitools.config.HomeConfig
            - com.ultikits.ultitools.config.JoinWelcomeConfig
            - com.ultikits.ultitools.config.LoginConfig
            - com.ultikits.ultitools.config.MainConfig
            - com.ultikits.ultitools.config.MOTDConfig
            - com.ultikits.ultitools.config.SideBarConfig
            - com.ultikits.ultitools.config.TabBarConfig
            - com.ultikits.ultitools.config.TradeConfig
        - com.ultikits.ultitools.config.ChestDataConfig
        - com.ultikits.ultitools.config.CustomerGUIConfig
        - com.ultikits.ultitools.config.GlobuleGroupsConfig
        - com.ultikits.ultitools.config.GroupPermissionConfig
        - com.ultikits.ultitools.config.KitsConfig
        - com.ultikits.ultitools.config.MultiworldsConfig
        - com.ultikits.ultitools.config.SideBarDataConfig
        - com.ultikits.ultitools.config.UserPermissionConfig
        - com.ultikits.ultitools.config.WhiteListConfig
    - com.ultikits.abstracts.AbstractConsoleCommandExecutor (implements org.bukkit.command.CommandExecutor)
        - com.ultikits.ultitools.commands.RemoteBagConsoleCommands
    - com.ultikits.abstracts.AbstractPlayerCommandExecutor (implements org.bukkit.command.CommandExecutor)
        - com.ultikits.ultitools.commands.BackCommands
        - com.ultikits.ultitools.commands.BanCommands
        - com.ultikits.ultitools.commands.GameModeCommands
        - com.ultikits.ultitools.commands.HealCommands
        - com.ultikits.ultitools.commands.HomeListCommands
        - com.ultikits.ultitools.commands.LobbyCommands
        - com.ultikits.ultitools.commands.LockCommands
        - com.ultikits.ultitools.commands.RandomTpCommands
        - com.ultikits.ultitools.commands.RecallCommands
        - com.ultikits.ultitools.commands.SetHomeCommands
        - com.ultikits.ultitools.commands.SpawnCommands
        - com.ultikits.ultitools.commands.TpbackCommands
        - com.ultikits.ultitools.commands.UnlockCommands
        - com.ultikits.ultitools.commands.WarpCommands
    - com.ultikits.abstracts.AbstractTabExecutor (implements org.bukkit.command.TabExecutor)
        - com.ultikits.ultitools.commands.DeleteHomeCommands
        - com.ultikits.ultitools.commands.EmailCommands
        - com.ultikits.ultitools.commands.HomeCommands
        - com.ultikits.ultitools.commands.InventoryBackupCommands
        - com.ultikits.ultitools.commands.KitsCommands
        - com.ultikits.ultitools.commands.LoginRegisterCommands
        - com.ultikits.ultitools.commands.MultiWorldsCommands
        - com.ultikits.ultitools.commands.RemoteBagCommands
        - com.ultikits.ultitools.commands.SbCommands
        - com.ultikits.ultitools.commands.SocialSystemCommands
        - com.ultikits.ultitools.commands.SpeedCommands
        - com.ultikits.ultitools.commands.TeleportCommands
        - com.ultikits.ultitools.commands.TpaHereCommands
        - com.ultikits.ultitools.commands.TradeCommands
    - com.ultikits.ultitools.views.ApplyView
    - com.ultikits.ultitools.beans.ArmorsBean
    - com.ultikits.ultitools.views.ArmorView
    - com.ultikits.ultitools.listener.BackListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.listener.BanListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.views.BanlistView
    - com.ultikits.ultitools.tasks.BanTimeCheckerTask
    - com.ultikits.ultitools.tasks.BroadcastTask
    - org.bukkit.scheduler.BukkitRunnable (implements java.lang.Runnable)
        - com.ultikits.ultitools.tasks.AtTask
        - com.ultikits.ultitools.tasks.CleanerTask
        - com.ultikits.ultitools.tasks.NamePrefixSuffixTask
        - com.ultikits.ultitools.tasks.ProCheckerTask
        - com.ultikits.ultitools.tasks.SideBarTask
        - com.ultikits.ultitools.tasks.Timer
        - com.ultikits.ultitools.tasks.tphereTimer
        - com.ultikits.ultitools.tasks.tpTimer
        - com.ultikits.ultitools.tasks.TradeTask
        - com.ultikits.ultitools.tasks.UnloadChunksTask
    - com.ultikits.ultitools.listener.ChatListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.listener.ChestLockListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.services.ChestLockService
    - com.ultikits.ultitools.commands.CleanerCommands (implements org.bukkit.command.TabExecutor)
    - com.ultikits.ultitools.services.CleanerService
    - com.ultikits.ultitools.tasks.CommandExec (implements java.util.concurrent.Callable\<V\>)
    - com.ultikits.ultitools.listener.CommandListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.register.CommandRegister
    - com.ultikits.ultitools.config.ConfigController
    - com.ultikits.ultitools.views.CreateKitsView
    - com.ultikits.ultitools.listener.CustomGUIProtectListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.utils.CustomGuiUtils
    - com.ultikits.ultitools.views.CustomGUIView
    - com.ultikits.ultitools.services.DatabasePlayerService
    - com.ultikits.ultitools.listener.DeathListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.tasks.DeathPunishmentTask
    - com.ultikits.ultitools.services.DeathPunishService
    - com.ultikits.ultitools.services.DelayTeleportService
    - com.ultikits.ultitools.checker.DependencyChecker
    - com.ultikits.ultitools.beans.DoubleChestLocationBean
    - com.ultikits.ultitools.manager.EmailManager (implements com.ultikits.ultitools.apis.EmailAPI)
    - com.ultikits.ultitools.services.EmailService
    - com.ultikits.ultitools.views.EmailView
    - com.ultikits.ultitools.utils.ExceptionUtils
    - com.ultikits.ultitools.commands.FlyCommands (implements org.bukkit.command.CommandExecutor)
    - com.ultikits.ultitools.views.FriendsView
    - com.ultikits.ultitools.utils.FunctionUtils
    - com.ultikits.ultitools.services.GroupManagerService
    - com.ultikits.ultitools.utils.GUIUtils
    - com.ultikits.ultitools.views.HomeListView
    - com.ultikits.ultitools.services.HomeService
    - com.ultikits.ultitools.ultitools.Initializer
    - com.ultikits.ultitools.views.InventoryBackupView
    - com.ultikits.ultitools.commands.InvseeCommands (implements org.bukkit.command.CommandExecutor)
    - com.ultikits.ultitools.listener.ItemClickListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.listener.JoinListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.views.KitsView
    - com.ultikits.ultitools.utils.LanguageUtils
    - com.ultikits.ultitools.listener.LoginGUIListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.listener.LoginListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.listener.MOTDListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.listener.MultiWorldListener (implements org.bukkit.event.Listener)
    - com.ultikits.inventoryapi.PagesListener (implements org.bukkit.event.Listener)
        - com.ultikits.ultitools.listener.ArmorSeeListener
        - com.ultikits.ultitools.listener.BanlistViewListener
        - com.ultikits.ultitools.listener.ChestPageListener
        - com.ultikits.ultitools.listener.CreateKitsViewListener
        - com.ultikits.ultitools.listener.CustomGUIListener
        - com.ultikits.ultitools.listener.EmailPageListener
        - com.ultikits.ultitools.listener.FriendsApplyViewListener
        - com.ultikits.ultitools.listener.FriendsViewListener
        - com.ultikits.ultitools.listener.HomeListPageListener
        - com.ultikits.ultitools.listener.InventoryBackupViewListener
        - com.ultikits.ultitools.listener.KitsPageListener
        - com.ultikits.ultitools.listener.PermissionListener
        - com.ultikits.ultitools.listener.WarpListener
        - com.ultikits.ultitools.listener.WorldsListListener
    - com.ultikits.ultitools.commands.PasswordCommands (implements org.bukkit.command.TabExecutor)
    - com.ultikits.ultitools.listener.PermissionAddOnJoinListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.commands.PermissionCommands (implements org.bukkit.command.TabExecutor)
    - com.ultikits.ultitools.views.PermissionMainView
    - me.clip.placeholderapi.PlaceholderHook
        - me.clip.placeholderapi.expansion.PlaceholderExpansion
            - com.ultikits.ultitools.register.PapiRegister
    - com.ultikits.ultitools.checker.PlayerlistChecker
    - org.bukkit.plugin.PluginBase (implements org.bukkit.plugin.Plugin)
        - org.bukkit.plugin.java.JavaPlugin
            - com.ultikits.ultitools.ultitools.UltiTools
    - com.ultikits.ultitools.views.RemoteBagView
    - com.ultikits.ultitools.listener.RightClickListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.utils.ScanUtils
    - com.ultikits.ultitools.services.ScoreBoardService
    - com.ultikits.ultitools.listener.TeleportListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.utils.TimeUtils
    - com.ultikits.ultitools.commands.ToolsCommands (implements org.bukkit.command.TabExecutor)
    - com.ultikits.ultitools.listener.TpaAcceptListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.tasks.TpTimerTask
    - com.ultikits.ultitools.listener.TradeListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.services.TradeService
    - com.ultikits.ultitools.views.TradeView
    - com.ultikits.ultitools.utils.Utils
    - com.ultikits.ultitools.listener.ValidationPageListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.checker.VersionChecker
    - com.ultikits.ultitools.utils.VersionUtils
    - com.ultikits.ultitools.views.WarpsView
    - com.ultikits.ultitools.commands.WhitelistCommands (implements org.bukkit.command.TabExecutor)
    - com.ultikits.ultitools.listener.WhitelistListener (implements org.bukkit.event.Listener)
    - com.ultikits.ultitools.views.WorldsListView
    - com.ultikits.ultitools.utils.WorldUtils
    - com.ultikits.ultitools.utils.YamlFileUtils

:::

:::
::: code-group-item UltiCoreAPI

<br>
<center>UltiCoreAPI目前还在整理中</center>
<br>

:::
::::

## 接口分层结构

:::: code-group
::: code-group-item UltiTools

::: details 点击展开树状图

- com.ultikits.ultitools.apis.EmailAPI

:::

:::
::: code-group-item UltiCoreAPI

<br>
<center>UltiCoreAPI目前还在整理中</center>
<br>

:::
::::

## 枚举分层结构

:::: code-group
::: code-group-item UltiTools

::: details 点击展开树状图

- java.lang.Object 
  - java.lang.Enum\<E\> (implements java.lang.Comparable\<T\>, java.lang.constant.Constable, java.io.Serializable)
    - com.ultikits.ultitools.enums.CleanTypeEnum 
    - com.ultikits.ultitools.enums.ConfigsEnum 
    - com.ultikits.ultitools.enums.EmailResponse 
    - com.ultikits.ultitools.enums.LoginRegisterEnum 
    - com.ultikits.ultitools.enums.PermissionsEnum

:::

:::
::: code-group-item UltiCoreAPI

<br>
<center>UltiCoreAPI目前还在整理中</center>
<br>

:::
::::