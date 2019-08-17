import * as dotenv from 'dotenv';
import * as fs from 'fs';

const DOTENV_PATH = '.env';

export class ConfigService {

  private readonly config: { [key: string]: string };

  constructor() {
    this.config = dotenv.parse(fs.readFileSync(DOTENV_PATH))
    console.log(`Config`, this.config);
  }

  public get(key: string): string {
    return this.config[key];
  }
}