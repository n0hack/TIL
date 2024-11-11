import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesTimelineDto } from './create-sales-timeline.dto';

export class UpdateSalesTimelineDto extends PartialType(CreateSalesTimelineDto) {}
