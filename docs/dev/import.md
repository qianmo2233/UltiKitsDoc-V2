# 导入库

## 使用远程仓库导入

### Maven

首先在 ` pom.xml ` 中添加仓库

```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>
```

然后添加依赖

```xml
<dependencies>
    <dependency>
        <groupId>com.github.wisdommen.UltiCore-Core</groupId>
        <artifactId>UltiCore-Core</artifactId>
        <version>d0cc4c3109</version>
    </dependency>
    <dependency>
        <groupId>com.github.wisdommen</groupId>
        <artifactId>UltiTools</artifactId>
        <version>5.2.1</version>
    </dependency>
</dependencies>
```

### Gradle

首先在 ` build.gradle ` 中添加仓库

```groovy
allprojects {
    repositories {
        maven { url 'https://jitpack.io' }
    }
}
```

然后添加依赖

```groovy
dependencies {
    implementation 'com.github.wisdommen:UltiTools:5.2.1'
    implementation 'com.github.wisdommen.UltiCore-Core:UltiCore-Core:d0cc4c3109'
}
```