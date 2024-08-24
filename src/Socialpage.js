import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Card from "./Card";

function Socialpage() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1 },
    );
  }, []);

  return (
    <div ref={textRef} className="flex-grow flex flex-col items-center justify-center gap-y-4">
      <Card
        thumbnail={"https://cdn.discordapp.com/attachments/976147303377272872/1276939677689057280/download.svg?ex=66cb5a3f&is=66ca08bf&hm=714f405a584238dccb91290c2130020990ab9408e2347e2ae020c98159b817ab&"}
        title= "Discord"
        description= "Join my discord server!"
        titleUrl={"https://discord.gg/VXbSXTC9xR"}
        thumbnailUrl={"https://discord.gg/VXbSXTC9xR"}
        thumbnailSize="w-16 h-16"
      />

      <Card
        thumbnail={"https://cdn.discordapp.com/attachments/976147303377272872/1276940547272998912/download_1.svg?ex=66cb5b0e&is=66ca098e&hm=19d1f058c5b10396c862966033a8b9bed329bc79d7bdc32ae4e3d12d6390a037&"}
        title= {"Github"}
        titleUrl={"https://github.com/4v0n"}
        thumbnailUrl={"https://github.com/4v0n"}
        thumbnailSize="w-16 h-16"
      />

      <Card
        thumbnail={"https://cdn.discordapp.com/attachments/976147303377272872/1276940921832865986/download_2.svg?ex=66cb5b68&is=66ca09e8&hm=715c6599060e8d7005da03be825824e966fa0675eb8ea651a31d66def5517074&"}
        title= {"Linkedin"}
        titleUrl={"https://www.linkedin.com/in/aron-kumarawatta-78b70a267/"}
        thumbnailUrl={"https://www.linkedin.com/in/aron-kumarawatta-78b70a267/"}
        thumbnailSize="w-16 h-16"
      />

      <Card
        thumbnail={"https://cdn.discordapp.com/attachments/976147303377272872/1276941557286699168/download_3.svg?ex=66cb5bff&is=66ca0a7f&hm=6451dfbae3ca9cc31c55df066718dc81a23d7f75598fafeef25fba3cbf0c3081&"}
        title= {"Twitch"}
        description= {"I stream sometimes."}
        titleUrl={"https://www.twitch.tv/4v0n_"}
        thumbnailUrl={"https://www.twitch.tv/4v0n_"}
        thumbnailSize="w-16 h-16"
      />

      <Card
        thumbnail={"https://cdn.discordapp.com/attachments/976147303377272872/1276942103871492178/download_4.svg?ex=66cb5c82&is=66ca0b02&hm=798e9c7c28a3a63ac361542c2e8e457a2063e894ed063b3ca1781e6e839a2015&"}
        title= {"YouTube"}
        description= {"This exists."}
        titleUrl={"https://www.youtube.com/@4v0n84"}
        thumbnailUrl={"https://www.youtube.com/@4v0n84"}
        thumbnailSize="w-16 h-16"
      />

      <Card
        thumbnail={"https://cdn.discordapp.com/attachments/976147303377272872/1276942478725087327/download_5.svg?ex=66cb5cdb&is=66ca0b5b&hm=8716487df37452aeccbb4c8f4a1f74e658a0271399280a06d91e8fad9a052400&"}
        title= {"osu!"}
        description= {"I ran out of things to put on here..."}
        titleUrl={"https://osu.ppy.sh/users/17888305"}
        thumbnailUrl={"https://osu.ppy.sh/users/17888305"}
        thumbnailSize="w-16 h-16"
      />
    </div>
  );
}

export default Socialpage;