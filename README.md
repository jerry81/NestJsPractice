# NestJsPractice

## nest cli 
create a controller 
nest g controller cats

create a service
nest g service cats

create a module
nesg g module cats

## Middleware

processing before request handling 
right after client http request 

simplest example, logging

if mw doesn't require dependencies, use functional middleware 

## Unhandled exceptions

caught by default
500 
Internal server error

## misc

using dependency injection instead of classes reduces mem usage b/c instances are reused
