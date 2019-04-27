@echo off
:: 注意把要加的内容写在第8(即代码中more +8的那个数)行之下
for %%i in (*.md) do (
    more +8 "%~0" > "%%i.tmp"
    type "%%i" >> "%%i.tmp"
    move /y "%%i.tmp" "%%i"
)
goto :eof
[TOC]