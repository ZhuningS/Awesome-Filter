@echo off

for /f "delims=" %%a in ('dir /b/a-d/oN *.*') do echo %%a >>提取文件名.txt