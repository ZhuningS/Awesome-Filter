@echo off
set work_path=D:\Program
set in_data=4321
pushd %work_path%
for /f "delims=" %%a in ('"dir /a-d/s/b *.txt"') do (
if exist %%a (echo;%in_data%>> %%a 
)
)
)
exit
