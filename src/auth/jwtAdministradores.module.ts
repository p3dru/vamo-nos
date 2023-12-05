import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

@Module({
    imports: [
        JwtModule.register({
            global: false,
            secret: jwtConstants.thirdSecret,
            signOptions: { expiresIn: '600s' },
        }),
    ],
    providers: [
        {
            provide: 'JwtAdministradoresService',
            useExisting: JwtService,
        },
    ],
    exports: ['JwtAdministradoresService'], 
})
export class JwtAdministradoresModule{};