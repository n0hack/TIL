import { Inject, Injectable } from '@nestjs/common';
import path from 'path';
import * as dotenv from 'dotenv';
import fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor(@Inject('CONFIG_OPTIONS') private options: Record<string, any>) {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(__dirname, '../..', options.folder, filePath);

    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
