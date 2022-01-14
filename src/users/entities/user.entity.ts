import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Bobby', description: 'The firstname of the user' })
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Val', description: 'The lastname of the user' })
  @Column()
  lastName: string;
}
