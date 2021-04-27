![Image](https://img.shields.io/npm/v/discord-list-embed?color=%2351F9C0&label=discord-list-embed) 
![Image](https://img.shields.io/npm/dt/discord-list-embed.svg?color=%2351FC0&maxAge=3600) 
#
![Image](https://nodei.co/npm/discord-list-embed.png?downloads=true&downloadRank=true&stars=true)
<br>

## Yüklemek İçin
```npm
npm install discord-list-embed
```

<br>

## Nasıl Kullanılır? 💫

# TypeSript 

```ts
import List from "discord-list-embed";
```


# JavaScript 
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const List  = require("discord-list-embed");

client.login("SUPER_GIZLI_TOKEN");


client.on("message",async message => {
if(message.content == "!embed") {
const embed = new List.Embed([message.author.id],message.channel,["Selam","Hello"],1,"BLUE");
//const embed = new List.Embed([message.author.id],message.channel,[{mesaj:"Selam",mesaj2:"Hello"}],1,"BLUE","mesaj");
 await embed.build();          
};
});

 /**
     * Kullanış;
     * @param {[message.athor.id]} Discord.User  Embed Listelendiği Zaman Mesajdaki Tepki Kim Tarafından Çalıştırılmasını Ayarlar.
     * @param {message.channel} Discord.Channel Embed İçin Gerekli Olan Kanal Bilgilerini Alır.
     * @param {["message1","message2]} Array Embed'in Description Mesajını Belirler;
     * @param {1} Number Embedin Kaç Mesajdan Sonra Listeli Olmasını Ayarlar.
     * @param {"BLUE"} String Embed Rengini Ayarlar.
     * @param {"mesaj"} String Array Mesajındaki Tür {mesaj:"Selam"} Şeklinde Olursa String Türünde En Sona "selam" paramteresini çekebilmek için mesaj yazdık ve Returun olarak "selam" çıkar
     */

```

Discord: ϯ Mert^^#2196