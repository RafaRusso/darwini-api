import { ApiProperty } from '@nestjs/swagger';

export class PaginationDTO {
  @ApiProperty({ default: 0, required: false })
  page: number;
  @ApiProperty({ default: 15, required: false })
  limit: number;
}
