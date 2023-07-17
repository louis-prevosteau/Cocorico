import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Role, Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    findOne(@User() user) {
        return this.usersService.findOne({ _id: user._id });
    }

    @UseGuards(JwtAuthGuard)
    @Patch('profile')
    update(@User() user, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update({ _id: user._id }, updateUserDto);
    }
}
