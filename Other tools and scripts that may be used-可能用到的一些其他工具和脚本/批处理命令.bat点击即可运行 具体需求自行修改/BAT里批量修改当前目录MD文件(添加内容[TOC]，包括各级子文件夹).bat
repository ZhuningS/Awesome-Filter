@echo off
set work_path=%CD%
set in_data=[TOC]
pushd %work_path%
for /f "delims=" %%a in ('"dir /a-d/s/b *.md"') do (
if exist %%a (echo;%in_data%>> %%a 
)
)
)
exit
