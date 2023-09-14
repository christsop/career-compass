import { Injectable } from '@nestjs/common';
import { questions } from "../data/questions";

@Injectable()
export class AppService {
  getQuestions() {
    return questions;
  }
}
