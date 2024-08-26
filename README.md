# VoiceOver for World of Warcraft [esES]

This repository has been created to support the spanish (es-ES) voices generation for [WoW VoiceOver Addon](https://github.com/mrthinger/wow-voiceover)

You can find Spanish generation examples on the [repository webpage](https://latra.github.io/wow-webvoices-esES) and provide some feedback about the quality.

The Voice Clonning Dataset used is based on World of Warcraft NPC voices, availables on [WoWHead](https://www.wowhead.com/classic/es/sounds), and some additions, mixes, and modifications to improve the results


## Voice Generation
The english version provided by [mrthinger](https://github.com/mrthinger) and the team that's behind the addon was created by using [ElevenLabs](https://elevenlabs.io/). 

In this spanish version, since I'm doing it to test other projects that I was working on and testing some open source AI models, the TTS and VoiceClonning is based on open source models and technologies, like:

- [xTTS v2](https://coqui.ai/blog/tts/open_xtts) from [Coqui](https://github.com/coqui-ai)
- [VITS](https://github.com/jaywalnut310/vits/) from [Jaehyeon Kim](https://github.com/jaywalnut310), [Jungil Kong](https://github.com/jik876), and [Juhee Son](https://github.com/juheeuu)
- [FreeVC](https://github.com/OlaWod/FreeVC) from [Jing-Yi Li](https://github.com/OlaWod)

## Other Spanish Versions
- [ES-MX](https://www.curseforge.com/wow/addons/voiceover-mod-espanol) by [Darkneo](https://www.curseforge.com/members/darkneo/projects)

## Voice Dataset
You can download the used voice dataset [HERE](https://github.com/latra/wow-webvoices-esES/releases/tag/v0.1.0)

To achieve better audio results, some voices from races that uses a lot of FX has been regularized by adding Human voices. 

GnomeMale audios are manually edited by increasing the pich in 2 semitones to achieve a more nasal voice that xTTS was unable to reach by their own.

## Known Issues
### Gnomes
- GnomeMaleZany voice is not working. The NPC that should use it are using GnomeMaleStandard voice #1

### Troll
- Troll voices are not speaking on the propper dialect (andalusian) #2