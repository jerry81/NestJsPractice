# NestJsPractice

## nest cli 
create a controller 
nest g controller cats

create a service
nest g service cats

create a module
nesg g module cats

create the whole stack
nest g resource - resource name -

## Middleware

processing before request handling 
right after client http request 

simplest example, logging

if mw doesn't require dependencies, use functional middleware 

## Unhandled exceptions

caught by default
500 
Internal server error

manually throw exception

create catch filter

## pipes

2 use case:
transform (string to int)
validation: evaluate input data 

happens after filters

example of transformation - userId to User entity

defaultValuePipe - to force a default value for a query param 

## Guard

determine if route handler should handle request

used for authentication

after middleware, before interceptor and pipe 

controller scoped, method scoped, or global

## Interceptor

example given also logging, so similar to middleware?

can be used to implement a timeout interceptor

## testing

supertest and jest

avoid database connection when testing for speed

## misc

using dependency injection instead of classes reduces mem usage b/c instances are reused

## sequelize 

nodejs connect with rdbms like mysql and postgres
instantiate connection with 
const sequelize = new sequelize(connectionUrl)
or
const sequelize = new Sequelize(database, username, password, { host, dialect })
then 
sequelize.authenticate
define models like 
const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
so this is like jpa 

ORM: object relation mapping - object oriented (ts) to data (db)

active record vs data mapper pattern:
AR - access db from models 
     query methods in model

DM - access db from repository layer 
     entities very dumb 

AM > DM for smaller (simpler)
DM > AM for larger (more manageable, separation of concerns)

typeOrm:
can choose active record or dm pattern 

also like jpa (orm)

nest: tight integration with typeOrm and sequelize OOTB

mongoose: an ODM

ODM: object document maapping like ORM for nosql like mongo

haven't seen before, in addition to entity, also can have entity schema 

queryRunner used for transactions
startTransaction
commitTransaction
rollbackTransaction
release

## caching

can happen at controller level

cacheInterceptor global caching 

in memory or heavy duty (redis)

## serialization 

for filtering out password before response
at entity level

## scheduling

cronjobs supported

## Queues

bull - redis based queue for node 
       queue.add
       queue.process

queue producer - does work and puts data on queue
consumer - gets data from queue and processes data

## events

for observer pattern
eventbus is provided
inject EventEmitter
emit event
@OnEvent annotation

## compression

gzip middleware done at web server level 
not recommended for high traffic as CPU usage will go up
recommended to offload to reverse proxy like nginx

## client

HTTPModule acts as nest's okHTTP

## Passport

nodejs authentication library

authentication middleware

one job: authenticate requests

password, oauth, federated (OpenId)

supporting https: 
need private key and public cert

## opteyes prototype 

github link: git@github.com:mulight-venture/endpoint.git

has docker compose with mysql image 
  - 2 volumes 
    - config files copied to mysql config 
    - data mapped to var/lib/mysql (db data)
environment variables on image set for root password, database, user, and password 
restart: unless-stopped flag - controls restart policy 
healthcheck - wait for service to be healthy before another dependency runs
ports mapping - 33006 to 3306