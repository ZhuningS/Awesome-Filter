@echo off
set /p aa=请输入文本（不含后缀）：
set /p bb=请输入加在前面的文字：
set /p cc=请输入加在后面的文字：
for /f "usebackq delims=" %%a in ("%aa%.md") do echo %bb%%%a%cc%>>temp.md
move temp.md "%aa%.md"pause