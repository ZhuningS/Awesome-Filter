@echo off
set /p aa=�������ı���������׺����
set /p bb=���������ǰ������֣�
set /p cc=��������ں�������֣�
for /f "usebackq delims=" %%a in ("%aa%.md") do echo %bb%%%a%cc%>>temp.md
move temp.md "%aa%.md"pause