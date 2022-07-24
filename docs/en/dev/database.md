# Database API

UltiKits 支持使用MySQL数据库来储存数据，并且封装了一系列的方法

::: warning 该功能将被弃用
在未来的某个版本，该功能已不再适用和支持
:::

## 快速开始

### 获取Core API实例
数据库功能依赖于UltiCoreAPI，因此你需要先获取UltiCoreAPI实例

```java
UltiCoreAPI ultiCoreAPI = new UltiCoreAPI(plugin);
```

### 连接数据库
先调用 ` setUpDatabase() ` 方法设置数据库连接信息

然后实例化 ` DatabaseUtils ` 类

```java
ultiCoreAPI.setUpDatabase(database, ip, port, username, password);
databaseUtils = new DatabaseUtils(ultiCoreAPI);
```

得到的 ` databaseUtils ` 实例便可以进行各种数据库操作了

## CRUD操作

### 创建数据表

调用 ` createTable() ` 方法来创建一个数据表

```java
createTable("tableName", fields, true)
//可以不加第三个参数，默认自动提交事务
createTable("tableName", fields)
```
方法参数：

| 参数         | 类型       | 说明                |
|------------|----------|-------------------|
| tableName  | String   | 表名称               |
| fields     | String[] | 字段                |
| autoCommit | boolean  | (可选，默认true)自动提交事务 |

该方法将会返回一个布尔值来告知操作是否成功

### 判断列

调用 ` isColumnExists() ` 可以判断指定数据表是否存在指定列

```java
isColumnExists("tableName", "columnName")
```

方法参数：

| 参数         | 类型     | 说明  |
|------------|--------|-----|
| tableName  | String | 表名称 |
| columnName | String | 列名称 |

存在为true，反之为false

### 添加列

调用 ` addColumn() ` 来添加一个列

```java
addColumn("tableName", "columnName")
```

方法参数：

| 参数         | 类型     | 说明  |
|------------|--------|-----|
| tableName  | String | 表名称 |
| columnName | String | 列名称 |

该方法将会返回一个布尔值来告知操作是否成功

### 查询数据

调用 ` getData() ` 来查询数据

```java
getData(primaryIDField, id, tableName, fieldName)
```

方法参数：

| 参数             | 类型     | 说明    |
|----------------|--------|-------|
| primaryIDField | String | 主键字段名 |
| id             | String | 查询数据  |
| tableName      | String | 表名称   |
| fieldName      | String | 列名称   |

查询成功返回字符串结果，未找到或失败返回null

### 查询列

调用 ` getKeys() ` 查询一个列的全部数据

```java
getData(String tableName, String fieldName)
```

方法参数：

| 参数             | 类型     | 说明    |
|----------------|--------|-------|
| tableName      | String | 表名称   |
| fieldName      | String | 列名称   |

查询成功返回字符串列表，未找到或失败返回null

### 插入数据

调用 ` insertData() ` 来插入一条数据

```java
createTable("tableName", dataMap, true)
//可以不加第三个参数，默认自动提交事务
createTable("tableName", dataMap)
```

方法参数：

| 参数         | 类型                  | 说明                |
|------------|---------------------|-------------------|
| tableName  | String              | 表名称               |
| DataMap    | Map<String, String> | 数据                |
| autoCommit | boolean             | (可选，默认true)自动提交事务 |

::: info
- 关于dataMap

Key为数据字段，Value为对应的值
:::

该方法将会返回一个布尔值来告知操作是否成功

### 更新数据

调用 ` updateData() ` 来更新一条数据

```java
updateData(tableName, fieldName, primaryIDField, id, value, autoCommit, otherStatements)
```

方法参数：

| 参数              | 类型                        | 说明                |
|-----------------|---------------------------|-------------------|
| primaryIDField  | String                    | 主键字段名             |
| id              | String                    | 查询数据              |
| tableName       | String                    | 表名称               |
| fieldName       | String                    | 目标列               |
| key             | String                    | 新数据               |
| autoCommit      | boolean                   | (可选，默认true)自动提交事务 |
| otherStatements | List\<PreparedStatement\> | (可选，默认null)附加查询语句 |

该方法将会返回一个布尔值来告知操作是否成功

###