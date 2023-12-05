import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

@Module({
    imports: [
        JwtModule.register({
            global: false,
            secret: jwtConstants.secondSecret,
            signOptions: { expiresIn: '600s' },
        }),
    ],
    providers: [
        {
            provide: 'JwtOrganizadoresService',
            useExisting: JwtService,
        },
    ],
    exports: ['JwtOrganizadoresService'],
})
export class JwtOrganizadoresModule{};