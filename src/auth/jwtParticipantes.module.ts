import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

@Module({
    imports: [
        JwtModule.register({
            global: false,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '600s' },
        }),
    ],
    providers: [
        {
            provide: 'JwtParticipantesService',
            useExisting: JwtService,
        },
    ],
    exports: ['JwtParticipantesService'],
})
export class JwtParticipantesModule{};