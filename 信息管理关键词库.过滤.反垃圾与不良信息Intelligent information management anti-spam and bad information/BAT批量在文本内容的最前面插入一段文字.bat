@echo off
:: ע���Ҫ�ӵ�����д�ڵ�8(��������more +8���Ǹ���)��֮��
for %%i in (*.txt) do (
    more +8 "%~0" > "%%i.tmp"
    type "%%i" >> "%%i.tmp"
    move /y "%%i.tmp" "%%i"
)
goto :eof
[TOC]