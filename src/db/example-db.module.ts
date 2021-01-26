import { Module, DynamicModule } from '@nestjs/common'

@Module({}) // inject the connection provider
export class DatabaseModule {
    static forRoot(entities = [], options?): DynamicModule { 
        const providers = [] // make this real
        return {
            global: false,
            module: DatabaseModule,
            providers: providers,
            exports: providers
        }
    }
}

// in other modules, use like imports: [DatabaseModule.forRoot([<entity>])]