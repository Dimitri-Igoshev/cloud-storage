import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'test@test.com' })
  email: string;

  @ApiProperty({ default: 'Test' })
  firstName: string;

  @ApiProperty({ default: '12345678' })
  password: string;
}
