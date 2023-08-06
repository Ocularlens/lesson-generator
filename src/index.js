import { TopicGenerator } from './utils/topicGenerator.js';

const TopicGen = new TopicGenerator();


async function start() {
  await TopicGen.sendMessage('Who is steph curry?');
}

start();