import { Language } from "@/enum/language";

class TextToSpeechService {
  speechSynth = window.speechSynthesis;

  getVoice(lang: Language) {
    return this.speechSynth.getVoices().find((voice) => voice.lang == lang);
  }

  speak = (message: string, lang: Language) => {
    return new Promise((resole) => {
      if (this.speechSynth.speaking) return;
      const speakText = new SpeechSynthesisUtterance(message);

      speakText.voice = this.getVoice(lang)!;
      speakText.rate = 0.85;
      speakText.pitch = 1;

      this.speechSynth.speak(speakText);

      speakText.onend = () => resole("");
    });
  };
}

export default TextToSpeechService;
