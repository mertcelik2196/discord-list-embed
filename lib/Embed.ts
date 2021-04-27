import { EventEmitter } from "events";
import {
    DMChannel,
    Emoji,
    Message,
    MessageReaction,
    NewsChannel,
    Snowflake,
    StringResolvable,
    TextChannel,
    User,
    Client,
    MessageEmbed
  } from 'discord.js';
import {Embeds} from "discord-paginationembed";

/* Burağa Selamlar */

export default class Embed extends EventEmitter {
public users:Snowflake[];
public channel: any;
public valu: any;
public sayfa: number;
public embedDes: Array<any>;
private pagination: any;
public bos: any;
public embedString: string;
constructor(authorization:Snowflake[],channel: TextChannel | DMChannel | NewsChannel, description:Array<any>,sayfa:number,color:string,value?:any){
super();
if(!authorization) throw new TypeError("Invalid Authorization User");
if(!channel) throw new TypeError("Invalid Channel");
if(!description) throw new TypeError("Invalid Description");
if(!sayfa) throw new TypeError("Invalid Page Number");
if(!color) throw new TypeError("Invalid Page Color");
this.bos = null;
this.users = authorization;
this.channel = channel;
this.embedDes = description;
this.sayfa = sayfa;
this.valu = value;
this.embedString = color;
this.pagination = new Embeds()
if(this.embedDes.length <= 0) return this.bos;
if(this.sayfa < 1) return this.bos;
};

async asyncForEach(array:Array<any>, callback:any): Promise<any> {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    };
};

 /**
     * Kullanış;
     * @param {[message.athor.id]} Discord.User  Embed Listelendiği Zaman Mesajdaki Tepki Kim Tarafından Çalıştırılmasını Ayarlar.
     * @param {message.channel} Discord.Channel Embed İçin Gerekli Olan Kanal Bilgilerini Alır.
     * @param {["message1","message2]} Array Embed'in Description Mesajını Belirler;
     * @param {1} Number Embedin Kaç Mesajdan Sonra Listeli Olmasını Ayarlar.
     * @param {"BLUE"} String Embed Rengini Ayarlar.
     * @param {"mesaj"} String Array Mesajındaki Tür {mesaj:"Selam"} Şeklinde Olursa String Türünde En Sona "selam" paramteresini çekebilmek için mesaj yazdık ve Returun olarak "selam" çıkar
     */


async build(): Promise<any> {
    let arrEm:Array<any> = [];
    this.embedDes.forEach((x:any) => {
        arrEm.push(x);
    });
    const embeds:Array<any> = [];
        let memberCount = 0;
        let totalMemberCount = 0;
        await this.asyncForEach(arrEm, async (member:any) => {
            const index = embeds.length === 0 ? 0 : embeds.length-1;
            let lastEmbed = embeds[index];
            if (lastEmbed && memberCount >= this.sayfa){
                lastEmbed = new MessageEmbed();
                embeds[embeds.length] = lastEmbed;
                memberCount = 0;
            } else if (!lastEmbed){
                lastEmbed = new MessageEmbed();
                embeds[index] = lastEmbed;
            }
            const oldDesc = lastEmbed.description || "";
            totalMemberCount++;
            const position =   totalMemberCount === 1 ? "🏆" :
                totalMemberCount === 2 ? "🥈" :
                    totalMemberCount === 3 ? "🥉" :
                        `**${totalMemberCount}.**`;
           lastEmbed.setDescription(`${oldDesc}\n${this.valu ? member[this.valu].replace("{{position}}",position) : member ? member.toString().replace("{{position}}",position) : null}\n`);
             memberCount++;
        });

        this.pagination
            .setArray(embeds)
            .setAuthorizedUsers(this.users)
            .setChannel(this.channel)
            .setPageIndicator(false)
            .setPage(1)
            .setDisabledNavigationEmojis(["delete","jump"])
            .setColor(this.embedString)

        this.pagination.build();
};

};
