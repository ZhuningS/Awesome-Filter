@echo off
for f delims= %%i in ('dir sb .txt') do (
for f delims= %%a in ('type %%~fi') do (
set foo=%%a
call,set foo=%%foo1234=4311%%
call,echo%%foo%%%%~fi._
)
move %%~fi._ %%~fi
)
exit