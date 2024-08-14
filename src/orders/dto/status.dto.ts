import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(OrderStatusList, { message: `Possible values: ${OrderStatusList}` })
  status: OrderStatus;
}
