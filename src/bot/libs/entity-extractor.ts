import Recognizers from '@microsoft/recognizers-text-suite';

export default class EntityExtractor {
  private culture: string;

  public constructor(culture: string) {
    this.culture = culture;
  }

  extract(text: string) {
    const numbers = Recognizers.recognizeNumber(text, this.culture);
    const dateTime = Recognizers.recognizeDateTime(text, this.culture);
    const phoneNumber = Recognizers.recognizePhoneNumber(text, this.culture);
    const temperature = Recognizers.recognizeTemperature(text, this.culture);
    const booleans = Recognizers.recognizeBoolean(text, this.culture);
    const dimensions = Recognizers.recognizeDimension(text, this.culture);
    const culture = Recognizers.recognizeCurrency(text, this.culture);
    const ages = Recognizers.recognizeAge(text, this.culture);
    const percentages = Recognizers.recognizePercentage(text, this.culture);

    return Array.prototype.concat(numbers, dateTime, phoneNumber, temperature, booleans, dimensions, culture, ages, percentages);
  }
}
