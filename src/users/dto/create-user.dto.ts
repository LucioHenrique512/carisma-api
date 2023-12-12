import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  birthDate: string;
  @ApiProperty()
  phoneNumber: string;
  @ApiProperty()
  registrationNumber: string;
  @ApiProperty()
  cpf: string;
}
