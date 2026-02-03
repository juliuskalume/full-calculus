@echo off
set DIR=%~dp0
set APP_HOME=%DIR%
set CLASSPATH=%APP_HOME%\gradle\wrapper\gradle-wrapper.jar
"%JAVA_HOME%\bin\java" -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*
