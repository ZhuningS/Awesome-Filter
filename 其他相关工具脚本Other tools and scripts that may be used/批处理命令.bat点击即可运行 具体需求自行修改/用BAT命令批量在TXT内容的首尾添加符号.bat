@echo off
set /p aa=�������ı���������׺����
set /p bb=���������ǰ������֣�
set /p cc=��������ں�������֣�
for /f "usebackq delims=" %%a in ("%aa%.txt") do echo %bb%%%a%cc%>>temp.txt
move temp.txt "%aa%.txt"pause