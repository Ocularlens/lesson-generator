import { ChatGPTUnofficialProxyAPI } from 'chatgpt';

export class TopicGenerator {
  constructor() {
    this.api = new ChatGPTUnofficialProxyAPI({
      accessToken: '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',
      apiReverseProxyUrl: 'https://api.pawan.krd/backend-api/conversation',
      debug: true
    });
  }

  async sendMessage(message) {
    try {
      const res = await this.api.sendMessage(message, {
        onProgress: (partialResponse) => console.log(partialResponse.text),
      });

      console.log(res.text);
    } catch (error) {
      console.log({
        message: 'API_ERROR',
        error
      });
    }
  }
}
